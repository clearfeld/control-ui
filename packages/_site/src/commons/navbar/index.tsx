import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import { styles } from "./styles";

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
