"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

type ExtendProps = { extend?: stylex.StyleXStyles };

const DividerVariants = {
	HORIZONTAL: "horizontal",
	VERTICAL: "vertical",
} as const;

const styles = stylex.create({
	base: {
		shrink: "0",
		margin: 0,
		padding: 0,
		borderRadius: "0.25rem",

		border: "none",
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 0,
	},

	[DividerVariants.HORIZONTAL]: {
		width: "100%",
		borderTopWidth: "0.0625rem",
		borderStyle: "solid",
		borderColor: "var(--divider-color, #808080)",
		borderWidth: "100%",
		height: "0.0625rem",
	},

	[DividerVariants.VERTICAL]: {
		height: "100%",
		borderLeftWidth: "0.0625rem",
		borderStyle: "solid",
		borderColor: "var(--divider-color, #808080)",
		borderHeight: "100%",
		borderWidth: "100%",
		width: "0.0625rem",
	},
});

const Divider = ({
	className,
	extend,
	orientation = DividerVariants.HORIZONTAL,
	decorative = true,
	ref,
	...props
}: ComponentProps<typeof SeparatorPrimitive.Root> & ExtendProps) => (
	<SeparatorPrimitive.Root
		ref={ref}
		decorative={decorative}
		orientation={orientation}
		className={className}
		{...stylex.props(styles.base, styles[orientation], extend)}
		{...props}
	/>
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export { DividerVariants, Divider };
