"use client";

import { type HTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";

type ExtendProps = { extend?: stylex.StyleXStyles };
type LozengeProps = {
	variant?: LozengeVariants,
	isBold?: boolean,
	maxWidth?: number,
};

enum LozengeVariants {
	DEFAULT = "default",
	SUCCESS = "success",
	REMOVED = "removed",
	IN_PROGRESS = "in_progress",
	NEW = "new",
	MOVED = "moved",
}

const styles = stylex.create({
	base: {
		borderRadius: "0.25rem",
		padding: "0.125rem 0.5rem",
		fontSize: "0.75rem",
		width: "fit-content",

		lineHeight: "1rem",
		overflow: "hidden",
		textOverflow: "ellipsis",
		textTransform: "uppercase",
		whiteSpace: "nowrap",
	},

	isBold: {
		fontWeight: 700,
	},

	maxWidth: (width: number) => ({
		maxWidth: `${width}px`,
	}),

	[LozengeVariants.DEFAULT]: {
		color: "var(--lozenge-default-text, #90adbb)",
		backgroundColor: "var(--lozenge-default-background, #292d33)",
	},

	[`${LozengeVariants.DEFAULT}_bold`]: {
		color: "var(--lozenge-default-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-default-bold-background, #a1adbb)",
	},

	[LozengeVariants.SUCCESS]: {
		color: "var(--lozenge-success-text, #58d4bb)",
		backgroundColor: "var(--lozenge-success-background, #20322a)",
	},

	[`${LozengeVariants.SUCCESS}_bold`]: {
		color: "var(--lozenge-success-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-success-bold-background, #6dcb9b)",
	},

	[LozengeVariants.REMOVED]: {
		color: "var(--lozenge-removed-text, #f29d92)",
		backgroundColor: "var(--lozenge-removed-background, #3e241f)",
	},

	[`${LozengeVariants.REMOVED}_bold`]: {
		color: "var(--lozenge-removed-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-removed-bold-background, #ea796a)",
	},

	[LozengeVariants.IN_PROGRESS]: {
		color: "var(--lozenge-in-progress-text, #8db8fb)",
		backgroundColor: "var(--lozenge-in-progress-background, #1e2b40)",
	},

	[`${LozengeVariants.IN_PROGRESS}_bold`]: {
		color: "var(--lozenge-in-progress-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-in-progress-bold-background, #639dfa)",
	},

	[LozengeVariants.NEW]: {
		color: "var(--lozenge-new-text, #b6aef2)",
		backgroundColor: "var(--lozenge-new-background, #2a283e)",
	},

	[`${LozengeVariants.NEW}_bold`]: {
		color: "var(--lozenge-new-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-new-bold-background, #9c91ea)",
	},

	[LozengeVariants.MOVED]: {
		color: "var(--lozenge-moved-text, #e4ce59)",
		backgroundColor: "var(--lozenge-moved-background, #322e1d)",
	},

	[`${LozengeVariants.MOVED}_bold`]: {
		color: "var(--lozenge-moved-bold-text, #1e2125)",
		backgroundColor: "var(--lozenge-moved-bold-background, #f0ce59)",
	},
});

const Lozenge = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps & LozengeProps>(
	({ className, extend, style, isBold = false, variant = LozengeVariants.DEFAULT, maxWidth = 200, ...props }, ref) => (
		<div
			ref={ref}
			className={className}
			{...stylex.props(
				styles.base,
				isBold ? styles[`${variant}_bold`] : styles[variant],
				isBold && styles.isBold,
				styles.maxWidth(maxWidth),
				extend
			)}
			style={style}
			{...props}
		/>
	),
);
Lozenge.displayName = "Lozenge";

export {
	LozengeVariants,
	Lozenge,
};
