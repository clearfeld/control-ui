"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
		padding: 0,
		display: "grid",
		positionArea: "center",
		position: "fixed",

		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",

		zIndex: 100,
		gap: "1rem",
		borderWidth: "1px",
		width: "100%",
		maxWidth: "32rem",
		boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",

		insetArea: "center",
		margin: "0 auto",
		boxSizing: "border-box",

		transitionProperty:
			"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
		transitionTimingFunction: ["cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.4, 0, 0.2, 1)"],
		transitionDuration: "var(--transition-speed, 0.2s)",
		backgroundColor: "var(--sheet-bg, #121212)",

		"@media (min-width: 640px)": {
			borderRadius: "0.25rem",
		},
	},

	header: {
		display: "flex",
		marginTop: "0.5rem",
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
});

// const Dialog = DialogPrimitive.Root;
const Dialog = ({ ...props }: ComponentProps<typeof DialogPrimitive.Root>) => (
	<DialogPrimitive.Root {...props} />
);
Dialog.displayName = DialogPrimitive.Root.displayName;

// const DialogTrigger = DialogPrimitive.Trigger;
const DialogTrigger = ({ ...props }: ComponentProps<typeof DialogPrimitive.Trigger>) => (
	<DialogPrimitive.Trigger {...props} />
);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

// const DialogPortal = DialogPrimitive.Portal;
const DialogPortal = ({ ...props }: ComponentProps<typeof DialogPrimitive.Portal>) => (
	<DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

// const DialogClose = DialogPrimitive.Close;
const DialogClose = ({ ...props }: ComponentProps<typeof DialogPrimitive.Close>) => (
	<DialogPrimitive.Close {...props} />
);
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogOverlay = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof DialogPrimitive.Overlay> & ExtendProps) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={className}
		{...stylex.props(styles.overlay, extend)}
		{...props}
	/>
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = (
	{
		className,
		extend,
		// closeExtend,
		children,
		ref,
		...props
	}: ComponentProps<typeof DialogPrimitive.Content> & ExtendProps, // & CloseExtendProps
) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={className}
			{...stylex.props(styles.content, extend)}
			{...props}
		>
			{children}
		</DialogPrimitive.Content>
	</DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
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
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter";

const DialogTitle = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof DialogPrimitive.Title> & ExtendProps) => (
	<DialogPrimitive.Title
		ref={ref}
		className={className}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof DialogPrimitive.Description> & ExtendProps) => (
	<DialogPrimitive.Description
		ref={ref}
		className={className}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
