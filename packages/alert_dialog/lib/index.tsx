"use client";

import { type ComponentPropsWithoutRef, type ComponentRef, type HTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
// import { buttonVariants } from "@controlkit/button";

type ExtendProps = { extend?: stylex.StyleXStyles };

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
		display: "grid",
		positionArea: "center",
		position: "fixed",

		// top: "0",
		// right: "0",
		// bottom: "0",
		// left: "0",

		zIndex: 100,
		padding: "1.5rem",
		gap: "1rem",
		borderWidth: "0.0625rem",
		width: "calc(100% - 2rem)",
		maxWidth: "32rem",
		boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",

		// top: "25%",
		// left: "calc(50%)",
		insetArea: "center",
		margin: "0 auto",
		boxSizing: "border-box",

		transitionProperty:
			"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
		transitionTimingFunction: ["cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.4, 0, 0.2, 1)"],
		transitionDuration: "var(--transition-speed, 0.2s)",
		backgroundColor: "var(--sheet-bg, #121212)",

		borderRadius: "0.25rem",

		"@media (min-width: 640px)": {
			width: "100%",
		},
	},

	header: {
		// display: "flex",
		// marginTop: "0.5rem",
		// flexDirection: "column",
		textAlign: "center",
		"@media (min-width: 640px)": {
			textAlign: "left",
		},
	},

	footer: {
		display: "flex",
		justifyContent: "center",

		// justifyContent: "flex-end",
		// "@media (min-width: 640px)": {
		// 	marginLeft: "0.5rem",
		// 	flexDirection: "row",
		// 	justifyContent: "flex-end",
		// },

		"@media (min-width: 640px)": {
			flexDirection: "row",
			justifyContent: "flex-end",
		},
	},

	title: {
		fontSize: "1.125rem",
		lineHeight: "1.75rem",
		fontWeight: 600,
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
	},

	action_btn: {
		padding: 0,
		margin: 0,
		marginLeft: "1rem",
		outline: "none",
		border: "none",
		background: "none",
	},

	cancel_btn: {
		padding: 0,
		margin: 0,
		outline: "none",
		border: "none",
		background: "none",
	},
});

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		className={className}
		{...stylex.props(styles.overlay, extend)}
		{...props}
		ref={ref}
	/>
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={className}
			{...stylex.props(styles.content, extend)}
			{...props}
		/>
	</AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
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
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={className}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={className}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Action>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={className}
		{...stylex.props(styles.action_btn, extend)}
		{...props}
	/>
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Cancel>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={className}
		{...stylex.props(styles.cancel_btn, extend)}
		{...props}
	/>
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
