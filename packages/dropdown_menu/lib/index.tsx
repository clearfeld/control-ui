"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// import {
//     CheckIcon,
//     ChevronRightIcon,
//     DotFilledIcon,
// } from "@radix-ui/react-icons"

type ExtendProps = { extend?: stylex.StyleXStyles };
// export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const styles = stylex.create({
	flex: {
		display: "flex",
	},

	subTrigger: {
		display: "flex",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",

		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		cursor: "pointer",
		userSelect: "none",
		":hover": {
			backgroundColor: "var(--dropdown-item-hover, #333333)",
		},
	},

	menuSubContent: {
		overflow: "hidden",
		zIndex: 100,
		borderRadius: "0.125rem",
		borderWidth: "0.0625rem",
		backgroundColor: "var(--dropdown-sub-content-background, #191919)",
		boxShadow: "0px 4px 12px -4px var(--border-color)",
	},

	menuContent: {
		overflow: "hidden",
		zIndex: 100,
		borderRadius: "0.125rem",
		borderWidth: "0.0625rem",
		backgroundColor: "var(--dropdown-content-background, #121212)",
		color: "var(--text-color, #FCFCFC)",
		boxShadow: "0px 4px 12px -4px var(--border-color)",
	},

	menuItem: {
		color: "var(--text-color, #FCFCFC)",
		display: "flex",
		position: "relative",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		cursor: "pointer",
		userSelect: "none",
		":hover": {
			backgroundColor: "var(--dropdown-item-hover, #333333)",
		},
	},

	menuCheckboxItem: {
		display: "flex",
		position: "relative",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingRight: "0.5rem",
		paddingLeft: "2rem",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		cursor: "pointer",
		userSelect: "none",
		":hover": {
			backgroundColor: "var(--dropdown-item-hover, #333333)",
		},
	},

	menuCheckboxItemSpan: {
		display: "flex",
		position: "absolute",
		left: "0.5rem",
		justifyContent: "center",
		alignItems: "center",
		width: "0.875rem",
		height: "0.875rem",
	},

	menuRadioItem: {
		display: "flex",
		position: "relative",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingRight: "0.5rem",
		paddingLeft: "2rem",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		cursor: "pointer",
		userSelect: "none",
		":hover": {
			backgroundColor: "var(--dropdown-item-hover, #333333)",
		},
	},

	menuRadioItemSpan: {
		display: "flex",
		position: "absolute",
		left: "0.5rem",
		justifyContent: "center",
		alignItems: "center",
		width: "0.875rem",
		height: "0.875rem",
	},

	menuLabel: {
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: 600,
	},

	menuSeparator: {
		margin: 0,
		height: "0.0625rem",
		backgroundColor: "var(--dropdown-separator-color, #333333)",
	},

	menuShortcut: {
		fontSize: "0.75rem",
		lineHeight: "1rem",
		letterSpacing: "0.1rem",
		opacity: 0.6,
	},
});

// const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenu = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Root>) => (
	<DropdownMenuPrimitive.Root {...props} />
);
DropdownMenu.displayName = DropdownMenuPrimitive.Root.displayName;

// const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuTrigger = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => (
	<DropdownMenuPrimitive.Trigger {...props} />
);
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

// const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuGroup = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Group>) => (
	<DropdownMenuPrimitive.Group {...props} />
);
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

// const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuPortal = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Portal>) => (
	<DropdownMenuPrimitive.Portal {...props} />
);
DropdownMenuPortal.displayName = DropdownMenuPrimitive.Portal.displayName;

// const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuSub = ({ ...props }: ComponentProps<typeof DropdownMenuPrimitive.Sub>) => (
	<DropdownMenuPrimitive.Sub {...props} />
);
DropdownMenuSub.displayName = DropdownMenuPrimitive.Sub.displayName;

// const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuRadioGroup = ({
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => (
	<DropdownMenuPrimitive.RadioGroup {...props} />
);
DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

const DropdownMenuSubTrigger = ({
	extend,
	children,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
	inset?: boolean;
} & ExtendProps) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		{...stylex.props(
			styles.subTrigger,
			// props.inset && "pl-8",
			extend,
		)}
		{...props}
	>
		{children}
		{/* <ChevronRightIcon className="ml-auto h-4 w-4" /> */}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width={"1rem"}
			height={"1rem"}
			{...stylex.props(styles.flex)}
		>
			<title>Chevron Right</title>
			<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
		</svg>
	</DropdownMenuPrimitive.SubTrigger>
);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubContent> & ExtendProps) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		{...stylex.props(styles.menuSubContent, extend)}
		{...props}
	/>
);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = ({
	extend,
	sideOffset = 4,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content> & ExtendProps) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			{...stylex.props(styles.menuContent, extend)}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & {
	inset?: boolean;
} & ExtendProps) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		{...stylex.props(
			styles.menuItem,
			// props.inset && "pl-8",
			extend,
		)}
		{...props}
	/>
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = ({
	extend,
	children,
	checked,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & ExtendProps) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		{...stylex.props(styles.menuCheckboxItem, extend)}
		checked={checked}
		{...props}
	>
		<span {...stylex.props(styles.menuCheckboxItemSpan)}>
			<DropdownMenuPrimitive.ItemIndicator>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"1rem"}
					height={"1rem"}
					{...stylex.props(styles.flex)}
				>
					<title>Checkmark</title>
					<path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
				</svg>
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = ({
	extend,
	children,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & ExtendProps) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		{...stylex.props(styles.menuRadioItem, extend)}
		{...props}
	>
		<span {...stylex.props(styles.menuRadioItemSpan)}>
			<DropdownMenuPrimitive.ItemIndicator>
				{/* <DotFilledIcon className="h-4 w-4 fill-current" /> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"1rem"}
					height={"1rem"}
					{...stylex.props(styles.flex)}
				>
					<title>Radio button filled</title>
					<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" />
				</svg>
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & {
	inset?: boolean;
} & ExtendProps) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		{...stylex.props(
			styles.menuLabel,
			// props.inset && "pl-8",
			extend,
		)}
		{...props}
	/>
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator> & ExtendProps) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		{...stylex.props(styles.menuSeparator, extend)}
		{...props}
	/>
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
	extend,
	...props
}: HTMLAttributes<HTMLSpanElement> & ExtendProps) => {
	return (
		<span
			{...stylex.props(styles.menuShortcut, extend)}
			{...props}
		/>
	);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
};
