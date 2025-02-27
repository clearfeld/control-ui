"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	card: {
		borderWidth: "1px",
		backgroundColor: "var(--card-background, #252525)",
	},

	header: {
		borderRadius: "0.25rem 0.25rem 0 0",
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
		color: "var(--text-color, #FCFCFC)",
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		margin: 0,
		padding: 0,
		color: "var(--text-sub-color, #999999)",
	},

	content: {},

	footer: {
		borderRadius: "0 0 0.25rem 0.25rem",
		display: "flex",
		alignItems: "center",
		backgroundColor: "var(--card-footer-background, #121212)",
	},
});

const Card = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(styles.card, extend)}
		{...props}
	/>
);
Card.displayName = "Card";

const CardHeader = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(styles.header, extend)}
		{...props}
	/>
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => (
	<h3
		ref={ref}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & ExtendProps) => (
	<p
		ref={ref}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
);
CardDescription.displayName = "CardDescription";

const CardContent = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(styles.content, extend)}
		{...props}
	/>
);
CardContent.displayName = "CardContent";

const CardFooter = ({
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ExtendProps) => (
	<div
		ref={ref}
		{...stylex.props(styles.footer, extend)}
		{...props}
	/>
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
