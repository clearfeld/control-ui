"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import * as stylex from '@stylexjs/stylex';


type ExtendProps = { extend?: stylex.StyleXStyles, pure?: boolean };

const styles = stylex.create({
	card: {
		borderWidth: "1px",
		background: "var(--card, #171717)",
		borderRadius: "var(--radius, 0.625rem)",
	},

	header: {
		display: "flex",
		flexDirection: "column",
	},

	title: {
		margin: 0,
		padding: 0,
		color: "var(--foreground, #FCFCFC)",
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		margin: 0,
		padding: 0,
		color: "var(--muted-foreground, #a1a1a1)",
	},

	content: {},

	footer: {

	},
});

const Card = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(!pure && styles.card, extend)}
		{...props}
	/>
);
Card.displayName = "Card";

const CardHeader = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(!pure && styles.header, extend)}
		{...props}
	/>
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => (
	<h3
		ref={ref}
		{...stylex.props(!pure && styles.title, extend)}
		{...props}
	/>
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & ExtendProps) => (
	<p
		ref={ref}
		{...stylex.props(!pure && styles.description, extend)}
		{...props}
	/>
);
CardDescription.displayName = "CardDescription";

const CardContent = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(!pure && styles.content, extend)}
		{...props}
	/>
);
CardContent.displayName = "CardContent";

const CardFooter = ({
	extend,
	ref,
	pure,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(!pure && styles.footer, extend)}
		{...props}
	/>
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
