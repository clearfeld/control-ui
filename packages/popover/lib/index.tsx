"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		zIndex: 100,
		padding: 0,
		borderRadius: "var(--radius)",
		backgroundColor: "var(--secondary)",
		border: "0.0625rem solid var(--border, #333333)",
		outlineStyle: "none",
	},
});

// const Popover = PopoverPrimitive.Root;
const Popover = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Root>) => (
	<PopoverPrimitive.Root {...props} />
);
Popover.displayName = PopoverPrimitive.Root.displayName;

// const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverTrigger = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Trigger>) => (
	<PopoverPrimitive.Trigger {...props} />
);
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

// const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverAnchor = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Anchor>) => (
	<PopoverPrimitive.Anchor {...props} />
);
PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName;

const PopoverContent = ({
	extend,
	className,
	align = "center",
	sideOffset = 4,
	ref,
	...props
}: ComponentProps<typeof PopoverPrimitive.Content> & ExtendProps) => (
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
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
