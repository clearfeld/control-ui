import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";

const styles = stylex.create({
  base: {
    height: "var(--navbar-size)",
    backgroundColor: "var(--navbar-color-bg)",
    position: "fixed",
    width: "100%",

    /*
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      alignItems: "center",
      padding: "0 1rem",
    */

    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    top: 0,
    zIndex: 1,
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

export default function Navbar() {
  return (
    <div {...stylex.props(styles.base)}>
      <div>
        <Link to={"/"} {...stylex.props(styles.link)}>
          Control Design System
        </Link>
      </div>

      {/* <div {...stylex.props(styles.pill)}>
        <Link to={"/components"} {...stylex.props(styles.link)}>
          Components
        </Link>

        <Link to={"/playground"} {...stylex.props(styles.link)}>
          Playground
        </Link>

        <Link to={"/components"} {...stylex.props(styles.link)}>
          About
        </Link>
      </div> */}

      <Link to={"/playground"} {...stylex.props(styles.link)}>
        Playground
      </Link>

      {/* <div {...stylex.props(styles.pill)}>
        <Link to={"/settings"} {...stylex.props(styles.link)}>
          Settings
        </Link>
      </div> */}
    </div>
  );
}
