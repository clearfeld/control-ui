"use client";

import React from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };

const pulse = stylex.keyframes({
	"0%": { opacity: 1 },
	"50%": { opacity: 0.5 },
	"100%": { opacity: 1 },
});

const SkeletonAnimations = stylex.create({
	pulse: {
		animationName: pulse,
		animationDuration: "1.5s",
		animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
		animationIterationCount: "infinite",
	},
});

const styles = stylex.create({
	base: {
		backgroundColor: "var(--skeleton-color, #333333)",
		borderRadius: "0.25rem",
	},
});

function Skeleton({ extend, ...props }: React.HTMLAttributes<HTMLDivElement> & ExtendProps) {
	return (
		<div
			{...stylex.props(styles.base, SkeletonAnimations.pulse, extend)}
			{...props}
		/>
	);
}

export { Skeleton };
