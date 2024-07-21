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

const components = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
    padding: "2rem",
  },

  titleCard: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2rem",
    boxSizing: "border-box",
    // border: "1px solid var(--border-100)",
    height: "11rem",
    width: "100%",
    borderRadius: "var(--border-radius)",
    // background: "radial-gradient(circle at 100% 100%,#1cb1eb 15%, #0392cb 28%, #00b7ff 30%, #003A7E 32%, #000000 80%)",
    backgroundColor: "var(--color-bg-compliment)",
  },

  componentCard: {
    // border: "1px solid var(--border-100)",
    borderRadius: "var(--border-radius)",
    padding: "1rem",
    backgroundColor: "#121212", // "#121212",
    cursor: "pointer",
  },

  componentCardWrapper: {
    display: "grid",
    gridTemplateColumns: {
      default: "1fr 1fr 1fr",
      "@media (max-width: 1400px)": "1fr 1fr",
      "@media (max-width: 1024px)": "1fr",
    },
    gap: "1rem",
    marginTop: "4rem",
  },

  placeholderImage: {
    width: "100%",
    height: "6rem",
    backgroundColor: "#232323",
  },

  link: {
    textDecoration: "none",
    color: "white",
  },
});
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
