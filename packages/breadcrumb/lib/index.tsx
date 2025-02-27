"use client";

import type React from "react";
import { type ComponentProps, type ComponentPropsWithoutRef, forwardRef } from "react"
import * as stylex from "@stylexjs/stylex";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Slot } from "@radix-ui/react-slot";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	list: {
		display: "flex",
		flexWrap: "wrap",
		gap: "0.375rem",
		alignItems: "center",
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
		margin: 0,
		padding: 0,
		listStyle: "none",
		listStyleType: "none",
		overflowWrap: "break-word",
		"@media (min-width: 640px)": {
			gap: "0.625rem",
		},
	},

	item: {
		display: "inline-flex",
		gap: "0.375rem",
		alignItems: "center",
		listStyle: "none",
		listStyleType: "none",
	},

	link: {
		transitionProperty:
			"color, background-color, border-color, text-decoration-color, fill, stroke",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		color: "var(--breadcrumb-link, #999999)",
		textDecoration: "none",
		":hover": {
			color: "var(--breadcrumb-link-hover, #FCFCFC)",
		},
	},

	separator: {
		listStyle: "none",
		listStyleType: "none",
		display: "flex",
	},

	page: {
		fontWeight: "400",
	},

	ellipsis: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		outline: "none",

		padding: "0 0.25rem",
		borderRadius: "0.25rem",

		transition: "background-color var(--transition-speed, 0.2s) ease",
		cursor: "pointer",
		":hover": {
			backgroundColor: "var(--breadcrumb-hover, #3b3a39)",
		},
	},
});

const Breadcrumb = forwardRef<
	HTMLElement,
	ComponentPropsWithoutRef<"nav"> & {
		separator?: React.ReactNode;
	} & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<nav
		ref={ref}
		aria-label="breadcrumb"
		className={className}
		{...stylex.props(extend)}
		{...props}
	/>
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<"ol"> & ExtendProps>(
	({ className, extend, ...props }, ref) => (
		<ol
			ref={ref}
			className={className}
			{...stylex.props(styles.list, extend)}
			{...props}
		/>
	),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<"li"> & ExtendProps>(
	({ className, extend, ...props }, ref) => (
		<li
			ref={ref}
			className={className}
			{...stylex.props(styles.item, extend)}
			{...props}
		/>
	),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<"a"> & {
		asChild?: boolean;
	} & ExtendProps
>(({ asChild, className, extend, ...props }, ref) => {
	const Comp = asChild ? Slot : "a";

	return (
		<Comp
			ref={ref}
			className={className}
			{...stylex.props(styles.link, extend)}
			{...props}
		/>
	);
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<"span"> & ExtendProps>(
	({ className, extend, ...props }, ref) => (
		<span
			ref={ref}
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={className}
			{...stylex.props(styles.page, extend)}
			{...props}
		/>
	),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
	children,
	className,
	extend,
	...props
}: ComponentProps<"li"> & ExtendProps) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={className}
		{...stylex.props(styles.separator, extend)}
		{...props}
	>
		{children ?? (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width={"1.125rem"}
				height={"1.125rem"}
				color="#999999"
			>
				<title>Chevron Right</title>
				<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
			</svg>
		)}
	</li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
	className,
	extend,
	...props
}: ComponentProps<"span"> & ExtendProps) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={className}
		{...stylex.props(styles.ellipsis, extend)}
		{...props}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width={"1.5rem"}
			height={"1.5rem"}
			color="#999999"
		>
			<title>Horizontal Dots</title>
			<path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" />
		</svg>

		{/* <span className="sr-only">More</span> */}
	</span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};
