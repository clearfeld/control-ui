import * as stylex from "@stylexjs/stylex";

import { Link } from "@controlkit/link";
import { Button, ButtonVariants } from "@controlkit/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@controlkit/card";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";

const styles = stylex.create({
	base: {
		display: "grid",
		height: "100%",
		width: "100%",
		position: "absolute",
		alignContent: "center",
		justifyContent: "center",
	},

	card: {
		width: "480px",
		borderRadius: "0.25rem",
	},

	content: {
		display: "grid",
		gap: "2rem",
	},

	padding: {
		padding: "1rem",
	},

	field: {
		display: "grid",
		gap: "0.5rem",
	},
});

export function Auth02() {
	return (
		<div {...stylex.props(styles.base)}>
			<Card extend={styles.card}>
				<CardHeader extend={styles.padding}>
					<CardTitle>Login</CardTitle>
					<br />
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>

				<CardContent extend={[styles.padding, styles.content]}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
					>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>

						<div {...stylex.props(styles.field)}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Label htmlFor="password">Password</Label>
								<Link href="#">Forgot your password?</Link>
							</div>

							<Input
								id="password"
								type="password"
								required
							/>
						</div>

						<Button
							type="submit"
							fullWidth
						>
							Login
						</Button>

						<Button
							variant={ButtonVariants.ACTION}
							fullWidth
						>
							Login with Google
						</Button>
					</div>

					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account? <Link href="#">Sign up</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
