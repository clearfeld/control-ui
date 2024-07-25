"use client";

import React, { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const styles = stylex.create({
	base: {
		display: "flex",
		paddingTop: "0.5rem",
		paddingBottom: "0.5rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",
		borderRadius: "0.375rem",
		borderWidth: "0.0625rem",
		width: "100%",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		backgroundColor: "transparent",
		boxShadow: "0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05)",
		boxSizing: "border-box",
	},
});

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps & ExtendProps>(
	({ extend, ...props }, ref) => {
		return (
			<textarea
				//     "",
				ref={ref}
				{...stylex.props(styles.base, extend)}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
