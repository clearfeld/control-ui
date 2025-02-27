"use client";

import * as stylex from "@stylexjs/stylex";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		color: "var(--text-color, #FCFCFC)",
		width: "100%",
		margin: 0,
		padding: 0,
		scrollMargin: "5rem",
	},

	h1: {
		fontSize: "2.75rem !important",
		lineHeight: "3.25rem !important",
		letterSpacing: "-0.025rem",

		textWrap: "balance",

		"@media (min-width: 1024px)": {
			fontSize: "3rem",
			lineHeight: "1",
		},
	},

	h2: {
		fontSize: "2.25rem !important",
		lineHeight: "2.75rem !important",
		letterSpacing: "-0.025rem",
		textWrap: "balance",
	},

	h3: {
		fontSize: "2rem !important",
		lineHeight: "2.5rem !important",
		letterSpacing: "-0.025rem",
		textWrap: "balance",
	},

	h4: {
		fontSize: "1.75rem !important",
		lineHeight: "2.25rem !important",
		letterSpacing: "-0.025rem",
	},

	h5: {
		fontSize: "1.5rem !important",
		lineHeight: "2rem !important",
		letterSpacing: "-0.025rem",
	},

	h6: {
		fontSize: "1.25rem !important",
		lineHeight: "1.75rem !important",
		letterSpacing: "-0.025rem",
	},
});

const H1 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h1
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h1, extend)}
			{...props}
		/>
	);
};
H1.displayName = "H1";

const H2 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h2
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h2, extend)}
			{...props}
		/>
	);
};
H2.displayName = "H2";

const H3 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h3
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h3, extend)}
			{...props}
		/>
	);
};
H3.displayName = "H3";

const H4 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h4
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h4, extend)}
			{...props}
		/>
	);
};
H4.displayName = "H4";

const H5 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h5
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h5, extend)}
			{...props}
		/>
	);
};
H5.displayName = "H5";

const H6 = ({
	extend,
	className,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & ExtendProps) => {
	return (
		<h6
			ref={ref}
			className={className}
			{...stylex.props(styles.base, styles.h6, extend)}
			{...props}
		/>
	);
};
H6.displayName = "H6";

export { H1, H2, H3, H4, H5, H6 };
