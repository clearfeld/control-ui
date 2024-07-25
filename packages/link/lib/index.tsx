"use client";

import React, { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const styles = stylex.create({
	base: {
		textDecoration: "underline",
		textDecorationColor: "transparent",

		width: "fit-content",

		color: "var(--link-color, #006699)",

		transition: "text-decoration var(--transition-speed, 0.2s) ease",

		":hover": {
			textDecorationColor: "var(--link-color, #006699)",
		},
	},
});

const Link = forwardRef<HTMLAnchorElement, AnchorProps & ExtendProps>(
	({ extend, ...props }, ref) => {
		return (
			<a
				ref={ref}
				{...stylex.props(styles.base, extend)}
				{...props}
			/>
		);
	},
);
Link.displayName = "Link";

export { Link };
