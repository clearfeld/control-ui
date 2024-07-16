import React from "react";
import { components } from "./styles";
import stylex from "@stylexjs/stylex";
import { H1, H2, H3 } from "@controlkit/headings";

interface I_ComponentCardProps {
  title: string;
  description: string;
  picture?: string;
}
export default function ComponentsPage() {
  function ComponentCard({
    description,
    title,
    picture,
  }: I_ComponentCardProps) {
    return (
      <div {...stylex.props(components.componentCard)}>
        <H2>{title}</H2>
        <p>{description}</p>
        <div {...stylex.props(components.placeholderImage)}></div>
      </div>
    );
  }
  return (
    <div {...stylex.props(components.wrapper)}>
      <div {...stylex.props(components.titleCard)}>
        <H1>Components</H1>
        <p>
          Components are used for some stuff to build some more stuff and then
          we need some more text here
        </p>
      </div>
      <div {...stylex.props(components.componentCardWrapper)}>
        <ComponentCard
          title="Component"
          description="Some component description"
        />
        <ComponentCard
          title="Component"
          description="Some component description"
        />
        <ComponentCard
          title="Component"
          description="Some component description"
        />
        <ComponentCard
          title="Component"
          description="Some component description"
        />
        <ComponentCard
          title="Component"
          description="Some component description"
        />
        <ComponentCard
          title="Component"
          description="Some component description"
        />
      </div>
    </div>
  );
}
