"use client";

import * as stylex from "@stylexjs/stylex";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import type { ComponentProps } from "react";

type ExtendProps = { extend?: stylex.StyleXStyles };

// const AspectRatio = AspectRatioPrimitive.Root;
const AspectRatio = ({
	className,
	extend,
	ref,
	...props
}: ComponentProps<typeof AspectRatioPrimitive.Root> & ExtendProps) => (
	<AspectRatioPrimitive.Root
		ref={ref}
		className={className}
		{...stylex.props(extend)}
		{...props}
	/>
);
AspectRatio.displayName = "AspectRatio";


export { AspectRatio };
