import * as stylex from "@stylexjs/stylex";
import { H3, H6 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
import { Input } from "@controlkit/input";
import { Button, ButtonVariants } from "@controlkit/button";
import { Avatar, AvatarImage, AvatarFallback, AvatarSizes } from "@controlkit/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@controlkit/dropdown-menu";
import { Checkbox } from "@controlkit/checkbox";
import { Label } from "@controlkit/label";

export const styles = stylex.create({
	base: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},

	nav: {
		backgroundColor: "var(--navbar-color-bg)",
		display: "flex",
		padding: "0.5rem 1rem",
		alignItems: "center",
		justifyContent: "space-between",
	},

	divider: {
		margin: 0,
	},
});

export default function Dashboard04() {
	const profile_pic = "https://github.com/clearfeld.png";

	return (
		<div {...stylex.props(styles.base)}>
			<nav {...stylex.props(styles.nav)}>
				<div
					style={{
						display: "flex",
						gap: "1rem",
					}}
				>
					{/* <H6 style={{ textWrap: "nowrap" }}>Acme Inc</H6> */}
					<H6>Dashboard</H6>
					<H6>Orders</H6>
					<H6>Products</H6>
					<H6>Customers</H6>
					<H6>Settings</H6>
				</div>

				<div
					style={{
						display: "flex",
						gap: "1rem",
					}}
				>
					<Input placeholder="Search products" />

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Avatar size={AvatarSizes.MEDIUM}>
								<AvatarImage src={profile_pic} />
								<AvatarFallback>MR</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>

						<DropdownMenuContent
							align="end"
							style={{
								width: "12rem",
							}}
						>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									Settings
									<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuItem disabled>API</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								Log out
								<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>

			<main
				style={{
					backgroundColor: "var(--color-bg-compliment)",
					display: "grid",
					gridTemplateColumns: "1fr 4fr",
					height: "100%",
				}}
			>
				<div
					style={{
						padding: "1rem 2rem",
					}}
				>
					<H3>Settings</H3>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							marginTop: "2rem",
						}}
					>
						<span style={{ fontWeight: "bold" }}>General</span>
						<span>Security</span>
						<span>Integrations</span>
						<span>Support</span>
						<span>Organizations</span>
						<span>Advanced</span>
					</div>
				</div>

				<div
					style={{
						marginTop: "4.125rem",
						padding: "1rem 2rem",
						display: "flex",
						flexDirection: "column",
						gap: "2rem",
					}}
				>
					<div
						style={{
							backgroundColor: "var(--color-bg)",
						}}
					>
						{/* TODO: card comp atom */}
						<div
							style={{
								padding: "1rem",
							}}
						>
							<span>Store Name</span>
							<br />
							<span>Used to identify your store in the marketplace.</span>
							<br />
							<br />

							<Input placeholder="Search products" />
						</div>

						<Divider extend={styles.divider} />

						<div
							style={{
								padding: "0.75rem 1rem",
							}}
						>
							<Button variant={ButtonVariants.CREATE}>Save</Button>
						</div>
					</div>

					<div
						style={{
							backgroundColor: "var(--color-bg)",
						}}
					>
						<div
							style={{
								padding: "1rem",
							}}
						>
							<span>Plugins Directory</span>
							<br />
							<span>
								The directory within your project, in which your plugins are
								located.
							</span>
							<br />
							<br />

							<Input placeholder="Search products" />

							<div
								style={{
									display: "flex",
									gap: "0.5rem",
									marginTop: "1rem",
								}}
							>
								<Checkbox id="dashboard-04-checkbox" />
								<Label
									htmlFor="dashboard-04-checkbox"
									style={{
										color: "var(--color-text)",
									}}
								>
									Allow administrators to change the directory.
								</Label>
							</div>
						</div>

						<Divider extend={styles.divider} />

						<div
							style={{
								padding: "0.75rem 1rem",
							}}
						>
							<Button variant={ButtonVariants.CREATE}>Save</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
