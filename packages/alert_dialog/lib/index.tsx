"use client";

import { type ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { Button, ButtonVariants } from "@controlkit/button";

type ExtendProps = { extend?: stylex.StyleXStyles };

const overlayShow = stylex.keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

const contentShow = stylex.keyframes({
	"0%": {
		opacity: 0,
		transform: "translate(-50%, -48%) scale(0.96)",
	},
	"100%": {
		opacity: 1,
		transform: "translate(-50%, -50%) scale(1)",
	},
});

const styles = stylex.create({
	overlay: {
		inset: 0,

		animationDuration: "150ms",
		animationName: overlayShow,
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",

		backgroundColor: "var(--sheet-overlay, #00000088)",
		position: "fixed",
		zIndex: 100,
	},

	content: {
		borderRadius: "0.25rem",
		borderWidth: "1px",
		overflow: "auto",

		animationDuration: "150ms",
		animationName: contentShow,
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",

		backgroundColor: "var(--sheet-bg, #121212)",
		boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		position: "fixed",
		transform: "translate(-50%, -50%)",
		zIndex: 100,
		left: "50%",
		top: "50%",
	},

	header: {
		textAlign: {
			default: "center",
			"@media (min-width: 640px)": "left",
		},
	},

	footer: {
		display: "flex",

		flexDirection: {
			"@media (min-width: 640px)": "row",
		},

		justifyContent: {
			default: "center",
			"@media (min-width: 640px)": "flex-end",
		},
	},

	title: {
		fontSize: "1.125rem",
		fontWeight: "bold",
		lineHeight: "1.75rem",
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
	},
});

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
	return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
	return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
};

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
	return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
};

function AlertDialogOverlay({
	className,
	extend,
	ref,
	...props
}: AlertDialogPrimitive.Backdrop.Props & ExtendProps) {
	return (
		<AlertDialogPrimitive.Backdrop
			data-slot="alert-dialog-overlay"
			className={className}
			{...stylex.props(styles.overlay, extend)}
			{...props}
			ref={ref}
		/>
	);
}

function AlertDialogContent({
	className,
	extend,
	size = 'default',
	ref,
	...props
}: AlertDialogPrimitive.Popup.Props & ExtendProps & {
	size?: "default" | "sm"
}) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Popup
				ref={ref}
				data-slot="alert-dialog-content"
				data-size={size}
				className={className}
				{...stylex.props(styles.content, extend)}
				{...props}
			/>
		</AlertDialogPortal>
	);
}

function AlertDialogHeader({
	extend,
	...props
}: ComponentProps<"div"> & ExtendProps) {
	return (
		<div
			data-slot="alert-dialog-header"
			{...stylex.props(styles.header, extend)}
			{...props}
		/>
	);
}

function AlertDialogFooter({
	extend,
	...props
}: ComponentProps<"div"> & ExtendProps) {
	return (
		<div
			data-slot="alert-dialog-footer"
			{...stylex.props(styles.footer, extend)}
			{...props}
		/>
	);
}

function AlertDialogMedia({
	extend,
	...props
}: React.ComponentProps<"div"> & ExtendProps) {
	return (
		<div
			data-slot="alert-dialog-media"
			// TODO: example on _site
			// className={"mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6"}
			{...stylex.props(extend)}
			{...props}
		/>
	)
}

function AlertDialogTitle({
	extend,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Title> & ExtendProps) {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			{...stylex.props(styles.title, extend)}
			{...props}
		/>
	);
};

function AlertDialogDescription({
	extend,
	ref,
	...props
}: ComponentProps<typeof AlertDialogPrimitive.Description> & ExtendProps) {
	return (
		<AlertDialogPrimitive.Description
			ref={ref}
			data-slot="alert-dialog-description"
			{...stylex.props(styles.description, extend)}
			{...props}
		/>
	);
};

function AlertDialogAction({
	extend,
	variant = ButtonVariants.CREATE,
	// size = "default",
	...props
}: ComponentProps<typeof Button> & ExtendProps) {
	return (
		<Button
			data-slot="alert-dialog-action"
			variant={variant}
			{...stylex.props(extend)}
			{...props}
		/>
	)
}

function AlertDialogCancel({
	extend,
	variant = ButtonVariants.ACTION,
	...props
}: AlertDialogPrimitive.Close.Props & React.ComponentProps<typeof Button> & ExtendProps) {
	return (
		<AlertDialogPrimitive.Close
			data-slot="alert-dialog-cancel"
			render={<Button variant={variant} />}
			{...stylex.props(extend)}
			{...props}
		/>
	)
}

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
