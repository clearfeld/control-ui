import * as stylex from '@stylexjs/stylex';

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
// import { Label } from '@controlkit/label';
import { Input } from "@controlkit/input";

const page_styles = stylex.create({
    row: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

export default function InputGroup() {
    return (
        <div
            {...stylex.props(styles.group)}
        >
            <H2>Input</H2>

            <Divider
                extend={styles.divider}
            />

            <div
                {...stylex.props(styles.row)}
            >
                <div
                    {...stylex.props(page_styles.row)}
                >
                    <Input
                        placeholder="input"
                    />

                    <Input
                        type="password"
                        placeholder="password"
                    />

                    {/*
                    TODO(clearfeld): style
                    <Input type="file" />
                    */}

                    {/*
                    TODO(clearfeld): style
                    <Input type="number" />
                    */}

                    <Input
                        placeholder="disabled"
                        disabled
                    />
                </div>
            </div>

        </div>
    )
}