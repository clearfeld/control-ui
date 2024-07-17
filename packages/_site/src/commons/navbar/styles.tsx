import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  base: {
    height: "var(--navbar-size)",
    //backgroundColor: "var(--navbar-color-bg)",
    background: "rgba(0, 0, 0, 1)",
    position: "fixed",
    width: "100%",
    /* display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    padding: "0 1rem", */
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    top: 0,
  },

  link: {
    textDecoration: "none",
    color: "var(--text-color)",
  },

  pill: {
    display: "flex",
    gap: "1rem",
    border: "2px solid var(--border-100)",
    borderRadius: "var(--border-radius)",
    padding: "0.5rem",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
});
