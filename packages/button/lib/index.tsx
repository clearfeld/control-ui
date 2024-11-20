"use client";

import type React from "react";
import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Slot } from "@radix-ui/react-slot";

type ExtendProps = { extend?: stylex.StyleXStyles };

enum ButtonVariants {
	CREATE = "create",
	ACTION = "action",
	DANGER = "danger",
	GHOST = "ghost",
	OUTLINE = "outline",
	LINK = "link",
}

const loadingFlash = stylex.keyframes({
	"0%": { opacity: 1 },
	"50%": { opacity: 0.5 },
	"100%": { opacity: 1 },
});

const LoadingAnimations = stylex.create({
	loadingFlashDotOne: {
		animationName: loadingFlash,
		animationDuration: '1s',
		animationIterationCount: 'infinite',
		animationDelay: "0s",
	},

	loadingFlashDotTwo: {
		animationName: loadingFlash,
		animationDuration: '1s',
		animationIterationCount: 'infinite',
		animationDelay: "0.33s",
	},

	loadingFlashDotThree: {
		animationName: loadingFlash,
		animationDuration: '1s',
		animationIterationCount: 'infinite',
		animationDelay: "0.66s",
	},
});

const styles = stylex.create({
	base: {
		border: "none",
		outline: "none",
		borderRadius: "var(--border-radius, 0.25rem)",

		padding: "0.625rem 1rem 0.5rem 1rem",

		color: "var(--btn-text, #FCFCFC)",

		cursor: "pointer",

		// height: "2rem",
		// minWidth: "4rem",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		whiteSpace: "nowrap",

		transition: "background-color var(--transition-speed, 0.2s) ease",
	},

	fullWidth: {
		width: "100%",
	},

	disabled: {
		opacity: "0.75",
		cursor: "not-allowed",
		// pointerEvents: "none",
	},

	[ButtonVariants.CREATE]: {
		backgroundColor: {
			default: "var(--btn-primary-background, #006699)",
			":hover": "var(--btn-primary-hover-background, #0088CC)",
			":focus": "var(--btn-primary-hover-background, #0088CC)",
			":active": "var(--btn-primary-pressed-background, #00AAFF)",
		},
	},

	[ButtonVariants.ACTION]: {
		backgroundColor: {
			default: "var(--btn-secondary-background, #4D4D4D)",
			":hover": "var(--btn-secondary-hover-background, #666666)",
			":focus": "var(--btn-secondary-hover-background, #666666)",
			":active": "var(--btn-secondary-pressed-background, #808080)",
		},
	},

	[ButtonVariants.DANGER]: {
		backgroundColor: {
			default: "var(--btn-dangerous-background, #CC2500)",
			":hover": "var(--btn-dangerous-hover-background, #FF2E00)",
			":focus": "var(--btn-dangerous-hover-background, #FF2E00)",
			":active": "var(--btn-dangerous-pressed-background, #ff5833)",
		},
	},

	[ButtonVariants.GHOST]: {
		color: "var(--color-text)",
		backgroundColor: {
			default: "unset",
			":hover": "var(--btn-ghost-hover-background, #333333)",
			":focus": "var(--btn-ghost-hover-background, #333333)",
			":active": "var(--btn-ghost-pressed-background, #4D4D4D)",
		},
	},

	[ButtonVariants.OUTLINE]: {
		outline: "0.0625rem solid var(--btn-outline-outline-background, #006699)",
		backgroundColor: {
			default: "unset",
			":hover": "var(--btn-outline-hover-background, #0088CC)",
			// ":focus": "var(--btn-primary-hover-background, #0088CC)",
			":active": "var(--btn-outline-pressed-background, #00AAFF)",
		},
		transition: `background-color var(--transition-speed, 0.2s) ease,
		             color var(--transition-speed, 0.2s) ease`,
		color: {
			default: "var(--btn-outline-background, #006699)",
			":hover": "var(--color-text, #FCFCFC)",
		}
	},

	[ButtonVariants.LINK]: {
		transition: "color var(--transition-speed, 0.2s) ease",
		color: {
			default: "var(--btn-link-color, #00AAFF)",
			":hover": "var(--btn-link-color-hover, #0088CC)",
			":active": "var(--btn-link-color-active, #006699)",
		},
		":hover": {
			textDecoration: "underline",
		},
		backgroundColor: "unset",
	},

	loading: {
		display: "flex",
		gap: "0.5rem",
		alignItems: "center",
	},

	loadingDot: {
		minWidth: "0.5rem",
		width: "0.5rem",
		minHeight: "0.5rem",
		height: "0.5rem",
		borderRadius: "100%",
		backgroundColor: "var(--cds-white, #FCFCFC)",
		color: "var(--cds-white, #FCFCFC)",
	},
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	// size?: any;
	variant?: ButtonVariants;
	fullWidth?: boolean;
	loading?: boolean;
	disabled?: boolean;
	asChild?: boolean;
}

const LoadingDots = () => {
	return (
		<div
			{...stylex.props(styles.loading)}
		>
			&nbsp;
			<div
				{...stylex.props(styles.loadingDot, LoadingAnimations.loadingFlashDotOne)}
			/>
			<div
				{...stylex.props(styles.loadingDot, LoadingAnimations.loadingFlashDotTwo)}
			/>
			<div
				{...stylex.props(styles.loadingDot, LoadingAnimations.loadingFlashDotThree)}
			/>
			&nbsp;
		</div>
	);
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & ExtendProps>(({
	extend,
	variant = ButtonVariants.CREATE,
	// TODO: add size variants,
	fullWidth,
	loading = false,
	disabled,
	asChild = false,
	children,
	...props
}, ref,) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			ref={ref}
			{...stylex.props(
				styles.base,
				// TODO: ({ size})
				styles[variant],
				fullWidth && styles.fullWidth,
				disabled && styles.disabled,
				extend,
			)}
			disabled={disabled}
			{...props}
		// TODO: should prevent default click behavior if loading is true
		>
			{loading ? <LoadingDots /> : children}
		</Comp>
	);
},
);
Button.displayName = "Button";

export { Button, ButtonVariants };
