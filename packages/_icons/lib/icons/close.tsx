"use client";

import type React from "react";
import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import type { IconProps } from "../base.tsx";

const CloseIcon = forwardRef<
    React.ElementRef<'svg'>,
    React.ComponentPropsWithoutRef<'svg'> & IconProps
>(({
    extend,
    className,
    fill = "var(--svg-color, #FCFCFC)",
    height = "1.25rem",
    width = "1.25rem",
    ...props
}, ref) => (
    <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={fill}
        width={height}
        height={width}
        className={className}
        {...stylex.props(extend)}
        {...props}
    >
        <title>Close</title>
        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
    </svg>
));
CloseIcon.displayName = "CloseIcon";

export { CloseIcon };
