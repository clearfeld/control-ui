import stylex from "@stylexjs/stylex";
import React from "react";
import ComponentHero from "../commons/component-hero";
import { buttonPageStyles } from "./styles";

export default function ButtonCode() {
  return (
    <div {...stylex.props(buttonPageStyles.wrapper)}>
      <ComponentHero
        title="Button"
        description="A button triggers an event or action. They let users know what will happen next."
      />
    </div>
  );
}
