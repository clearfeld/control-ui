import { H6 } from "@controlkit/headings";
import stylex from "@stylexjs/stylex";
import { Link, useMatches } from "react-router-dom";
import { componentsList } from "../component-list";

const styles = stylex.create({
  wrapper: {
    zIndex: 1,
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
    cursor: "pointer",
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

const getting_started = [
  {
    title: "Introduction",
    route: "/docs",
  },
];

const atom_components = [
  {
    title: "Alert",
    route: "/components/alert/examples",
  },
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
      <H6 extend={styles.title}>Getting Started</H6>

      {getting_started.map((component) => (
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

      <H6 extend={styles.title}>Components {/* Atoms */}</H6>

      {/* {atom_components.map((component) => (
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
      ))} */}

      {componentsList.map((component) => (
        <Link
          to={component.link}
          {...stylex.props(styles.link_unstyle)}
          key={component.title}>
          <div
            {...stylex.props(
              styles.link,
              cur_path === component.link && styles.link_active
            )}>
            {component.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
