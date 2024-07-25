"use client";

import type React from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	size?: LoadingSize; // TODO: clean
};

enum LoadingSize {
	SMALL = "small",
	MEDIUM = "medium",
	LARGE = "large",
}

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

		border: "2px solid var(--spinner-background-color, #99ddff)",
		borderTop: "2px solid var(--spinner-primary-color, #00aaff)",
	},

	[LoadingSize.MEDIUM]: {
		width: "var(--spinner-size-medium, 1.5rem)",
		height: "var(--spinner-size-medium, 1.5rem)",

		border: "4px solid var(--spinner-background-color, #99ddff)",
		borderTop: "4px solid var(--spinner-primary-color, #00aaff)",
	},

	[LoadingSize.LARGE]: {
		width: "var(--spinner-size-large, 3rem)",
		height: "var(--spinner-size-large, 3rem)",

		border: "8px solid var(--spinner-background-color, #99ddff)",
		borderTop: "8px solid var(--spinner-primary-color, #00aaff)",
	},
});

function LoadingSpinner({
	extend,
	size = LoadingSize.MEDIUM,
	...props
}: React.HTMLAttributes<HTMLDivElement> & ExtendProps) {
	return (
		<div
			{...stylex.props(styles.base, styles[size], SkeletonAnimations.spin, extend)}
			{...props}
		/>
	);
}

export { LoadingSpinner, LoadingSize };
