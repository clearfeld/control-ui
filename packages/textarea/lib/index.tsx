"use client";

import type { DetailedHTMLProps, HTMLAttributes, TextareaHTMLAttributes } from "react";
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
		boxShadow: "var(--shadow)",
		boxSizing: "border-box",
		outline: "none",
		borderRadius: "var(--radius)",

		color: "var(--foreground, #FCFCFC)",
		transition: "border var(--transition-speed, 0.2s) ease",
		border: "0.0625rem solid var(--border, #333333)",

		":hover": {
			border: "0.0625rem solid var(--accent, #B3B3B3)",
		},

		":focus": {
			border: "0.0625rem solid var(--primary, #00AAFF)",
		},
	},

	disabled: {
		opacity: "0.75",
		cursor: "not-allowed",
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
