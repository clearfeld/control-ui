"use client";

import * as stylex from "@stylexjs/stylex";
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	variant?: T_ProgressTypes;
};

type T_ProgressTypes = (typeof ProgressTypes)[keyof typeof ProgressTypes];

const ProgressTypes = {
	LOADING: "loading",
	SUCCESS: "success",
	DANGER: "danger",
	// WARNING = "warning", ?
} as const;

const styles = stylex.create({
	base: {
		width: "100%",
	},

	bar: {
		flex: "1 1 0%",
		width: "100%",
		height: "100%",
		transitionProperty: "all",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "300ms",
	},

	track: {
		overflow: "hidden",
		display: "flex",
		position: "relative",
		alignItems: "center",
		borderRadius: "9999px",
		width: "100%",
		height: "0.5rem",
		backgroundColor: "var(--progress-bar-background-color, #333333)",
	},

	indicator: {
		height: "100%",
		minHeight: "0.5rem",
		transitionProperty: "all",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "300ms",
		backgroundColor: "var(--progress-bar-loading-color, #0088cc)",
	},

	label: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: "500",
	},

	value: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontVariantNumeric: "tabular-nums",
	},

	[ProgressTypes.LOADING]: {
		backgroundColor: "var(--progress-bar-loading-color, #0088cc)",
	},

	[ProgressTypes.DANGER]: {
		backgroundColor: "var(--progress-bar-danger-color, #cc2500)",
	},

	[ProgressTypes.SUCCESS]: {
		backgroundColor: "var(--progress-bar-success-color, #30ab53)",
	},
});

function Progress({
	extend,
	value,
	variant = ProgressTypes.LOADING,
	children,
	ref,
	...props
}: ProgressPrimitive.Root.Props & ExtendProps) {
	return (
		<ProgressPrimitive.Root
			ref={ref}
			value={value}
			data-slot="progress"
			{...stylex.props(styles.base, extend)}
			{...props}
		>
			{children}

			<ProgressTrack>
				<ProgressIndicator
					variant={variant}
				/>
			</ProgressTrack>

			{/* <ProgressPrimitive.Indicator
				{...stylex.props(
					styles.bar,
					styles[variant],
					// TODO(clearfeld): should allow bar color to be extendable
				)}
				style={{
					transform: `translateX(-${100 - (value || 0)}%)`,
				}}
			/> */}
		</ProgressPrimitive.Root>
	)
}

function ProgressTrack({
	className,
	...props
}: ProgressPrimitive.Track.Props) {
	return (
		<ProgressPrimitive.Track
			className={className}
			{...stylex.props(styles.track)}
			data-slot="progress-track"
			{...props}
		/>
	)
}

function ProgressIndicator({
	className,
	variant,
	...props
}: ProgressPrimitive.Indicator.Props & ExtendProps) {
	return (
		<ProgressPrimitive.Indicator
			data-slot="progress-indicator"
			className={className}
			{...stylex.props(
				styles.indicator,
				variant && styles[variant]
			)}
			{...props}
		/>
	)
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
	return (
		<ProgressPrimitive.Label
			className={className}
			{...stylex.props(styles.label)}
			data-slot="progress-label"
			{...props}
		/>
	)
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
	return (
		<ProgressPrimitive.Value
			className={className}
			{...stylex.props(styles.value)}
			data-slot="progress-value"
			{...props}
		/>
	)
}

export {
	Progress,
	ProgressTypes,
	ProgressTrack,
	ProgressIndicator,
	ProgressLabel,
	ProgressValue,
};