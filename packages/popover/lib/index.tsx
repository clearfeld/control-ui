"use client";

import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react"
import * as stylex from "@stylexjs/stylex";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		zIndex: 100,
		padding: 0,
		borderRadius: "0.25rem",
		borderWidth: "0.0625rem",
		outlineStyle: "none",
		width: "18rem",
	},
});

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = forwardRef<
	ComponentRef<typeof PopoverPrimitive.Content>,
	ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & ExtendProps
>(({ extend, className, align = "center", sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={className}
			{...stylex.props(styles.base, extend)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverAnchor,
};
