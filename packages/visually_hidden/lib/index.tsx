"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		width: "0.0625rem",
		height: "0.0625rem",
		padding: 0,
		position: "absolute",
		border: 0,
		clip: "rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem)",
		overflow: "hidden",
		whiteSpace: "nowrap",
	},
});

const VisuallyHidden = ({
	className,
	extend,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & ExtendProps) => {
	return (
		<span
			ref={ref}
			className={className}
			{...stylex.props(styles.base, extend)}
			{...props}
		/>
	);
};
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
