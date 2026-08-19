import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    cell: {
        padding: "0.5rem",
        textAlign: "left",
    },

    propName: {
        padding: "0.5rem",
        color: "var(--cds-blue-400)",
    },

    attDescription: {
        padding: "0.5rem",
        color: "var(--text-sub-color)",
    },

    table: {
        borderColor: "var(--border-color)",
        borderRadius: "0.25rem",
        borderStyle: "solid",
        borderCollapse: "collapse",
        display: 'grid',
        borderBottomWidth: "0.0625rem",
        borderLeftWidth: "0.0625rem",
        borderRightWidth: "0.0625rem",
        borderTopWidth: "0.0625rem",
        width: "100%",
    },

    attributeHeaderRow: {
        padding: "0.25rem",
        backgroundColor: "var(--color-bg-compliment)",
        display: 'grid',
        fontWeight: "bold",
        gridTemplateColumns: '1fr 2.7fr',
        textAlign: "left",
        verticalAlign: "center",
    },

    attributeRow: {
        padding: "0.25rem",
        borderColor: "var(--border-color)",
        borderStyle: "solid",
        display: 'grid',
        gridTemplateColumns: '1fr 2.7fr',
        borderBottomWidth: "0rem",
        borderLeftWidth: "0rem",
        borderRightWidth: "0rem",
        borderTopWidth: "0.0625rem",
    },
});

function AttributeTable({
    children,
}: any) {
    return (
        <div {...stylex.props(styles.table)}>
            <div {...stylex.props(styles.attributeHeaderRow)}>
                <div {...stylex.props(styles.cell)}>Attribute</div>
                <div {...stylex.props(styles.cell)}>Description</div>
            </div>
            {children}
        </div>
    );
}

function AttributeRow({
    name,
    value,
}: { name: string; value: string }) {
    return (
        <div {...stylex.props(styles.attributeRow)}>
            <div {...stylex.props(styles.propName)}>{name}</div>
            <div {...stylex.props(styles.attDescription)}>{value}</div>
        </div>
    );
}

export { AttributeTable, AttributeRow };
