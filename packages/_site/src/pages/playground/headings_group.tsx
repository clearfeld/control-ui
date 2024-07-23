import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H1, H2, H3, H4, H5, H6 } from '@controlkit/headings';

// import { Label } from '@controlkit/label';

export default function HeadingsGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Headings</H2>

            <div
                {...stylex.props(styles.row)}
            >
                <H1>h1 - title</H1>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <H2>h2 - title</H2>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <H3>h3 - title</H3>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <H4>h4 - title</H4>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <H5>h5 - title</H5>
            </div>

            <div
                {...stylex.props(styles.row)}
            >
                <H6>h6 - title</H6>
            </div>
        </div>
    )
}