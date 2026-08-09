"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const ChevronDownIcon = ({
	extend,
	className,
	fill = "var(--svg-color, #FCFCFC)",
	height = "1.25rem",
	width = "1.25rem",
	style,
	ref,
	...props
}: ComponentProps<"svg"> & IconProps) => (
	<svg
		ref={ref}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill={fill}
		width={height}
		height={width}
		{...stylex.props(extend)}
		className={className}
		style={style}
		{...props}
	>
		<title>ChevronDown</title>
		<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
	</svg>
);
ChevronDownIcon.displayName = "ChevronDownIcon";

export { ChevronDownIcon };
