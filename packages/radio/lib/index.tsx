"use client";

import * as stylex from "@stylexjs/stylex";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	base: {
		gap: "0.5rem",
		display: "grid",
	},

	root: {
		margin: 0,
		padding: 0,

		borderColor: {
			":is([data-unchecked])": "var(--cds-gray-400, #343434)",
		},
		borderRadius: "100%",
		borderStyle: {
			default: 'none',
			":is([data-unchecked])": "solid",
		},
		borderWidth: {
			":is([data-unchecked])": "0.125rem",
		},

		outline: {
			default: "0",
			":focus-visible": "0.125rem solid var(--cds-blue-900)",
		},

		alignItems: "center",

		backgroundColor: {
			":is([data-checked])": "var(--cds-blue-400)",
			":is([data-unchecked])": "transparent",
		},

		boxSizing: "border-box",
		display: "flex",
		justifyContent: "center",

		outlineOffset: {
			":focus-visible": "0.125rem",
		},

		height: "1.25rem",
		minHeight: "1.25rem",
		minWidth: "1.25rem",
		width: "1.25rem",
	},

	indicator: {
		alignItems: "center",

		display: {
			default: "flex",
			":is([data-unchecked])": "none",
		},

		justifyContent: "center",

		"::before": {
			borderRadius: "100%",
			backgroundColor: "var(--cds-gray-900, #575757)",
			content: '',
			position: 'absolute',
			height: "0.5rem",
			width: "0.5rem",
		},
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