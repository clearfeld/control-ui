"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";
import * as SheetPrimitive from "@radix-ui/react-dialog";

type ExtendProps = { extend?: stylex.StyleXStyles };
type SheetVariantsProps = { side?: SheetVariants };

enum SheetVariants {
	RIGHT = "right",
	LEFT = "left",
	BOTTOM = "bottom",
	TOP = "top",
}

const styles = stylex.create({
	overlay: {
		position: "fixed",
		top: "0",
		right: "0",
		bottom: "0",
		left: "0",
		zIndex: 100,
		backgroundColor: "var(--sheet-overlay, #00000088)",
	},

	content: {
		position: "fixed",
		zIndex: 100,
		padding: "1.5rem",
		gap: "1rem",
		transitionProperty:
			"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
		transitionTimingFunction: ["cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.4, 0, 0.2, 1)"],
		transitionDuration: "var(--transition-speed, 0.2s)",
		backgroundColor: "var(--sheet-background, #121212)",
	},

	[SheetVariants.RIGHT]: {
		top: "0",
		bottom: "0",
		right: "0",
		borderLeftWidth: "1px",
		width: "75%",
		height: "100%",
		"@media (min-width: 640px)": {
			maxWidth: "24rem",
		},
	},

	[SheetVariants.LEFT]: {
		top: "0",
		bottom: "0",
		left: "0",
		borderRightWidth: "1px",
		width: "75%",
		height: "100%",
		"@media (min-width: 640px)": {
			maxWidth: "24rem",
		},
	},

	[SheetVariants.BOTTOM]: {
		right: "0",
		left: "0",
		bottom: "0",
		borderTopWidth: "1px",
	},

	[SheetVariants.TOP]: {
		right: "0",
		left: "0",
		top: "0",
		borderBottomWidth: "1px",
	},

	header: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		"@media (min-width: 640px)": {
			textAlign: "left",
		},
	},

	footer: {
		display: "flex",
		flexDirection: "column-reverse",
		"@media (min-width: 640px)": {
			marginLeft: "0.5rem",
			flexDirection: "row",
			justifyContent: "flex-end",
		},
	},

	title: {
		fontSize: "1.125rem",
		lineHeight: "1.75rem",
		fontWeight: 600,
		margin: 0,
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
	},

	close: {
		backgroundColor: "transparent",
		color: "var(--text-color, #FCFCFC)",
		border: "none",
		outline: "none",
		cursor: "pointer",
		position: "absolute",
		top: "1.5rem",
		right: "1.5rem",
		borderRadius: "0.25rem",
		transitionProperty: "opacity background-color",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		opacity: 0.7,
		padding: "0.25rem 0.25rem",
		display: "flex",

		":hover": {
			opacity: 1,
			backgroundColor: "var(--sheet-close-hover, #333333)",
		},
	},
});

// const Sheet = SheetPrimitive.Root;
const Sheet = ({ ...props }: ComponentProps<typeof SheetPrimitive.Root>) => (
	<SheetPrimitive.Root {...props} />
);
Sheet.displayName = SheetPrimitive.Root.displayName;

// const SheetTrigger = SheetPrimitive.Trigger;
const SheetTrigger = ({ ...props }: ComponentProps<typeof SheetPrimitive.Trigger>) => (
	<SheetPrimitive.Trigger {...props} />
);
SheetTrigger.displayName = SheetPrimitive.Trigger.displayName;

// const SheetClose = SheetPrimitive.Close;
const SheetClose = ({ ...props }: ComponentProps<typeof SheetPrimitive.Close>) => (
	<SheetPrimitive.Close {...props} />
);
SheetClose.displayName = SheetPrimitive.Close.displayName;

// const SheetPortal = SheetPrimitive.Portal;
const SheetPortal = ({ ...props }: ComponentProps<typeof SheetPrimitive.Portal>) => (
	<SheetPrimitive.Portal {...props} />
);
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

const SheetOverlay = ({
	className,
	style,
	extend,
	ref,
	...props
}: ComponentProps<typeof SheetPrimitive.Overlay> & ExtendProps) => (
	<SheetPrimitive.Overlay
		className={className}
		{...stylex.props(styles.overlay, extend)}
		{...props}
		style={style}
		ref={ref}
	/>
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = ({
	side = SheetVariants.RIGHT,
	className,
	extend,
	children,
	ref,
	...props
}: ComponentProps<typeof SheetPrimitive.Content> & ExtendProps & SheetVariantsProps) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={className}
			{...stylex.props(styles.content, styles[side], extend)}
			{...props}
		>
			<SheetPrimitive.Close {...stylex.props(styles.close)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="var(--text-color)"
					width={"1.25rem"}
					height={"1.25rem"}
				>
					<title>Close</title>
					<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
				</svg>
			</SheetPrimitive.Close>
			{children}
		</SheetPrimitive.Content>
	</SheetPortal>
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
	className,
	extend,
	...props
}: HTMLAttributes<HTMLDivElement> & ExtendProps) => (
	<div
		className={className}
		{...stylex.props(styles.header, extend)}
		{...props}
	/>
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
	className,
	extend,
	...props
}: HTMLAttributes<HTMLDivElement> & ExtendProps) => (
	<div
		className={className}
		{...stylex.props(styles.footer, extend)}
		{...props}
	/>
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = ({
	className,
	style,
	extend,
	ref,
	...props
}: ComponentProps<typeof SheetPrimitive.Title> & ExtendProps) => (
	<SheetPrimitive.Title
		ref={ref}
		className={className}
		{...stylex.props(styles.title, extend)}
		style={style}
		{...props}
	/>
);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = ({
	className,
	style,
	extend,
	ref,
	...props
}: ComponentProps<typeof SheetPrimitive.Description> & ExtendProps) => (
	<SheetPrimitive.Description
		ref={ref}
		className={className}
		{...stylex.props(styles.description, extend)}
		style={style}
		{...props}
	/>
);
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	SheetVariants,
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
};
