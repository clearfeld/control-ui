import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
    base: {
        padding: "1rem 2rem",
    },

    divider: {
        margin: "1rem 0 0.5rem 0",
    },

    group: {
        padding: "1rem 0",
    },

    row: {
        display: "grid",
        gap: "1rem",
        alignItems: "center",
        margin: "1rem 0",
        boxSizing: "border-box",
    },

    btn_row: {
        gridTemplateColumns: "repeat(3, 5rem)",
    },
});

export default styles;