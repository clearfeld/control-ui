import * as stylex from "@stylexjs/stylex";

import { H2, H4 } from "@controlkit/headings";
import Dashboard04 from "./Dashboard04";
import { Auth01 } from "./auth_01";
import { Auth02 } from "./auth_02";
import { Auth } from "./auth";
import CookiesSettings from "./cookies_settings";

const styles = stylex.create({
  base: {
    width: "1366px",
    margin: "0 auto",
    marginTop: "2rem",
    padding: "0 1rem",
  },

  container: {
    marginTop: "1rem",
    border: "0.0625rem solid #666666",
    borderRadius: "0.25rem",
    overflow: "hidden",
    minHeight: "800px",
    position: "relative",
  },
});

export default function Examples() {
  return (
    <div {...stylex.props(styles.base)}>
      <H2>Mock Layouts</H2>

      <br />

      <H4>Dashboard 04 (WIP)</H4>
      <div {...stylex.props(styles.container)}>
        <Dashboard04 />
      </div>

      <br />

      <H4>Auth</H4>
      <div {...stylex.props(styles.container)}>
        <Auth />
      </div>

      <br />

      <H4>Auth 01 (WIP)</H4>
      <div {...stylex.props(styles.container)}>
        <Auth01 />
      </div>

      <br />

      <H4>Auth 02 (WIP)</H4>
      <div {...stylex.props(styles.container)}>
        <Auth02 />
      </div>

      <br />

      <H4>Cookies Setting Card (WIP)</H4>
      <div {...stylex.props(styles.container)}>
        <CookiesSettings />
      </div>

      <br />
    </div>
  );
}
