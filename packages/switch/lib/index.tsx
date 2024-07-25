"use client";

import type React from "react";
import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as SwitchPrimitives from "@radix-ui/react-switch";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	size?: SwitchSizes; // TODO: clean
};

enum SwitchSizes {
	SMALL = "small",
	MEDIUM = "medium",
	LARGE = "large",
}

const styles = stylex.create({
	disabled: {
		cursor: "not-allowed",
		opacity: "50%",
	},

	base: {
		border: "none",
		backgroundColor: "var(--toggle-primary-background, #B3B3B3)",
		borderRadius: "9999px",
		position: "relative",
		cursor: "pointer",

		":hover": {
			backgroundColor: "var(--toggle-primary-hover-background, #808080)",
		},

		// ":focus": {
		//     backgroundColor: "var(--toggle-primary-hover-background, #808080)",
		// },
	},

	[SwitchSizes.SMALL]: {
		height: "1.5rem",
		width: "3rem",
	},

	[SwitchSizes.MEDIUM]: {
		height: "2rem",
		width: "4rem",
	},

	[SwitchSizes.LARGE]: {
		height: "3rem",
		width: "6rem",
	},

	baseChecked: {
		backgroundColor: "var(--toggle-selected-background, #0088CC)",

		":hover": {
			backgroundColor: "var(--toggle-selected-hover-background, #006699)",
		},
	},

	thumb: {
		display: "block",
		backgroundColor: "var(--toggle-circle-background, #FCFCFC)",
		borderRadius: "9999px",
		transition: "transform var(--transition-speed, 0.2s)",
		// transform: "translateX(0px)",
		willChange: "transform",
	},

	[`thumb-${SwitchSizes.SMALL}`]: {
		height: "1rem",
		width: "1rem",
	},

	[`thumb-${SwitchSizes.MEDIUM}`]: {
		width: "1.5rem",
		height: "1.5rem",
	},

	[`thumb-${SwitchSizes.LARGE}`]: {
		height: "2.5rem",
		width: "2.5rem",
	},

	[`thumbChecked-${SwitchSizes.SMALL}`]: {
		transform: "translateX(1.25rem)",
	},

	[`thumbChecked-${SwitchSizes.MEDIUM}`]: {
		transform: "translateX(1.75rem)",
	},

	[`thumbChecked-${SwitchSizes.LARGE}`]: {
		transform: "translateX(2.75rem)",
	},
});

const Switch = forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & ExtendProps
>(({ extend, size = SwitchSizes.SMALL, ...props }, ref) => (
	<SwitchPrimitives.Root
		ref={ref}
		{...stylex.props(
			styles.base,
			styles[size],
			props.checked && styles.baseChecked,
			props.disabled && styles.disabled,
			extend,
		)}
		{...props}
	>
		<SwitchPrimitives.Thumb
			{...stylex.props(
				styles.thumb,
				styles[`thumb-${size}`],
				props.checked && styles[`thumbChecked-${size}`],
				props.disabled && styles.disabled,
				// extend thumb TODO(clearfeld): probably should allow overwriting the thumb color
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, SwitchSizes };
