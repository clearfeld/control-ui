import stylex from "@stylexjs/stylex";

export const componentInfoStyles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },

  infoBlock: {
    position: "sticky",
    top: 0,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    textWrap: "nowrap",
  },

  copyTextBlock: {
    backgroundColor: "var(--cds-gray-200)",
    padding: "0.5rem",
    borderRadius: "var(--border-radius)",
  },

  textReset: {
    padding: 0,
    margin: 0,
  },

  labelValue: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
});
