import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Skeleton } from "@controlkit/skeleton";


const pulse = stylex.keyframes({
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
});

const ani_styles = stylex.create({
    pulse: {
        animationName: pulse,
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
    },
});

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function SkeletonGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Skeleton</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Skeleton
                        style={{
                            width: "20rem",
                            height: "12rem",
                        }}
                    />

                    <Skeleton
                        style={{
                            width: "20rem",
                            height: "2rem",
                        }}
                    />

                    <Skeleton
                        style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                        }}
                    />

                    {/* TODO(clearfeld): NOTE: working animation overwrite just style the group better later */}
                    <Skeleton
                        style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                        }}
                        extend={ani_styles.pulse}
                    />
                </div>
            </div>

        </div>
    )
}