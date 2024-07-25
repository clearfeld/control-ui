"use client";

import { HTMLAttributes, forwardRef } from "react";
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

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
