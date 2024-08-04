"use client";

import { type TextareaHTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const styles = stylex.create({
	base: {
		display: "flex",
		padding: "0.5rem",
		width: "100%",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		backgroundColor: "transparent",
		boxShadow: "0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05)",
		boxSizing: "border-box",
		outline: "none",
		borderRadius: "0.25rem",

		color: "var(--text-color, #FCFCFC)",
		transition: "border var(--transition-speed, 0.2s) ease",
		border: "0.0625rem solid var(--border-color, #333333)",

		":hover": {
			border: "0.0625rem solid var(--textarea-hover-color, #B3B3B3)",
		},

		":focus": {
			border: "0.0625rem solid var(--textarea-focus-color, #00AAFF)",
		},
	},

	disabled: {
		opacity: "0.75",
	},
});

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps & ExtendProps>(
	({ extend, className, disabled, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={className}
				{...stylex.props(
					styles.base,
					disabled && styles.disabled,
					extend
				)}
				disabled={disabled}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
