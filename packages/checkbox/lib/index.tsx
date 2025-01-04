"use client";

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import { CheckIcon } from "@radix-ui/react-icons";

type ExtendProps = { 
	extend?: stylex.StyleXStyles;
	size?: CheckBoxSizes;
};

enum CheckBoxSizes {
	XSMALL = "xsmall",
	SMALL = "small",
	MEDIUM = "medium",
	LARGE = "large",
}

const styles = stylex.create({
	root: {
		shrink: "0",
		borderRadius: "0.25rem",
		border: "0.0625rem solid var(--checkbox-border-color, #006699)",
		width: "1.25rem",
		height: "1.25rem",
		cursor: "pointer",
		transition: "background-color 0.1s ease-in",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "var(--checkbox-inactive-background, #FCFCFC)",

		":hover": {
			backgroundColor: "var(--checkbox-hover-background, #90bed5)",
		},

		':is([data-state="checked"])': {
			backgroundColor: "var(--checkbox-background, #006699)",

			":hover": {
				backgroundColor: "var(--checkbox-hover-background, #0088cc) !important",
			},
		},
	},

	disabled: {
		// pointerEvents: "",
		cursor: "not-allowed",
		opacity: "0.75",

		":hover": {
			backgroundColor: "var(--checkbox-inactive-background, #FCFCFC)",
		},

		':is([data-state="checked"])': {
			":hover": {
				backgroundColor: "var(--checkbox-background, #006699)",
			},
		},
	},

	indicator: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "currentColor",
	},

	[CheckBoxSizes.XSMALL]: {
		height: "0.75rem",
		width: "0.75rem",
	},

	[CheckBoxSizes.SMALL]: {
		height: "1rem",
		width: "1rem",
	},

	[CheckBoxSizes.MEDIUM]: {
		height: "1.25rem",
		width: "1.25rem",
	},

	[CheckBoxSizes.LARGE]: {
		height: "1.5rem",
		width: "1.5rem",
	},
});

const Checkbox = forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & ExtendProps
>(({ extend, size = CheckBoxSizes.MEDIUM, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		{...stylex.props(styles.root, props.disabled && styles.disabled, styles[size], extend)}
		{...props}
	>
		<CheckboxPrimitive.Indicator {...stylex.props(styles.indicator)}>
			{/* <CheckIcon className="h-4 w-4" /> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 16 16"
				fill="none"
			>
				<title>Checkmark</title>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.29744 13.2131L0.292893 8.2546C-0.0976311 7.86082 -0.0976311 7.22236 0.292893 6.82857C0.683418 6.43478 1.31658 6.43478 1.70711 6.82857L6.00068 11.0535L14.2889 2.79534C14.6794 2.40155 15.3126 2.40155 15.7031 2.79534C16.0936 3.18913 16.0936 3.82759 15.7031 4.22138L6.69941 13.2085C6.31158 13.5954 5.68777 13.5974 5.29744 13.2131Z"
					fill="white"
				/>
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, CheckBoxSizes };
