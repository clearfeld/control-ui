"use client";

import type {
	ComponentProps,
	HTMLAttributes,
} from "react";
import * as stylex from "@stylexjs/stylex";

import type { DialogProps } from "@radix-ui/react-dialog";
// import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "@controlkit/dialog";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	command: {
		display: "flex",
		overflow: "hidden",
		flexDirection: "column",
		borderRadius: "0.25rem",
		width: "100%",
		height: "100%",
		backgroundColor: "var(--command-menu-background, #121212)",
		border: "0.0625rem solid var(--command-menu-border, var(--border-color, #333333))",
	},

	dialog_title: {
		display: "none",
	},

	dialog_content: {
		overflow: "hidden",
		padding: 0,
	},

	input_wrap: {
		display: "flex",
		padding: "0 0.25rem",
		alignItems: "center",
		borderBottom: "0.0625rem solid var(--command-menu-border, var(--border-color, #333333))",
	},

	input: {
		display: "flex",
		paddingTop: "0.5rem",
		paddingBottom: "0.5rem",
		borderRadius: "0.25rem",
		outlineStyle: "none",
		border: "none",
		width: "100%",
		// height: "2.5rem",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		backgroundColor: "transparent",
		color: "var(--text-color, #FCFCFC)",
	},

	list: {
		overflowY: "auto",
		overflowX: "hidden",
		maxHeight: "300px",
	},

	empty: {
		paddingTop: "1.5rem",
		paddingBottom: "1.5rem",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		textAlign: "center",
	},

	group: {
		overflow: "hidden",
		// padding: "0.25rem",
		fontSize: "0.875rem",
		color: "var(--text-sub-color, #919191)",

		":not(#__unused__) > div:first-child": {
			padding: "0.5rem",
			color: "var(--command-menu-group-title, #666666)",
		},
	},

	separator: {
		marginLeft: "-0.25rem",
		marginRight: "-0.25rem",
		height: "1px",
		borderTop: "0.0625rem solid var(--command-menu-border, var(--border-color, #333333))",
	},

	item: {
		display: "flex",
		position: "relative",
		paddingTop: "0.375rem",
		paddingBottom: "0.375rem",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
		alignItems: "center",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		userSelect: "none",

		justifyContent: "space-between",
		color: "var(--text-color, #FCFCFC)",

		transition: "background-color var(--transition-speed, 0.2s) ease",
		cursor: "pointer",
		":hover": {
			backgroundColor: "var(--command-menu-item-hover, #333333)",
		},
		':is([data-selected="true"])': {
			backgroundColor: "var(--command-menu-item-hover, #333333)",
		},
	},

	shortcut: {
		fontSize: "0.75rem",
		lineHeight: "1rem",
		letterSpacing: "0.1em",
		color: "var(--command-menu-shortcut, #666666)",
	},
});

const Command = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive> & ExtendProps) => (
	<CommandPrimitive
		ref={ref}
		className={className}
		{...stylex.props(styles.command, extend)}
		{...props}
	/>
);
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, extend, ...props }: CommandDialogProps & ExtendProps) => {
	return (
		<Dialog {...props}>
			<DialogTitle extend={styles.dialog_title}>Command Menu Palette</DialogTitle>

			<DialogContent {...stylex.props(styles.dialog_content)}>
				<Command {...stylex.props(extend)}>{children}</Command>
			</DialogContent>
		</Dialog>
	);
};

const CommandInput = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.Input> & ExtendProps) => (
	<div
		{...stylex.props(styles.input_wrap)}
		cmdk-input-wrapper=""
	>
		{/* <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" /> */}
		{/* <span>Glass</span> */}
		<CommandPrimitive.Input
			ref={ref}
			className={className}
			{...stylex.props(styles.input, extend)}
			{...props}
		/>
	</div>
);
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.List> & ExtendProps) => (
	<CommandPrimitive.List
		ref={ref}
		className={className}
		{...stylex.props(styles.list, extend)}
		{...props}
	/>
);
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = ({
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.Empty> & ExtendProps) => (
	<CommandPrimitive.Empty
		ref={ref}
		{...stylex.props(styles.empty, props.extend)}
		{...props}
	/>
);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.Group> & ExtendProps) => (
	<CommandPrimitive.Group
		ref={ref}
		className={className}
		{...stylex.props(styles.group, extend)}
		{...props}
	/>
);
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.Separator> & ExtendProps) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={className}
		{...stylex.props(styles.separator, extend)}
		{...props}
	/>
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof CommandPrimitive.Item> & ExtendProps) => (
	<CommandPrimitive.Item
		ref={ref}
		className={className}
		{...stylex.props(styles.item, extend)}
		{...props}
	/>
);
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
	className,
	extend,
	...props
}: HTMLAttributes<HTMLSpanElement> & ExtendProps) => {
	return (
		<span
			className={className}
			{...stylex.props(styles.shortcut, extend)}
			{...props}
		/>
	);
};
CommandShortcut.displayName = "CommandShortcut";

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
};
