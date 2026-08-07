"use client";

import type { HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	size?: T_LoadingSize;
};

type T_LoadingSize = (typeof LoadingSize)[keyof typeof LoadingSize];

const LoadingSize = {
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large",
} as const;

const spin = stylex.keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

const SkeletonAnimations = stylex.create({
	spin: {
		animationName: spin,
		animationDuration: "1.5s",
		// animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
		animationTimingFunction: "ease",
		animationIterationCount: "infinite",
	},
});

const styles = stylex.create({
	base: {
		borderRadius: "50%",

		backgroundColor: "transparent",
		animation: "spin 0.75s linear infinite",
	},

	[LoadingSize.SMALL]: {
		width: "var(--spinner-size-small, 0.75rem)",
		height: "var(--spinner-size-small, 0.75rem)",

		borderTopWidth: "0.125rem",
		borderLeftWidth: "0.125rem",
		borderRightWidth: "0.125rem",
		borderBottomWidth: "0.125rem",
		borderWidth: "100%",
		borderStyle: "solid",
		borderColor: "var(--spinner-background-color, #99ddff)",
		borderTopColor: "var(--spinner-primary-color, #00aaff)",
	},

	[LoadingSize.MEDIUM]: {
		width: "var(--spinner-size-medium, 1.5rem)",
		height: "var(--spinner-size-medium, 1.5rem)",

		borderTopWidth: "0.25rem",
		borderLeftWidth: "0.25rem",
		borderRightWidth: "0.25rem",
		borderBottomWidth: "0.25rem",
		borderWidth: "100%",
		borderStyle: "solid",
		borderColor: "var(--spinner-background-color, #99ddff)",
		borderTopColor: "var(--spinner-primary-color, #00aaff)",
	},

	[LoadingSize.LARGE]: {
		width: "var(--spinner-size-large, 3rem)",
		height: "var(--spinner-size-large, 3rem)",

		borderTopWidth: "0.5rem",
		borderLeftWidth: "0.5rem",
		borderRightWidth: "0.5rem",
		borderBottomWidth: "0.5rem",
		borderWidth: "100%",
		borderStyle: "solid",
		borderColor: "var(--spinner-background-color, #99ddff)",
		borderTopColor: "var(--spinner-primary-color, #00aaff)",
	},
});

function LoadingSpinner({
	extend,
	size = LoadingSize.MEDIUM,
	...props
}: HTMLAttributes<HTMLDivElement> & ExtendProps) {
	return (
		<div
			{...stylex.props(styles.base, styles[size], SkeletonAnimations.spin, extend)}
			{...props}
		/>
	);
}

export { LoadingSpinner, LoadingSize };
