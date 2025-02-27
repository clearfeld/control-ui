"use client";

import type { ComponentProps, HTMLAttributes } from "react";
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

// const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialog = ({ ...props }: ComponentProps<typeof AlertDialogPrimitive.Root>) => (
	<AlertDialogPrimitive.Root {...props} />
);
AlertDialog.displayName = AlertDialogPrimitive.Root.displayName;

// const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogTrigger = ({ ...props }: ComponentProps<typeof AlertDialogPrimitive.Trigger>) => (
	<AlertDialogPrimitive.Trigger {...props} />
);
AlertDialogTrigger.displayName = AlertDialogPrimitive.Trigger.displayName;

// const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogPortal = ({ ...props }: ComponentProps<typeof AlertDialogPrimitive.Portal>) => (
	<AlertDialogPrimitive.Portal {...props} />
);
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

const AlertDialogOverlay = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Overlay> & ExtendProps) => (
	<AlertDialogPrimitive.Overlay
		className={className}
		{...stylex.props(styles.overlay, extend)}
		{...props}
		ref={ref}
	/>
);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Content> & ExtendProps) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={className}
			{...stylex.props(styles.content, extend)}
			{...props}
		/>
	</AlertDialogPortal>
);
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

const AlertDialogTitle = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Title> & ExtendProps) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={className}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
);
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Description> & ExtendProps) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={className}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
);
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Action> & ExtendProps) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={className}
		{...stylex.props(styles.action_btn, extend)}
		{...props}
	/>
);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Cancel> & ExtendProps) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={className}
		{...stylex.props(styles.cancel_btn, extend)}
		{...props}
	/>
);
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
