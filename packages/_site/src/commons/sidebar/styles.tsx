import stylex from "@stylexjs/stylex";

export const sidebarStyles = stylex.create({
  wrapper: {
    width: "var(--sidebar-size)",
    padding: "1rem",
    position: "fixed",
    height: "100%",
    marginTop: "var(--navbar-size)",
    backgroundColor: "var(--sidebar-color-bg)",
    background: "rgba(0, 0, 0, 0.4)",
    boxSizing: "border-box",
  },

  card: {
    padding: "1rem",
    border: "1px solid var(--border-100)",
  },
});
