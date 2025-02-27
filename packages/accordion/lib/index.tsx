"use client";

import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons"

type ExtendProps = { extend?: stylex.StyleXStyles };

const rotate_up = stylex.keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(180deg)" },
});

const rotate_down = stylex.keyframes({
	from: { transform: "rotate(180deg)" },
	to: { transform: "rotate(0deg)" },
});

const accordion_down = stylex.keyframes({
	from: { height: "0" },
	to: { height: "var(--radix-accordion-content-height)" },
});

const accordion_up = stylex.keyframes({
	from: { height: "var(--radix-accordion-content-height)" },
	to: { height: "0" },
});

const styles = stylex.create({
	item: {
		borderBottomWidth: "0.0625rem",

		":not(#__unused__) > h3": {
			margin: 0,
			padding: 0,
		},
	},

	trigger: {
		width: "100%",
		boxSizing: "border-box",
		padding: "0.5rem 0.5rem",
		display: "flex",
		flex: "1 1 0%",
		justifyContent: "space-between",
		alignItems: "center",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: 500,

		transitionProperty: "all",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",

		border: "none",
		borderBottom: "0.0625rem solid var(--accordion-border, #808080)",

		backgroundColor: "transparent",
		color: "var(--accordion-color, #FCFCFC)",
		cursor: "pointer",

		":hover": {
			backgroundColor: "var(--accordion-hover, #333333)",
		},

		':not(#__unused__):is([data-state="open"]) > svg': {
			animationName: rotate_up,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationDelay: "0s",
			animationTimingFunction: "ease-out",
			animationFillMode: "forwards",
			animationIterationCount: 1,
		},

		':not(#__unused__):is([data-state="closed"]) > svg': {
			animationName: rotate_down,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationTimingFunction: "ease-out",
			animationDelay: "0s",
			animationFillMode: "forwards",
			animationIterationCount: 1,
		},
	},

	content: {
		overflow: "hidden",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",

		':is([data-state="open"])': {
			animationName: accordion_down,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationTimingFunction: "ease-out",
		},

		':is([data-state="closed"])': {
			animationName: accordion_up,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationTimingFunction: "ease-out",
		},
	},
});

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
	ComponentRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={className}
		{...stylex.props(styles.item, extend)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
	ComponentRef<typeof AccordionPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & ExtendProps
>(({ className, extend, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={className}
			{...stylex.props(styles.trigger, extend)}
			{...props}
		>
			{children}
			{/* <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" /> */}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width={"1rem"}
				height={"1rem"}
			>
				<title>Down Chevron Arrow</title>
				<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
			</svg>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
	ComponentRef<typeof AccordionPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & ExtendProps
>(({ className, extend, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		{...stylex.props(styles.content)}
		{...props}
	>
		<div
			className={className}
			{...stylex.props(extend)}
		>
			{children}
		</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
