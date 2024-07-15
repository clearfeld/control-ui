"use client";

import React from "react";
import * as stylex from '@stylexjs/stylex';

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
    base: {
        margin: 0,
        padding: 0,
        borderRadius: "0.25rem",
        width: "100%",
        border: "none",
        borderTop: "0.0625rem solid var(--divider-color, #808080)",
    },
});

function Divider({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHRElement>) {
    return (
        <hr
            {...stylex.props(styles.base, extend)}
            {...props}
        />
    );
}

export { Divider };