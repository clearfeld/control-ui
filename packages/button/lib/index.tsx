"use client";

import React, { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Slot } from "@radix-ui/react-slot";

type ExtendProps = { extend?: stylex.StyleXStyles };

enum ButtonVariants {
	CREATE = "create",
	ACTION = "action",
	DANGER = "danger",
	GHOST = "ghost",
	// OUTLINE = "outline",
	// TODO: design outline
	// LINK = "LINK",
	// TODO: design link
}

// TODO: design loading state
// const loadingFlash = stylex.keyframes({
//     '0%': { backgroundColor: "var(--cds-white, #FCFCFC)" },
//     '50%': {},
//     '100%': { backgroundColor: "#cdcdcd" },
// });

const styles = stylex.create({
	base: {
		border: "none",
		outline: "none",
		borderRadius: "var(--border-radius, 0.25rem)",

		padding: "0.625rem 1rem 0.5rem 1rem",

		color: "var(--btn-text, #FCFCFC)",

		cursor: "pointer",

		height: "2rem",
		minWidth: "4rem",

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
	},

	[ButtonVariants.CREATE]: {
		backgroundColor: {
			default: "var(--btn-primary-background, #006699)",
			":hover": "var(--btn-primary-hover-background, #00AAFF)",
		},
	},

	[ButtonVariants.ACTION]: {
		backgroundColor: {
			default: "var(--btn-secondary-background, #666666)",
			":hover": "var(--btn-secondary-hover-background, #B3B3B3)",
		},
	},

	[ButtonVariants.DANGER]: {
		backgroundColor: {
			default: "var(--btn-dangerous-background, #CC2500)",
			":hover": "var(--btn-dangerous-hover-background, #FF2E00)",
		},
	},

	[ButtonVariants.GHOST]: {
		backgroundColor: {
			default: "unset",
			":hover": "var(--btn-primary-hover-background, #666666)",
		},
	},

	// TODO: design loading state
	// loading: {
	//     position: "relative",
	//     width: "0.5rem",
	//     height: "0.5rem",
	//     borderRadius: "var(--border-radius)",
	//     backgroundColor: "var(--cds-white)",
	//     color: "var(--cds-white)",

	//     loadingFlash: {
	//         animationName: loadingFlash,
	//         animationDuration: '1s',
	//         animationIterationCount: 'infinite',
	//         animationDelay: "0.5s",
	//         // alternate",
	//         // linear
	//     },

	//     "::before": {
	//         content: "",
	//         display: "inline-block",
	//         position: "absolute",
	//         top: "0",

	//         left: "-1rem",
	//         width: "0.5rem",
	//         height: "0.5rem",
	//         borderRadius: "var(--border-radius)",
	//         backgroundColor: "var(--cds-white)",
	//         color: "var(--cds-white)",

	//         loadingFlash: {
	//             animationName: loadingFlash,
	//             animationDuration: '1s',
	//             animationIterationCount: 'infinite',
	//             animationDelay: "0s",
	//             // alternate",
	//         },
	//     },

	//     "::after": {
	//         content: "",
	//         display: "inline-block",
	//         position: "absolute",
	//         top: "0",

	//         left: "1rem",
	//         width: "0.5rem",
	//         height: "0.5rem",
	//         borderRadius: "var(--border-radius)",
	//         backgroundColor: "var(--cds-white)",
	//         color: "var(--cds-white)",

	//         loadingFlash: {
	//             animationName: loadingFlash,
	//             animationDuration: '1s',
	//             animationIterationCount: 'infinite',
	//             animationDelay: "1s",
	//             // alternate",
	//         },
	//     }
	// }

	// [ButtonVariants.OUTLINE]: {
	//     outline: "0.0625rem solid var(--btn-primary-background, #006699)",
	//     backgroundColor: {
	//         default: "unset",
	//         ":hover": "var(--btn-primary-hover-background, #00AAFF)",
	//     }
	// },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	// size?: any;
	variant?: ButtonVariants;
	fullWidth?: boolean;
	// loading?: boolean;
	disabled?: boolean;
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & ExtendProps>(
	(
		{
			extend,
			variant = ButtonVariants.CREATE,
			// TODO: add size variants,
			fullWidth,
			// loading,
			disabled,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				ref={ref}
				{...stylex.props(
					styles.base,
					// ({ size})
					styles[variant],
					fullWidth && styles.fullWidth,
					disabled && styles.disabled,
					extend,
				)}
				disabled={disabled}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, ButtonVariants };
