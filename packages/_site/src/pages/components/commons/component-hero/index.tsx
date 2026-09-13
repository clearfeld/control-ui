// import React from "react";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";

import { H1 } from "@controlkit/headings";
// import { Link } from "react-router-dom";

interface I_ComponentHeroProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

const componentHeroStyles = stylex.create({
  heroCard: {
    marginInline: "auto",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    padding: "2rem",
    paddingBottom: "0rem",
    boxSizing: "border-box",
    // border: "1px solid var(--border-100)",
    //height: "11rem",
    width: "100%",
    borderRadius: "var(--border-radius)",
    // background: "radial-gradient(circle at 100% 100%,#1cb1eb 15%, #0392cb 28%, #00b7ff 30%, #003A7E 32%, #000000 80%)",
    backgroundColor: "var(--color-bg-compliment)",
  },

  textWrapper: {
    maxWidth: "50%",
  },

  pill: {
    display: "flex",
    gap: "1rem",
    // border: "2px solid var(--border-100)",
    borderRadius: "var(--border-radius)",
    padding: "0.5rem",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },

  linkUnstyle: {
    textDecoration: "none",
    color: "var(--text-color)",
  },
});
export default function ComponentHero({
  description,
  title,
  children,
}: I_ComponentHeroProps) {
  return (
    <div {...stylex.props(componentHeroStyles.heroCard)}>
      <div {...stylex.props(componentHeroStyles.textWrapper)}>
        <H1>{title}</H1>
        <p>{description}</p>
      </div>

      {children && (
        <div {...stylex.props(componentHeroStyles.pill)}>{children}</div>
      )}
    </div>
  );
}
