import React from "react";
import { componentInfoStyles } from "./styles";
import stylex from "@stylexjs/stylex";
import { H5 } from "@controlkit/headings";

interface I_ComponentInfoProps {
  install: string;
  npmjs: string;
  npmTitle: string;
  source: string;
}
export default function ComponentInfo({
  install,
  npmjs,
  source,
  npmTitle,
}: I_ComponentInfoProps) {
  return (
    <div {...stylex.props(componentInfoStyles.wrapper)}>
      <div {...stylex.props(componentInfoStyles.infoBlock)}>
        <div {...stylex.props(componentInfoStyles.labelValue)}>
          <H5>Install</H5>
          <div {...stylex.props(componentInfoStyles.copyTextBlock)}>
            <p {...stylex.props(componentInfoStyles.textReset)}>{install}</p>
          </div>
        </div>

        <div {...stylex.props(componentInfoStyles.labelValue)}>
          <H5>Npmjs</H5>
          <a href={npmjs}>{npmTitle}</a>
        </div>

        <div {...stylex.props(componentInfoStyles.labelValue)}>
          <H5>Source</H5>
          <a href={source}>Github</a>
        </div>
      </div>
    </div>
  );
}
