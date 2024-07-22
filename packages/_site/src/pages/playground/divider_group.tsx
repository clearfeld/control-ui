import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function DividerGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Divider</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Divider />
                </div>
            </div>

        </div>
    )
}