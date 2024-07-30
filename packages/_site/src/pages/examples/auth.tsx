import * as stylex from "@stylexjs/stylex";

import { Link } from "@controlkit/link";
import { Button, ButtonVariants } from "@controlkit/button";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";
import { H3 } from "@controlkit/headings";

const styles = stylex.create({
    base: {
        display: "grid",
        height: "100%",
        width: "100%",
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        gridTemplateColumns: ["1fr 1fr"],
        gridTemplateRows: ["1fr"],
    },

    leftSide: {
        backgroundColor: "var(--color-bg-compliment)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    logoWrap: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginLeft: "1.5rem",
        marginTop: "0.5rem",
    },

    field: {
        display: "grid",
        gap: "0.5rem",
    },

    rightSide: {
        display: "grid",
        height: "100%",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
    },

    passwordWrap: {
        display: "flex",
        justifyContent: "space-between",
    },

    description: {
        textAlign: "center",
        color: "var(--text-sub-color)",
    },

    textCenter: {
        textAlign: "center",
    },

    fieldsWrap: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },

    signup: {
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        marginTop: "2rem",
    },
});

export function Auth() {
    return (
        <div {...stylex.props(styles.base)}>
            <div {...stylex.props(styles.leftSide)}>
                <div {...stylex.props(styles.logoWrap)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={"2rem"}
                        height={"2rem"}
                    >
                        <title>Acme Logo</title>
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>

                    <h3>Acme Inc</h3>
                </div>
            </div>

            <div {...stylex.props(styles.rightSide)}>
                <H3 extend={styles.textCenter}>Login</H3>
                <p {...stylex.props(styles.description)}>Enter your email below to login to your account</p>

                <div {...stylex.props(styles.fieldsWrap)}>
                    <div {...stylex.props(styles.field)}>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>

                    <div {...stylex.props(styles.field)}>
                        <div {...stylex.props(styles.passwordWrap)}>
                            <Label htmlFor="password">Password</Label>
                            <Link href="#forgot-password">Forgot your password?</Link>
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

                <div {...stylex.props(styles.signup)}>
                    <span>Don&apos;t have an account?</span>
                    <span><Link href="#sign-up">Sign up</Link></span>
                </div>
            </div>
        </div>
    );
}
