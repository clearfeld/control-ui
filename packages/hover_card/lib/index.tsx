"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		zIndex: 100,
		padding: "1rem",
		borderRadius: "0.375rem",
		borderWidth: "1px",
		outlineStyle: "none",
		width: "16rem",
		backgroundColor: "var(--hover-card-background, #121212)",
	},
});

// const HoverCard = HoverCardPrimitive.Root;
const HoverCard = ({ ...props }: ComponentProps<typeof HoverCardPrimitive.Root>) => (
	<HoverCardPrimitive.Root {...props} />
);
HoverCard.displayName = HoverCardPrimitive.Root.displayName;

// const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardTrigger = ({ ...props }: ComponentProps<typeof HoverCardPrimitive.Trigger>) => (
	<HoverCardPrimitive.Trigger {...props} />
);
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = ({
	className,
	extend,
	align = "center",
	sideOffset = 4,
	ref,
	...props
}: ComponentProps<typeof HoverCardPrimitive.Content> & ExtendProps) => (
	<HoverCardPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={className}
		{...stylex.props(styles.base, extend)}
		{...props}
	/>
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
