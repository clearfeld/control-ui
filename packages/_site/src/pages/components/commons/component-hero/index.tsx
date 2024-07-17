// import React from "react";
import stylex from "@stylexjs/stylex";
import { componentHeroStyles } from "../styles";
import { H1 } from "@controlkit/headings";
import { Link } from "react-router-dom";

interface I_ComponentHeroProps {
  title: string;
  description: string;
}
export default function ComponentHero({
  description,
  title,
}: I_ComponentHeroProps) {
  return (
    <div {...stylex.props(componentHeroStyles.heroCard)}>
      <div {...stylex.props(componentHeroStyles.textWrapper)}>
        <H1>{title}</H1>
        <p>{description}</p>
      </div>

      <div {...stylex.props(componentHeroStyles.pill)}>
        <Link
          {...stylex.props(componentHeroStyles.linkUnstyle)}
          to="/components/button/examples">
          Example
        </Link>
        <Link
          {...stylex.props(componentHeroStyles.linkUnstyle)}
          to="/components/button/code">
          Code
        </Link>
      </div>
    </div>
  );
}
