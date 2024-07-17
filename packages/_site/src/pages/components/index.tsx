import { components } from "./styles";
import stylex from "@stylexjs/stylex";
import { H1, H2 } from "@controlkit/headings";
import { Link } from "react-router-dom";
import { componentsList } from "./component-list";

interface I_ComponentCardProps {
  title: string;
  description: string;
  picture?: string;
  link: string;
}
export default function ComponentsPage() {
  function ComponentCard({
    description,
    title,
    // picture,
    link,
  }: I_ComponentCardProps) {
    return (
      <Link
        to={link}
        {...stylex.props(components.link, components.componentCard)}>
        <H2>{title}</H2>
        <p>{description}</p>
        <div {...stylex.props(components.placeholderImage)} />
      </Link>
    );
  }
  return (
    <div {...stylex.props(components.wrapper)}>
      <div {...stylex.props(components.titleCard)}>
        <H1>Components</H1>
        <p>
          Components are the reusable building blocks of our design system. Each
          component meets a specific interaction or UI need, and has been
          specifically created to work together to create patterns and intuitive
          user experiences.
        </p>
      </div>
      <div {...stylex.props(components.componentCardWrapper)}>
        {componentsList.map((component) => {
          return (
            <ComponentCard
              key={component.title}
              title={component.title}
              link={component.link}
              description={component.description}
            />
          );
        })}
      </div>
    </div>
  );
}
