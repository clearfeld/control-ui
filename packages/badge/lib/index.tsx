"use client";

import * as stylex from "@stylexjs/stylex";
import { type HTMLAttributes, forwardRef } from "react";

type ExtendProps = { extend?: stylex.StyleXStyles };

enum BadgeVariants {
	DEFAULT = "default",
	PRIMARY = "primary",
	IMPORTANT = "important",
	ADDED = "added",
}

const styles = stylex.create({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "0.25rem",
		overflow: "hidden",
		fontWeight: "bold",

		height: "1rem",
		minWidth: "1rem",
		width: "fit-content",
		fontSize: "0.75rem",
		padding: "0.125rem 0.375rem",
	},

	[BadgeVariants.DEFAULT]: {
		color: "var(--badge-default-text, #90adbb)",
		backgroundColor: "var(--badge-default-background, #292d33)",
	},

	[BadgeVariants.PRIMARY]: {
		color: "var(--badge-primary-text, #8db8fb)",
		backgroundColor: "var(--badge-primary-background, #1e2b40)",
	},

	[BadgeVariants.IMPORTANT]: {
		color: "var(--badge-important-text, #f29d92)",
		backgroundColor: "var(--badge-important-background, #3e241f)",
	},

	[BadgeVariants.ADDED]: {
		color: "var(--badge-added-text, #93dfbb)",
		backgroundColor: "var(--badge-added-background, #213d31)",
	},
});

interface I_BadgeProps {
	number: number;
	variant?: BadgeVariants;
	max?: number;
}

function GetDisplayValue(number: number, max: number | undefined): string {
	if (max && number > max) {
		return `${max} +`; // TODO(clearfeld): replace this plus with an icon
	}

	return `${number}`;
}

const Badge = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps & I_BadgeProps>(
	({ className, extend, variant = BadgeVariants.DEFAULT, ...props }, ref) => (
		<div
			ref={ref}
			className={className}
			{...stylex.props(
				styles.base,
				styles[variant],
				extend
			)}
			{...props}
		>
			{props.number && GetDisplayValue(props.number, props.max)}
		</div>
	),
);
Badge.displayName = "Badge";

export {
	BadgeVariants,
	Badge,
};
