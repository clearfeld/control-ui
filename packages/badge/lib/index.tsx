"use client";

import * as stylex from "@stylexjs/stylex";

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
		borderRadius: "100%",
		overflow: "hidden",
		fontWeight: "bold",

		height: "1rem",
		minWidth: "1rem",
		width: "fit-content",
		fontSize: "0.75rem",
		padding: "0.5rem",

		color: "var(--badge-text-colors, #FCFCFC)",
	},

	[BadgeVariants.DEFAULT]: {
		backgroundColor: "var(--badge-default-background, #666666)",
	},

	[BadgeVariants.PRIMARY]: {
		backgroundColor: "var(--badge-primary-background, #006699)",
	},

	[BadgeVariants.IMPORTANT]: {
		backgroundColor: "var(--badge-important-background, #FF2E00)",
	},

	[BadgeVariants.ADDED]: {
		backgroundColor: "var(--badge-added-background, #30AB53)",
	},
});

interface I_BadgeProps {
	variant?: BadgeVariants;
	number?: number;
	max?: number;
}

function Badge({ extend, variant = BadgeVariants.DEFAULT, ...props }: ExtendProps & I_BadgeProps) {
	function GetDisplayValue(number: number, max: number | undefined): string {
		if (max && number > max) {
			return `${max}+`; // TODO: replace this plus with an icon
		}

		return `${number}`;
	}

	return (
		<div {...stylex.props(styles.base, styles[variant], extend)}>
			{props.number && GetDisplayValue(props.number, props.max)}
		</div>
	);
}

export { Badge, BadgeVariants };
