import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Progress, ProgressTypes } from "@controlkit/progress-bar";

const page_styles = stylex.create({
    row: {
        display: "flex",
        gap: "1rem",
    },
});

export default function ProgressBarGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Progress Bar</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Progress
                        value={66}
                    />

                    <Progress
                        value={66}
                        variant={ProgressTypes.SUCCESS}
                    />

                    <Progress
                        value={66}
                        variant={ProgressTypes.DANGER}
                    />
                </div>
            </div>
        </div>
    )
}