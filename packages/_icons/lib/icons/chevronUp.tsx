"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const ChevronUpIcon = ({
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
		<title>ChevronUp</title>
		<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" />
	</svg>
);
ChevronUpIcon.displayName = "ChevronUpIcon";

export { ChevronUpIcon };
