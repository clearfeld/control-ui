"use client";

import type React from "react";
import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = stylex.create({
	base: {
		display: "flex",

		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",

		borderRadius: "0.25rem",
		border: "0.0625rem solid var(--input-border-color, var(--border-color, #333333))",

		":hover": {
			border: "0.0625rem solid var(--input-hover-color, #B3B3B3)",
		},

		":focus": {
			border: "0.0625rem solid var(--input-focus-color, #00AAFF)",
		},

		outline: "none",
		width: "100%",

		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		color: "var(--input-text, var(--text-color, #FCFCFC))",
		"::placeholder": {
			color: "var(--input-text-placeholder, #666666)",
		},

		boxSizing: "border-box",

		backgroundColor: "transparent",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "var(--transition-speed, 0.2s)",
		boxShadow: "0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05)",
	},

	// TODO(clearfeld): add variants
	success: {
		border: "0.0625rem solid var(--input-success-color, #44cb69)",
	},

	// TODO(clearfeld): add variants
	error: {
		border: "0.0625rem solid var(--input-error-color, #ff2e00)",
	},

	disabled: {
		opacity: "0.75",
		pointerEvents: "none",
	},
});

const Input = forwardRef<HTMLInputElement, InputProps & ExtendProps>(
	({ extend, type, ...props }, ref) => {
		return (
			<input
				type={type}
				ref={ref}
				{...stylex.props(styles.base, props.disabled && styles.disabled, extend)}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
