"use client";

// import type React from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const styles = stylex.create({
	base: {
		borderColor: {
			default: "var(--input-border-color, var(--border-color, #333333))",
			":hover": "var(--input-hover-color, #B3B3B3)",
			":focus": "var(--input-focus-color, #00AAFF)",
		},
		borderRadius: "0.25rem",
		borderStyle: "solid",
		borderWidth: "100%",

		outline: "none",

		backgroundColor: "transparent",

		boxShadow: "0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05)",
		boxSizing: "border-box",

		color: "var(--input-text, var(--text-color, #FCFCFC))",

		display: "flex",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",

		transitionDuration: "var(--transition-speed, 0.2s)",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",

		borderBottomWidth: "0.0625rem",
		borderLeftWidth: "0.0625rem",
		borderRightWidth: "0.0625rem",
		borderTopWidth: "0.0625rem",

		paddingBottom: "0.25rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",
		paddingTop: "0.25rem",

		width: "100%",

		"::placeholder": {
			color: "var(--input-text-placeholder, #666666)",
		},
	},

	// // TODO(clearfeld): add variants
	// success: {
	// 	borderColor: "var(--input-success-color, #44cb69)",
	// },

	// // TODO(clearfeld): add variants
	// error: {
	// 	borderColor: "var(--input-error-color, #ff2e00)",
	// },

	disabled: {
		opacity: "0.75",
		pointerEvents: "none",
	},
});

const Input = ({
	extend,
	style,
	type,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> &
	InputProps &
	ExtendProps) => {
	return (
		<input
			type={type}
			ref={ref}
			{...stylex.props(styles.base, props.disabled && styles.disabled, extend)}
			style={style}
			{...props}
		/>
	);
};
Input.displayName = "Input";

export { Input };
