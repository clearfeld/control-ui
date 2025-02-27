"use client";

import type React from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
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

			":visited": {
				textDecorationColor: "var(--link-visited-color, #b6aef2)",
			},
		},

		":visited": {
			color: "var(--link-visited-color, #b6aef2)",
		},
	},
});

const Link = ({
	extend,
	style,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
	AnchorProps &
	ExtendProps) => {
	return (
		<a
			ref={ref}
			{...stylex.props(styles.base, extend)}
			style={style}
			{...props}
		/>
	);
};
Link.displayName = "Link";

export { Link };
