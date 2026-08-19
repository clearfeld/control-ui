"use client";

import * as stylex from "@stylexjs/stylex";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
// import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

type ExtendProps = { extend?: stylex.StyleXStyles };

const rotate_up = stylex.keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(180deg)" },
});

const rotate_down = stylex.keyframes({
	from: { transform: "rotate(180deg)" },
	to: { transform: "rotate(0deg)" },
});

// Safely define keyframes for standard stylex property extraction
// 1. Define standard StyleX keyframe strings
const expandAnimation = stylex.keyframes({
	from: { height: 0 },
	to: { height: "var(--accordion-panel-height)" },
});

const collapseAnimation = stylex.keyframes({
	from: { height: "var(--accordion-panel-height)" },
	to: { height: 0 },
});

const styles = stylex.create({
	root: {
	},

	item: {
	},

	header: {
		display: "flex",

		borderBottomColor: "var(--border, #e4e4e7)",
		borderBottomStyle: "solid",
		borderBottomWidth: "0.0625rem",
	},

	trigger: {
		"[data-disabled]": {
			pointerEvents: "none",
			opacity: 0.5,
		},

		":focus-visible": {
			borderColor: "var(--ring, #3b82f6)",
			boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
		},

		borderColor: "transparent",

		borderStyle: "solid",
		borderWidth: "0",

		color: "var(--accordion-color, #FCFCFC)",

		flex: "1",
		outline: "none",
		paddingBlock: "0.5rem",

		alignItems: "center",

		backgroundColor: {
			default: "transparent",
			":hover": "var(--accordion-hover, #333333)",
		},


		boxSizing: "border-box",

		cursor: "pointer",
		display: "flex",
		fontSize: "0.875rem",
		fontWeight: "bold",
		justifyContent: "space-between",
		position: "relative",
		textAlign: "left",
		transitionDuration: "var(--transition-speed, 0.2s)",
		transitionProperty: "all",
		transitionTimingFunction: "ease",

		":is([data-panel-open]) > svg": {
			animationDelay: "0s",
			animationDuration: "var(--transition-speed, 0.2s)",
			animationFillMode: "forwards",
			animationIterationCount: 1,
			animationName: rotate_up,
			animationTimingFunction: "ease-out",
		},

		":not([data-panel-open]) > svg": {
			animationDelay: "0s",
			animationDuration: "var(--transition-speed, 0.2s)",
			animationFillMode: "forwards",
			animationIterationCount: 1,
			animationName: rotate_down,
			animationTimingFunction: "ease-out",
		},
	},

	panel: { // content
		"[data-closed]": {
			animationName: collapseAnimation,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationTimingFunction: "ease-in",
		},

		"[data-open]": {
			animationName: expandAnimation,
			animationDuration: "var(--transition-speed, 0.2s)",
			animationTimingFunction: "ease-out",
		},

		overflow: "hidden",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		height: "var(--accordion-panel-height)",
	},


	icon: {
		color: "var(--muted-foreground, #fcfcfc)",
		flexShrink: 0,
		pointerEvents: "none",
		height: "1.25rem",
		marginLeft: "auto",
		width: "1.25rem",
	},
});

function Accordion({
	extend,
	...props
}: AccordionPrimitive.Root.Props & ExtendProps) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			{...stylex.props(styles.root, extend)}
			{...props}
		/>
	);
}

function AccordionItem({
	extend,
	...props
}: AccordionPrimitive.Item.Props & ExtendProps) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			{...stylex.props(styles.item, extend)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	extend,
	children,
	...props
}: AccordionPrimitive.Trigger.Props & ExtendProps) {
	return (
		<AccordionPrimitive.Header
			{...stylex.props(styles.header)}
			render={<div />}
		// TODO: should split header into it's own export instead of combinging this with trigger like shadcn does
		// less flexable to adjust and awkard to work with otherwise
		>
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				{...stylex.props(styles.trigger, extend)}
				{...props}
			>
				{children}


				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-slot="accordion-trigger-icon"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"1rem"}
					height={"1rem"}
					{...stylex.props(styles.icon
						// , styles.iconDown
					)}
				>
					<title>Down Chevron Arrow</title>
					<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
				</svg>

				{/* <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          {...stylex.props(styles.icon, styles.iconDown)}
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          {...stylex.props(styles.icon, styles.iconUp)}
        /> */}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	extend,
	children,
	...props
}: AccordionPrimitive.Panel.Props & ExtendProps) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			{...stylex.props(styles.panel, extend)}
			{...props}
		>
			<div
			// {...stylex.props(styles.contentInner)}
			// {...stylex.props(extend)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };