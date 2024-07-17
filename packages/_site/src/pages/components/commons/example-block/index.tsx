import React from "react";
import { exampleBlockStyles } from "../styles";
import stylex from "@stylexjs/stylex";
import { H3 } from "@controlkit/headings";
import CodeBlock from "../code-block";
import { Button, ButtonVariants } from "@controlkit/button";
interface I_ExampleBlockProps {
  title: string;
  description: string;
}
export default function ExampleBlock({
  title,
  description,
}: I_ExampleBlockProps) {
  return (
    <div {...stylex.props(exampleBlockStyles.wrapper)}>
      <div>
        <H3>{title}</H3>
        <p>{description}</p>
      </div>
    </div>
  );
}
