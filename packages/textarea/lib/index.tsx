"use client";

import type { DetailedHTMLProps, HTMLAttributes, TextareaHTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

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

		borderTopWidth: "0.0625rem",
		borderLeftWidth: "0.0625rem",
		borderRightWidth: "0.0625rem",
		borderBottomWidth: "0.0625rem",
		borderWidth: "100%",
		borderStyle: "solid",
		borderColor: "var(--border-color, #333333)",

		":hover": {
			borderColor: "var(--textarea-hover-color, #B3B3B3)",
		},

		":focus": {
			borderColor: "var(--textarea-focus-color, #00AAFF)",
		},
	},

	disabled: {
		opacity: "0.75",
	},
});

const Textarea = ({
	extend,
	className,
	disabled,
	style,
	ref,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> &
	TextareaProps &
	ExtendProps) => {
	return (
		<textarea
			ref={ref}
			className={className}
			{...stylex.props(styles.base, disabled && styles.disabled, extend)}
			style={style}
			disabled={disabled}
			{...props}
		/>
	);
};
Textarea.displayName = "Textarea";

export { Textarea };
