import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";

export default function CardPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Card"
				description="A card is a block of content neatly divided into Title, Content, Footer."
			/>

			<div {...stylex.props(styles.threeColumnLayout)}>
				<ContentsSidebar ref={divRef} />

				<div {...stylex.props(styles.middleColumn)}>
					<H2 id="installation">Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(styles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/card"
										npmjs="https://www.npmjs.com/package/@controlkit/card"
										npmTitle="@controlkit/card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/card"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										code={`"use client";

import { type HTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	card: {
		borderRadius: "0.75rem",
		borderWidth: "1px",
		backgroundColor: "var(--card-background, #252525)",
	},

	header: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "var(--card-header-background, #121212)",
	},

	title: {
		fontWeight: 600,
		letterSpacing: "-0.025em",
		lineHeight: 1,
		margin: 0,
		padding: 0,
		color: "var(--text, #FCFCFC)",
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		margin: 0,
		padding: 0,
		color: "var(--text-sub, #999999)",
	},

	content: {},

	footer: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "var(--card-footer-background, #121212)",
	},
});

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps>(
	({ extend, ...props }, ref) => (
		<div
			ref={ref}
			{...stylex.props(styles.card, extend)}
			{...props}
		/>
	),
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps>(
	({ extend, ...props }, ref) => (
		<div
			ref={ref}
			{...stylex.props(styles.header, extend)}
			{...props}
		/>
	),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement> & ExtendProps
>(({ extend, ...props }, ref) => (
	<h3
		ref={ref}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement> & ExtendProps
>(({ extend, ...props }, ref) => (
	<p
		ref={ref}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps>(
	({ extend, ...props }, ref) => (
		<div
			ref={ref}
			{...stylex.props(styles.content, extend)}
			{...props}
		/>
	),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps>(
	({ extend, ...props }, ref) => (
		<div
			ref={ref}
			{...stylex.props(styles.footer, extend)}
			{...props}
		/>
	),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2 id="examples">Examples</H2>
					<Divider />

					<div>
						<ExampleBlock
							title="Default"
							description="Default card with basic <p> elements in each section."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Card>
									<CardHeader>
										<CardTitle>Card Title</CardTitle>
										<CardDescription>Card Description</CardDescription>
									</CardHeader>
									<CardContent>
										<p>Card Content</p>
									</CardContent>
									<CardFooter>
										<p>Card Footer</p>
									</CardFooter>
								</Card>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";

export default function CardGroup() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
}`}
							/>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
