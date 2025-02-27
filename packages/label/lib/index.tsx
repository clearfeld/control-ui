"use client";

import type { ComponentProps } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		fontSize: "0.875rem",
		lineHeight: 1.5,
		color: "var(--text-color, #FCFCFC)",
	},
});

const Label = ({
	extend,
	style,
	ref,
	...props
}: ComponentProps<typeof LabelPrimitive.Root> & ExtendProps) => (
	<LabelPrimitive.Root
		ref={ref}
		{...stylex.props(styles.base, extend)}
		style={style}
		{...props}
	/>
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
