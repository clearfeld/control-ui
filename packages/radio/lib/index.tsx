"use client";

// import type { DetailedHTMLProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		display: "grid",
		gap: "0.5rem",
	},

	root: {
		boxSizing: "border-box",
		display: "flex",
		width: "1.25rem",
		height: "1.25rem",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "100%",
		outline: 0,
		padding: 0,
		margin: 0,
		border: "none",

		":is([data-unchecked])": {
			border: "0.125rem solid var(--cds-gray-400)",
			backgroundColor: "transparent",
		},

		":is([data-checked])": {
			backgroundColor: "var(--cds-blue-400)",
		},

		":focus-visible": {
			outline: "0.125rem solid var(--cds-blue-900)",
			outlineOffset: "0.125rem",
		}
	},

	indicator: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		":is([data-unchecked])": {
			display: "none",
		},

		"::before": {
			content: '',
			position: 'absolute',
			borderRadius: "100%",
			width: "0.5rem",
			height: "0.5rem",
			backgroundColor: "var(--cds-gray-900)",
		}
	},
});

function RadioGroup({
	className,
	extend,
	style,
	ref,
	...props
}: RadioGroupPrimitive.Props & ExtendProps) {
	return (
		<RadioGroupPrimitive
			ref={ref}
			data-slot="radio-group"
			className={className}
			{...stylex.props(
				styles.base,
				extend,
			)}
			style={style}
			{...props}
		/>
	)
}

function RadioGroupItem({
	className,
	extend,
	style,
	ref,
	...props
}: RadioPrimitive.Root.Props & ExtendProps) {
	return (
		<RadioPrimitive.Root
			ref={ref}
			data-slot="radio-group-item"
			className={className}
			{...stylex.props(
				styles.root,
				extend,
			)}
			style={style}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				{...stylex.props(
					styles.indicator,
				)}
			/>
		</RadioPrimitive.Root>
	)
}

export { RadioGroup, RadioGroupItem }