import * as stylex from "@stylexjs/stylex";
import { ChevronUpIcon, ChevronDownIcon } from "@controlkit/icons";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@controlkit/collapsible";
import { useState } from "react";
import CodeBlock from "../code-block";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
  cell: {
    padding: "0.5rem",
    textAlign: "left",
  },    
  propName: {
    padding: "0.5rem",
    color: "var(--cds-blue-400)",
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
    fontWeight: "bold"
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
  expandableContent: {
    padding: "0.5rem",
    backgroundColor: "var(--color-bg-compliment)",
    width: "100%",
  },
  expandableContentRow: {
    paddingTop: "1rem",
  },
  expandableContentFirstCell: {
    verticalAlign: "top",
    height: "2.5rem",
    width: "27.5%",
    color: "var(--text-sub-color)",
  },
  expandableContentSecondCell: {
    verticalAlign: "top",
    height: "2.5rem",
    width: "72.5%",
  },
});

function ComponentPropList({
    title,
    description,
    ...props
}: { title: string; description: string }) {
  return (
    <div>
        <h1>API Reference</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <div {...stylex.props(styles.table)}>
            <div {...stylex.props(styles.headerRow)}>
                <div {...stylex.props(styles.cell)}>Prop</div>
                <div {...stylex.props(styles.cell)}>Type</div>
                <div {...stylex.props(styles.cell)}>Default</div>
                <div />
            </div>
            <div {...props} />
        </div>
    </div>
  );
};

function ComponentPropRow({
    propName,
    type,
    description,
    defaultValue,
}: { propName: string; type: string; description: string; defaultValue: string | null } & ExtendProps) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        
        <Collapsible>
          <CollapsibleTrigger asChild>
            <div {...stylex.props(styles.row)} onClick={() => setIsChecked(!isChecked)}>
                <div {...stylex.props(styles.propName)}>{propName}</div>
                <div {...stylex.props(styles.cell)}>{type}</div>
                <div {...stylex.props(styles.cell)}>
                    {defaultValue || "-"}
                </div>
                <div {...stylex.props(styles.icon)}>
                    {isChecked ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <table {...stylex.props(styles.expandableContent)}>
                <tr {...stylex.props(styles.expandableContentRow)}>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Name</td>
                    <td {...stylex.props(styles.expandableContentSecondCell)}>{propName}</td>
                </tr>
                <tr {...stylex.props(styles.expandableContentRow)}>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Description</td>
                    <td {...stylex.props(styles.expandableContentSecondCell)}>{description}</td>
                </tr>
                <tr {...stylex.props(styles.expandableContentRow)}>
                    <td {...stylex.props(styles.expandableContentFirstCell)}>Type</td>
                    <td {...stylex.props(styles.expandableContentSecondCell)}>
                        <CodeBlock
                            language="tsx"
                            code={type}
                        />
                    </td>
                </tr>
            </table>
          </CollapsibleContent>
        </Collapsible>
    );
}

export { ComponentPropList, ComponentPropRow };
