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
    borderTopWidth: "0.0625rem",
    borderBottomWidth: "0.0625rem",
    borderLeftWidth: "0.0625rem",
    borderRightWidth: "0.0625rem",
    borderStyle: "solid",
    borderColor: "var(--border-color)",
    borderRadius: "0.25rem",
    borderCollapse: "collapse",
    width: "100%",
    display: 'grid',
  },
  attributeHeaderRow: {
    padding: "0.25rem",
    display: 'grid',
    gridTemplateColumns: '1fr 2.7fr',
    backgroundColor: "var(--color-bg-compliment)",
    textAlign: "left",
    fontWeight: "bold",
    verticalAlign: "center",
  },
  attributeRow: {
    padding: "0.25rem",
    display: 'grid',
    gridTemplateColumns: '1fr 2.7fr',
    borderTopWidth: "0.0625rem",
    borderBottomWidth: "0rem",
    borderLeftWidth: "0rem",
    borderRightWidth: "0rem",
    borderStyle: "solid",
    borderColor: "var(--border-color)",
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
