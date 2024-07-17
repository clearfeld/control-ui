import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { LoadingSpinner, LoadingSize } from "@controlkit/loading";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function LoadingGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Loading</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <LoadingSpinner
                        size={LoadingSize.SMALL}
                    />

                    <LoadingSpinner
                        size={LoadingSize.MEDIUM}
                    />

                    <LoadingSpinner
                        size={LoadingSize.LARGE}
                    />
                </div>
            </div>

        </div>
    )
}