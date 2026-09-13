"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const MenuSvg = ({
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
		<title>Menu</title>
		<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
	</svg>
);
MenuSvg.displayName = "MenuSvg";

export { MenuSvg };
