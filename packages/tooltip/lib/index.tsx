"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
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

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
	ElementRef<typeof TooltipPrimitive.Content>,
	ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & ExtendProps
>(({ extend, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		{...stylex.props(styles.base, extend)}
		{...props}
	/>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
