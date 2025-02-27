"use client";

import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as SelectPrimitive from "@radix-ui/react-select";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	trigger: {
		display: "flex",
		paddingTop: "0.5rem",
		paddingBottom: "0.5rem",
		paddingLeft: "0.75rem",
		paddingRight: "0.75rem",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: "0.375rem",
		borderWidth: "1px",
		width: "100%",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		whiteSpace: "nowrap",
		// backgroundColor: "transparent",

		outline: "none",
		border: "0.0625rem solid var(--select-border, #666666)",
		cursor: "pointer",

		backgroundColor: "var(--select-content-background, #121212)",
		color: "var(--select-text, #FCFCFC)",

		transition: "border var(--transition-speed, 0.2s) ease",

		":hover": {
			border: "0.0625rem solid var(--select-border-hover, #006699)",
		},
	},

	upButton: {
		display: "flex",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		justifyContent: "center",
		alignItems: "center",
		cursor: "default",
	},

	downButton: {
		display: "flex",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		justifyContent: "center",
		alignItems: "center",
		cursor: "default",
	},

	content: {
		overflow: "hidden",
		position: "relative",
		zIndex: 100,
		borderRadius: "0.375rem",
		borderWidth: "1px",
		maxHeight: "24rem",
		backgroundColor: "var(--select-content-background, #121212)",
		border: "0.0625rem solid var(--select-content-outline, #666666)",
		marginTop: "0.25rem",
	},

	contentViewport: {
		padding: "0.25rem",
	},

	contentViewportPopper: {
		width: "100%",
		height: "var(--radix-select-trigger-height)",
	},

	label: {
		paddingTop: "0.375rem",
		paddingBottom: "0.375rem",
		paddingLeft: "0.5rem",
		paddingRight: "0.5rem",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		fontWeight: 600,
	},

	item: {
		display: "flex",
		position: "relative",
		paddingTop: "0.375rem",
		paddingBottom: "0.375rem",
		paddingLeft: "0.5rem",
		paddingRight: "2rem",
		alignItems: "center",
		borderRadius: "0.125rem",
		outlineStyle: "none",
		width: "100%",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		cursor: "pointer",
		userSelect: "none",
		transition: "background-color var(--transition-speed, 0.2s) ease",
		":hover": {
			backgroundColor: "var(--item-background-hover, #333333)",
		},
	},

	itemSpan: {
		display: "flex",
		position: "absolute",
		right: "0.5rem",
		justifyContent: "center",
		alignItems: "center",
		width: "0.875rem",
		height: "0.875rem",
	},

	separator: {
		marginTop: "0.25rem",
		marginBottom: "0.25rem",
		marginLeft: "-0.25rem",
		marginRight: "-0.25rem",
		height: "1px",
	},
});

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

// const SelectValue = forwardRef<
//     ComponentRef<typeof SelectPrimitive.Value>,
//     ComponentPropsWithoutRef<typeof SelectPrimitive.Value> & ExtendProps
// >(({ extend, ...props }, ref) => (
//     <SelectPrimitive.Value
//         ref={ref}
//         {...stylex.props(
//             styles.value,
//             extend
//         )}
//         {...props}
//     />
// ));
// SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectTrigger = forwardRef<
	ComponentRef<typeof SelectPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & ExtendProps
>(({ extend, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		{...stylex.props(styles.trigger, extend)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			{/* <CaretSortIcon className="h-4 w-4 opacity-50" /> */}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width={"1rem"}
				height={"1rem"}
			>
				<title>Down Arrow Main</title>
				<path d="M12 16L6 10H18L12 16Z" />
			</svg>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
	ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & ExtendProps
>(({ extend, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		{...stylex.props(styles.upButton, extend)}
		{...props}
	>
		{/* <ChevronUpIcon /> */}

		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width={"1rem"}
			height={"1rem"}
		>
			<title>Up Arrow</title>
			<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" />
		</svg>
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
	ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & ExtendProps
>(({ extend, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		{...stylex.props(styles.downButton, extend)}
		{...props}
	>
		{/* <ChevronDownIcon /> */}

		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width={"1rem"}
			height={"1rem"}
		>
			<title>Down Arrow</title>
			<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
		</svg>
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
	ComponentRef<typeof SelectPrimitive.Content>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & ExtendProps
>(({ extend, children, position = "popper", ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			{...stylex.props(
				styles.content,
				// position === "popper" && styles[position]
				extend,
			)}
			position={position}
			{...props}
		>
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport
				{...stylex.props(
					styles.contentViewport,
					position === "popper" && styles.contentViewportPopper,
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
	ComponentRef<typeof SelectPrimitive.Label>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & ExtendProps
>(({ extend, style, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		{...stylex.props(styles.label, extend)}
		style={style}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
	ComponentRef<typeof SelectPrimitive.Item>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & ExtendProps
>(({ extend, style, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		{...stylex.props(styles.item, extend)}
		style={style}
		{...props}
	>
		<span {...stylex.props(styles.itemSpan)}>
			<SelectPrimitive.ItemIndicator>
				{/* <CheckIcon className="h-4 w-4" /> */}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width={"1rem"}
					height={"1rem"}
				>
					<title>Checkmark</title>
					<path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
				</svg>
			</SelectPrimitive.ItemIndicator>
		</span>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
	ComponentRef<typeof SelectPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & ExtendProps
>(({ extend, style, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		{...stylex.props(styles.separator, extend)}
		style={style}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
};
