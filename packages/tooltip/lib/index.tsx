"use client";

import * as stylex from "@stylexjs/stylex";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	positioner: {
		isolation: "isolate",
		zIndex: 50,
	},

	popup: {
		gap: "0.375rem",
		paddingBlock: '0.5rem',
		paddingInline: '1rem',
		alignItems: "center",
		backgroundColor: "black",
		display: "inline-flex",
		fontSize: "0.75rem",
		lineHeight: "1rem",
		zIndex: 50,
		maxWidth: "20rem",
		paddingBottom: "0.375rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",
		paddingTop: "0.375rem",
		width: "fit-content",
	},

	// TODO: maybe add arrow to popup
	// arrow: {
	// 	':is([data-side="bottom"])': {
	// 		top: "0.25rem",
	// 	},

	// 	':is([data-side="inline-end"])': {
	// 		transform: "translateY(-50%) rotate(45deg)",
	// 		left: "-0.25rem",
	// 		top: "50% !important",
	// 	},

	// 	':is([data-side="inline-start"])': {
	// 		transform: "translateY(-50%) rotate(45deg)",
	// 		right: "-0.25rem",
	// 		top: "50% !important",
	// 	},

	// 	':is([data-side="left"])': {
	// 		transform: "translateY(-50%) rotate(45deg)",
	// 		right: "-0.25rem",
	// 		top: "50% !important",
	// 	},

	// 	':is([data-side="right"])': {
	// 		transform: "translateY(-50%) rotate(45deg)",
	// 		left: "-0.25rem",
	// 		top: "50% !important",
	// 	},

	// 	':is([data-side="top"])': {
	// 		bottom: "-0.625rem",
	// 	},

	// 	fill: "var(--foreground)",
	// 	borderRadius: "2px",
	// 	backgroundColor: "var(--foreground)",
	// 	transform: "translateY(calc(-50% - 2px)) rotate(45deg)",
	// 	zIndex: 50,
	// 	height: "0.625rem",
	// 	width: "0.625rem",
	// },
});

function TooltipProvider({
	extend,
	delay = 0,
	...props
}: TooltipPrimitive.Provider.Props & ExtendProps) {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delay={delay}
			{...stylex.props(extend)}
			{...props}
		/>
	);
}

function Tooltip({
	extend,
	...props
}: TooltipPrimitive.Root.Props & ExtendProps) {
	return (
		<TooltipPrimitive.Root
			data-slot="tooltip"
			{...stylex.props(extend)}
			{...props}
		/>
	);
};

function TooltipTrigger({
	extend,
	...props
}: TooltipPrimitive.Trigger.Props & ExtendProps) {
	return (
		<TooltipPrimitive.Trigger
			data-slot="tooltip-trigger"
			{...stylex.props(extend)}
			{...props}
		/>
	);
}

function TooltipContent({
	extend,
	sideOffset = 4,
	side = "top",
	align = "center",
	alignOffset = 0,
	children,
	...props
}:
	TooltipPrimitive.Popup.Props &
	Pick<TooltipPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset"> &
	ExtendProps
) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Positioner
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				{...stylex.props(styles.positioner)}
			>
				<TooltipPrimitive.Popup
					data-slot="tooltip-content"
					{...stylex.props(styles.popup, extend)}
					{...props}
				>
					{children}

					{/* <TooltipPrimitive.Arrow
						{...stylex.props(styles.arrow)}
					/> */}
				</TooltipPrimitive.Popup>
			</TooltipPrimitive.Positioner>
		</TooltipPrimitive.Portal>

	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
