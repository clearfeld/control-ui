import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

import {
    Alert,
    AlertDescription,
    AlertTitle,
    AlertVariants,

    AlertIconDefault,
    AlertIconWarning,
    AlertIconDanger,
    AlertIconSuccess,
} from "@controlkit/alert"

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function AlertGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Alert</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Alert variant={AlertVariants.DEFAULT}>
                        <AlertIconDefault />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>

                    <Alert variant={AlertVariants.DANGER}>
                        <AlertIconDanger />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>

                    <Alert variant={AlertVariants.WARNING}>
                        <AlertIconWarning />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>

                    <Alert variant={AlertVariants.SUCCESS}>
                        <AlertIconSuccess />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>
                </div >
            </div >

        </div >
    )
}