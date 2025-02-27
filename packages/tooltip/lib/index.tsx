"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		overflow: "hidden",
		zIndex: 100,
		padding: "0.25rem 0.75rem",
		borderRadius: "0.125rem",
		fontSize: "0.75rem",
		lineHeight: "1rem",
		backgroundColor: "var(--tooltip-background, #121212)",
	},
});

// const TooltipProvider = TooltipPrimitive.Provider;
const TooltipProvider = ({
	extend,
	...props
}: ComponentProps<typeof TooltipPrimitive.Provider> & ExtendProps) => (
	<TooltipPrimitive.Provider
		{...stylex.props(extend)}
		{...props}
	/>
);
TooltipProvider.displayName = "TooltipProvider";

// const Tooltip = TooltipPrimitive.Root;
const Tooltip = ({
	extend,
	...props
}: ComponentProps<typeof TooltipPrimitive.Root> & ExtendProps) => (
	<TooltipPrimitive.Root
		{...stylex.props(extend)}
		{...props}
	/>
);
Tooltip.displayName = "Tooltip";

// const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipTrigger = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof TooltipPrimitive.Trigger> & ExtendProps) => (
	<TooltipPrimitive.Trigger
		ref={ref}
		{...stylex.props(extend)}
		className={className}
		{...props}
	/>
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = ({
	extend,
	sideOffset = 4,
	style,
	ref,
	...props
}: ComponentProps<typeof TooltipPrimitive.Content> & ExtendProps) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		{...stylex.props(styles.base, extend)}
		style={style}
		{...props}
	/>
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
