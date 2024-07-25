import stylex from "@stylexjs/stylex";
// import InstallationBlock from "../commons/installation-block";
import { H2 } from "@controlkit/headings";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@controlkit/accordion";
import { Link } from "@controlkit/link";

const buttonPageStyles = stylex.create({
	wrapper: {
		width: "100%",
		height: "100%",
		padding: "2rem",
		boxSizing: "border-box",
	},

	threeColumnLayout: {
		display: "flex",
	},

	middleColumn: {
		width: "100%",
		height: "100%",
		//padding: "1rem",
		marginTop: "2rem",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
	},

	codeWrapper: {
		// border: "1px solid var(--border-100)",
		borderRadius: "var(--border-radius)",
		backgroundColor: "#121212",
		// padding: "1rem",
		boxSizing: "border-box",
	},

	blockWrapper: {
		marginTop: "1rem",
	},

	stepBlock: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},

	padding: {
		padding: "0 0 1rem 0",
	},
});

export default function Introduction() {
	return (
		<div {...stylex.props(buttonPageStyles.wrapper)}>
			<H2>Introduction</H2>

			<p>
				This is both a component library, and a collection of re-usable components that you
				can copy and paste into your apps.
			</p>

			<p>
				1. The components within this design system, can be installed as dependency and used
				as a traditional rigid design system.
			</p>

			<p>
				2. The components can also be copied over as re-usable components directly within
				your project, and restyled to suit your specific needs. Pick the components you
				need. Copy and paste the code into your project and customize to your needs. The
				code is yours.
			</p>

			<p>
				Feel free to use these components as a reference to build your own component
				libraries.
			</p>

			<H2>FAQ</H2>

			<Accordion type="multiple">
				<AccordionItem value="1">
					<AccordionTrigger>
						Why manuallly copy/paste and not use packages as a dependency?
					</AccordionTrigger>
					<AccordionContent {...stylex.props(buttonPageStyles.padding)}>
						<br />
						The idea behind this approach is to give you ownership and control over the
						code, allowing you to decide how the components are built and styled.
						<br />
						<br />
						Start with some sensible defaults, then customize the components to your
						needs.
						<br />
						<br />
						One of the drawbacks of packaging the components in an npm package is that
						the style is coupled with the implementation. The design of your components
						should be separate from their implementation.
						<br />
						<br />
						The popular shadcn/ui is the definitive example of this approach
						<br />
						<br />
						<Link href="https://ui.shadcn.com/docs">https://ui.shadcn.com/docs</Link>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="2">
					<AccordionTrigger>Are npm packages available?</AccordionTrigger>
					<AccordionContent {...stylex.props(buttonPageStyles.padding)}>
						<br />
						Yes. Each component will be available as an npm package so it's possible to
						use these components like a traditionally built design system.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="3">
					<AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
					<AccordionContent {...stylex.props(buttonPageStyles.padding)}>
						<br />
						You can use any framework that supports React. Next.js, Astro, Remix, Gatsby
						etc.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="4">
					<AccordionTrigger>Can I use this in my project?</AccordionTrigger>
					<AccordionContent {...stylex.props(buttonPageStyles.padding)}>
						<br />
						Yes. Free to use for personal and commercial projects. No attribution
						required.
						<br />
						<br />
						But hey, let us know if you do. We'd love to see what you build.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
