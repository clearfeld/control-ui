import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H1, H2, H3, H4, H5, H6 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

const headingPageStyles = stylex.create({
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
});

export default function HeadingPage() {
	return (
		<div {...stylex.props(headingPageStyles.wrapper)}>
			<ComponentHero
				title="Heading"
				description="A heading is used as a title/subtitle element for pages."
			/>

			<div {...stylex.props(headingPageStyles.threeColumnLayout)}>
				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

				<div {...stylex.props(headingPageStyles.middleColumn)}>
					<H2>Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(headingPageStyles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/headings"
										npmjs="https://www.npmjs.com/package/@controlkit/headings"
										npmTitle="@controlkit/headings"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/headings"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(headingPageStyles.stepBlock)}>
									<H5>1. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										code={`"use client";

import type React from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		color: "var(--text-color, #FCFCFC)",
		width: "100%",
		margin: 0,
		padding: 0,
	},

	h1: {
		fontSize: "2.25rem",
		lineHeight: "2.5rem;",
		fontWeight: "800",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",

		textWrap: "balance",

		"@media (min-width: 1024px)": {
			fontSize: "3rem",
			lineHeight: "1",
		},
	},

	h2: {
		fontSize: "1.875rem",
		lineHeight: "2.25rem",
		fontWeight: "600",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",
	},

	h3: {
		fontSize: "1.5rem",
		lineHeight: "2rem",
		fontWeight: "600",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",
	},

	h4: {
		fontSize: "1.25rem",
		lineHeight: "1.75rem",
		fontWeight: "600",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",
	},

	h5: {
		fontSize: "1.0625rem",
		lineHeight: "1.5rem",
		fontWeight: "600",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",
	},

	h6: {
		fontSize: "1rem",
		lineHeight: "1.25rem",
		fontWeight: "600",
		letterSpacing: "-0.025rem",
		scrollMargin: "5rem",
	},
});

function H1({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			{...stylex.props(styles.base, styles.h1, extend)}
			{...props}
		/>
	);
}

function H2({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2
			{...stylex.props(styles.base, styles.h2, extend)}
			{...props}
		/>
	);
}

function H3({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			{...stylex.props(styles.base, styles.h3, extend)}
			{...props}
		/>
	);
}

function H4({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h4
			{...stylex.props(styles.base, styles.h4, extend)}
			{...props}
		/>
	);
}

function H5({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h5
			{...stylex.props(styles.base, styles.h5, extend)}
			{...props}
		/>
	);
}

function H6({ extend, ...props }: ExtendProps & React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h6
			{...stylex.props(styles.base, styles.h6, extend)}
			{...props}
		/>
	);
}

export { H1, H2, H3, H4, H5, H6 };`}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2>Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="H1"
							description="Heading level 1, the most important heading."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H1>Heading 1</H1>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H1 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H1>Heading 1</H1>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H2"
							description="Heading level 2."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H2>Heading 2</H2>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H2 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H2>Heading 2</H2>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H3"
							description="Heading level 3."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H3>Heading 3</H3>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H3 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H3>Heading 3</H3>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H4"
							description="Heading level 4."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H4>Heading 4</H4>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H4 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H4>Heading 4</H4>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H5"
							description="Heading level 5."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H5>Heading 5</H5>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H5 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H5>Heading 5</H5>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H6"
							description="Heading level 6, the least important heading."
						/>
						<div {...stylex.props(headingPageStyles.codeWrapper)}>
							<PreviewBlock>
								<H6>Heading 6</H6>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H6 } from "@controlkit/headings";

export default function DividerExample() {
	return (
		<H6>Heading 6</H6>
	);
}`}
							/>
						</div>
					</div>

				</div>

				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          help info
        </div> */}
			</div>
		</div>
	);
}
