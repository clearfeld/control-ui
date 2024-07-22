import * as stylex from "@stylexjs/stylex";

import { Button, ButtonVariants } from "@controlkit/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@controlkit/card";
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

export function Auth01() {
    return (
        <div
            {...stylex.props(styles.base)}
        >
            <Card
                extend={styles.card}
            >
                <CardHeader
                    extend={styles.padding}
                >
                    <CardTitle>Login</CardTitle>
                    <br />
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>

                <CardContent
                    extend={[
                        styles.padding,
                        styles.content
                    ]}
                >
                    <div {...stylex.props(styles.field)}>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>

                    <div {...stylex.props(styles.field)}>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                </CardContent>

                <CardFooter
                    extend={styles.padding}
                >
                    <Button fullWidth variant={ButtonVariants.CREATE}>Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
