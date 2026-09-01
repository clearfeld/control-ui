"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const CheckCircleIcon = ({
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
		<title>Check</title>
		<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z" />
	</svg>
);
CheckCircleIcon.displayName = "CheckCircleIcon";

export { CheckCircleIcon };