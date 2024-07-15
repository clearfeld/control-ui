"use client";

import React from "react";
import * as stylex from '@stylexjs/stylex';

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
    base: {
        color: "var(--text-color, #FCFCFC)",
        width: "100%",
        margin: 0,
        padding: 0,
    },

    h1: {
        fontSize: "2.25rem",
        lineHeight: "2.5rem;",
        fontWeight: "800",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",

        textWrap: "balance",

        "@media (min-width: 1024px)": {
            fontSize: "3rem",
            lineHeight: "1",
        }
    },

    h2: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontWeight: "600",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",
    },

    h3: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: "600",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",
    },

    h4: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "600",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",
    },

    h5: {
        fontSize: "1.0625rem",
        lineHeight: "1.5rem",
        fontWeight: "600",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",
    },

    h6: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
        fontWeight: "600",
        letterSpacing: "-0.025rem",
        scrollMargin: "5rem",
    },
});

function H1({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            {...stylex.props(styles.base, styles.h1, extend)}
            {...props}
        />
    );
}

function H2({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            {...stylex.props(styles.base, styles.h2, extend)}
            {...props}
        />
    );
}

function H3({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            {...stylex.props(styles.base, styles.h3, extend)}
            {...props}
        />
    );
}

function H4({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4
            {...stylex.props(styles.base, styles.h4, extend)}
            {...props}
        />
    );
}

function H5({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h5
            {...stylex.props(styles.base, styles.h5, extend)}
            {...props}
        />
    );
}

function H6({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h6
            {...stylex.props(styles.base, styles.h6, extend)}
            {...props}
        />
    );
}

export { H1, H2, H3, H4, H5, H6 };