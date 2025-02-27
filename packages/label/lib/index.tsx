"use client";

import type React from "react";
import { forwardRef } from "react";
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

const Label = forwardRef<
	React.ComponentRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & ExtendProps
>(({ extend, style, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		{...stylex.props(styles.base, extend)}
		style={style}
		{...props}
	/>
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
