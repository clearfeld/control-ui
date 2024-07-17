import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Checkbox } from "@controlkit/checkbox";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function CheckboxGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Checkbox</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Checkbox />

                    <Checkbox disabled />

                    <Checkbox checked={true} disabled />
                </div>
            </div>

        </div>
    )
}