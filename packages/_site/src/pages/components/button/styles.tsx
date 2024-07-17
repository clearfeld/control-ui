import stylex from "@stylexjs/stylex";

export const buttonPageStyles = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
    padding: "2rem",
  },

  threeColumnLayout: {
    display: "flex",
  },

  middleColumn: {
    width: "100%",
    height: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  codeWrapper: {
    // border: "1px solid var(--border-100)",
    borderRadius: "var(--border-radius)",
    backgroundColor: "#121212",
    padding: "1rem",
    boxSizing: "border-box",
  },

  blockWrapper: {
    padding: "1rem",
  },
});
