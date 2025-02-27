"use client";

import type React from "react";
import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as ProgressPrimitive from "@radix-ui/react-progress";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	variant?: ProgressTypes; // TODO: clean
};
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

enum ProgressTypes {
	LOADING = "loading",
	SUCCESS = "success",
	DANGER = "danger",
	// WARNING = "warning", ?
}

const styles = stylex.create({
	base: {
		overflow: "hidden",
		position: "relative",
		borderRadius: "9999px",
		width: "100%",
		height: "0.5rem",
		backgroundColor: "var(--progress-bar-background-color, #333333)",
	},

	bar: {
		flex: "1 1 0%",
		width: "100%",
		height: "100%",
		transitionProperty: "all",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "300ms",
	},

	[ProgressTypes.LOADING]: {
		backgroundColor: "var(--progress-bar-loading-color, #0088cc)",
	},

	[ProgressTypes.DANGER]: {
		backgroundColor: "var(--progress-bar-danger-color, #cc2500)",
	},

	[ProgressTypes.SUCCESS]: {
		backgroundColor: "var(--progress-bar-success-color, #30ab53)",
	},
});

const Progress = ({
	extend,
	value,
	variant = ProgressTypes.LOADING,
	ref,
	...props
}: ComponentProps<typeof ProgressPrimitive.Root> & ExtendProps) => (
	<ProgressPrimitive.Root
		ref={ref}
		{...stylex.props(styles.base, extend)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			{...stylex.props(
				styles.bar,
				styles[variant],
				// TODO(clearfeld): should allow bar color to be extendable
			)}
			style={{
				transform: `translateX(-${100 - (value || 0)}%)`,
			}}
		/>
	</ProgressPrimitive.Root>
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, ProgressTypes };
