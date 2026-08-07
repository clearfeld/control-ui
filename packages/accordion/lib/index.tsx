"use client";

import * as stylex from "@stylexjs/stylex";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
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
		// borderBottomWidth: "0.0625rem",

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
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: "0.0625rem",
		borderWidth: "100%",
		borderStyle: "solid",
		borderColor: "var(--accordion-border, #808080)",

		backgroundColor: "transparent",
		color: "var(--accordion-color, #FCFCFC)",
		cursor: "pointer",

		":hover": {
			backgroundColor: "var(--accordion-hover, #333333)",
		},

		':is([data-panel-open]) > svg': {
			animationName: rotate_up,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationDelay: "0s",
			animationTimingFunction: "ease-out",
			animationFillMode: "forwards",
			animationIterationCount: 1,
		},

		':not([data-panel-open]) > svg': {
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
		height: "var(--accordion-panel-height)",

		// TODO: needs to be fixed since migrating to base-ui

		':is([data-panel-open])': {
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

// const Accordion = AccordionPrimitive.Root;
const Accordion = ({
	className,
	extend,
	ref,
	...props
}: AccordionPrimitive.Root.Props & ExtendProps) => (
	<AccordionPrimitive.Root
		ref={ref}
		data-slot="accordion"
		className={className}
		{...stylex.props(styles.item, extend)}
		{...props}
	/>
);

const AccordionItem = ({
	className,
	extend,
	ref,
	...props
}: AccordionPrimitive.Item.Props & ExtendProps) => (
	<AccordionPrimitive.Item
		ref={ref}
		data-slot="accordion-item"
		className={className}
		{...stylex.props(styles.item, extend)}
		{...props}
	/>
);

const AccordionTrigger = ({
	className,
	extend,
	children,
	ref,
	...props
}: AccordionPrimitive.Trigger.Props & ExtendProps) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			data-slot="accordion-trigger"
			className={className}
			{...stylex.props(styles.trigger, extend)}
			{...props}
		>
			{children}
			{/* <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" /> */}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				data-slot="accordion-trigger-icon"
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
);

const AccordionContent = ({
	className,
	extend,
	children,
	ref,
	...props
}: AccordionPrimitive.Panel.Props & ExtendProps) => {
	const resolvedClassName =
		typeof className === "function" ? undefined : className;

	return (
		<AccordionPrimitive.Panel
			ref={ref}
			data-slot="accordion-content"
			{...stylex.props(styles.content)}
			{...props}
		>
			<div
				className={resolvedClassName}
				{...stylex.props(extend)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
