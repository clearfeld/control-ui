import type * as stylex from "@stylexjs/stylex";

// type ExtendProps = { extend?: stylex.StyleXStyles };

// const styles = stylex.create({
//     base: {
//         fontSize: "0.875rem",
//         lineHeight: 1.5,
//     },
// });

export type IconProps = {
    height?: string;
    width?: string;

    fill?: string;

    className?: string;

    extend?: stylex.StyleXStyles;
}