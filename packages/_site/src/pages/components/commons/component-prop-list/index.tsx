import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "@controlkit/icons";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@controlkit/collapsible";
import { useState } from "react";

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
  attributeTable: {
    width: "100%",
    borderWidth: "0.0625rem",
    borderStyle: "solid",
    borderColor: "var(--border-color)",
    borderRadius: "0.25rem",
  },
  row: {
    padding: "0.25rem",
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr 1fr 0.2fr',
    borderTopWidth: "0.0625rem",
    borderBottomWidth: "0rem",
    borderLeftWidth: "0rem",
    borderRightWidth: "0rem",
    borderStyle: "solid",
    borderColor: "var(--border-color)",
    ':hover': {
        backgroundColor: "var(--ds-surface-sunken)",
    },
  },
  headerRow: {
    padding: "0.25rem",
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr 1fr 0.2fr',
    backgroundColor: "var(--color-bg-compliment)",
    textAlign: "left",
    fontWeight: "bold",
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
  noBorder: {
    border: "none",
    borderTopWidth: "0rem",
    borderBottomWidth: "0rem",
    borderLeftWidth: "0rem",
    borderRightWidth: "0rem",
  },
  icon: {
    padding: "0.5rem",
    width: "10%",
  },
  iconInverted: {
    padding: "0.5rem",
    width: "10%",
    transform: "translateX(15px) translatey(-5px) rotate(180deg)",
  },
  expandableContent: {
    padding: "0.5rem",
    paddingTop: "1rem",
    backgroundColor: "var(--color-bg-compliment)",
    width: "100%",
  },
  expandableContentRow: {
    paddingTop: "1rem",
  },
  expandableContentFirstCell: {
    textAlign: "left",
    verticalAlign: "top",
    paddingBottom: "1rem",
    width: "27.5%",
    color: "var(--text-sub-color)",
  },
  expandableContentSecondCell: {
    textAlign: "left",
    verticalAlign: "top",
    paddingBottom: "1rem",
    width: "72.5%",
  },
  codeText: {
    color: "var(--cds-purple-700)",
  }
});

function ComponentPropList({
    children,
}: any) {
  return (
    <div>
        <div {...stylex.props(styles.table)}>
            <div {...stylex.props(styles.headerRow)}>
                <div {...stylex.props(styles.cell)}>Prop</div>
                <div {...stylex.props(styles.cell)}>Type</div>
                <div {...stylex.props(styles.cell)}>Default</div>
                <div />
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
  );
};

function ComponentPropRow({
    propName,
    type,
    description,
    defaultValue,
}: { propName: string; type: string; description: string; defaultValue: string | null }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Collapsible open={isChecked}
            onOpenChange={(open) => setIsChecked(open)}
        >
          <CollapsibleTrigger asChild>
            <div {...stylex.props(styles.row)}>
                <div {...stylex.props(styles.propName)}>{propName}</div>
                <div {...stylex.props(styles.cell)}>{type}</div>
                <div {...stylex.props(styles.cell)}>
                    {defaultValue || "-"}
                </div>
                <div {...stylex.props(isChecked ? styles.iconInverted : styles.icon)}>
                    <ChevronDownIcon />
                </div>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <table {...stylex.props(styles.expandableContent)}>
                <tr>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Name</td>
                    <td {...stylex.props(styles.expandableContentSecondCell)}>{propName}</td>
                </tr>
                <tr>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Description</td>
                    <td {...stylex.props(styles.expandableContentSecondCell)}>{description}</td>
                </tr>
                <tr>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Type</td>
                    <td {...stylex.props(styles.expandableContentSecondCell, styles.codeText)}>
                        {type}
                    </td>
                </tr>
            </table>
          </CollapsibleContent>
        </Collapsible>
    );
}

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

export { ComponentPropList, ComponentPropRow, AttributeTable, AttributeRow };
