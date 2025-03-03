"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	list: {
		display: "inline-flex",
		alignItems: "center",

		borderBottom: "0.0625rem solid var(--tab-divider-color, #666666)",
		padding: 0,

		width: "100%",

		justifyContent: "flex-start",
	},

	trigger: {
		position: "relative",
		top: "0.0625rem",

		display: "inline-flex",

		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",

		justifyContent: "center",
		alignItems: "center",

		// borderRadius: "0.25rem 0.25rem 0 0",

		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: "500",
		whiteSpace: "nowrap",

		transitionProperty: "all",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.1s)",

		outline: "none",
		border: "none",
		borderBottom: "0.0625rem solid var(--tab-divider-color, #666666)",

		backgroundColor: "unset",
		cursor: "pointer",
		color: "var(--tab-trigger-inactive-color, #939393)",

		":hover": {
			backgroundColor: "var(--tab-trigger-hover, #333333)",
		},

		// TODO: update this in the future when stylex offers an official solution
		// https://github.com/facebook/stylex/discussions/380#discussioncomment-8252799
		':is([data-state="active"])': {
			color: "var(--tab-trigger-active-color, #FCFCFC)",
			borderBottom: "0.0625rem solid var(--tab-border-color, #006699)",
		},
	},

	content: {
		marginTop: "0.5rem;",
	},
});

// const Tabs = TabsPrimitive.Root;
const Tabs = ({
	className,
	extend,
	style,
	ref,
	...props
}: ComponentProps<typeof TabsPrimitive.Root> & ExtendProps) => (
	<TabsPrimitive.Root
		ref={ref}
		{...stylex.props(extend)}
		className={className}
		style={style}
		{...props}
	/>
);
Tabs.displayName = "Tabs";

const TabsList = ({
	extend,
	style,
	ref,
	...props
}: ComponentProps<typeof TabsPrimitive.List> & ExtendProps) => (
	<TabsPrimitive.List
		ref={ref}
		{...stylex.props(styles.list, extend)}
		style={style}
		{...props}
	/>
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({
	extend,
	style,
	ref,
	...props
}: ComponentProps<typeof TabsPrimitive.Trigger> & ExtendProps) => (
	<TabsPrimitive.Trigger
		ref={ref}
		{...stylex.props(
			styles.trigger,
			// ref.dataset.data-state
			extend,
		)}
		style={style}
		{...props}
	/>
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
	extend,
	style,
	ref,
	...props
}: ComponentProps<typeof TabsPrimitive.Content> & ExtendProps) => (
	<TabsPrimitive.Content
		ref={ref}
		{...stylex.props(styles.content, extend)}
		style={style}
		{...props}
	/>
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
