"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const CloseCircleIcon = ({
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
		<title>Close</title>
		<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z" />
	</svg>
);
CloseCircleIcon.displayName = "CloseCircleIcon";

export { CloseCircleIcon };