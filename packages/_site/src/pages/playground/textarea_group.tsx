import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Textarea } from '@controlkit/textarea';

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function TextareaGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Textarea</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Textarea placeholder="playground" />
                </div>
            </div>

        </div>
    )
}