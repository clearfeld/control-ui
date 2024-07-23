import { H6 } from "@controlkit/headings";
import stylex from "@stylexjs/stylex";
import { Link, useMatches } from "react-router-dom";

const styles = stylex.create({
  wrapper: {
    width: "var(--sidebar-size)",
    backgroundColor: "var(--color-bg)",
    position: "fixed",
    height: "100%",
    // padding: "1rem",
    boxSizing: "border-box",
    borderRight: "0.0625rem solid var(--border-color, #333333)",
  },

  title: {
    boxSizing: "border-box",
    padding: "0.5rem 1rem",
  },

  link: {
    boxSizing: "border-box",
    width: "100%",
    padding: "0.25rem 1rem",
    position: "relative",
    curosr: "pointer",
    transition: "background-color var(--transition-speed) ease",

    ":hover": {
      backgroundColor: "var(--ds-surface)",
    },
  },

  link_active: {
    backgroundColor: "var(--ds-surface-sunken)",
    "::before": {
      content: "",
      backgroundColor: "#006699",
      width: "0.25rem",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
    },
  },

  link_unstyle: {
    textDecoration: "none",
    color: "var(--color-text)",
  },
});

const atom_components = [
  {
    title: "Accordian",
    route: "/components/accordian/examples",
  },
  {
    title: "Avatar",
    route: "/components/avatar/examples",
  },
  {
    title: "Button",
    route: "/components/button/examples",
  },

  {
    title: "Divider",
    route: "/components/divider/examples",
  },
];

export default function ComponentsSidebar() {
  const matches = useMatches();
  const cur_path = matches[matches.length - 1].pathname;

  return (
    <div {...stylex.props(styles.wrapper)}>
      <H6 extend={styles.title}>Components {/* Atoms */}</H6>

      {atom_components.map((component) => (
        <Link
          to={component.route}
          {...stylex.props(styles.link_unstyle)}
          key={component.title}>
          <div
            {...stylex.props(
              styles.link,
              cur_path === component.route && styles.link_active
            )}>
            {component.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
