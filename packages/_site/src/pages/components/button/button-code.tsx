// import React from "react";
import stylex from "@stylexjs/stylex";
import ComponentHero from "../commons/component-hero";

const buttonPageStyles = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
    padding: "2rem",
  },
});

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
