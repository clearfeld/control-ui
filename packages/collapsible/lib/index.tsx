"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import type { ComponentProps } from "react";

// const Collapsible = CollapsiblePrimitive.Root;
const Collapsible = ({ ...props }: ComponentProps<typeof CollapsiblePrimitive.Root>) => (
	<CollapsiblePrimitive.Root {...props} />
);
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

// const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleTrigger = ({
	...props
}: ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) => (
	<CollapsiblePrimitive.CollapsibleTrigger {...props} />
);
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

// const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const CollapsibleContent = ({
	...props
}: ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) => (
	<CollapsiblePrimitive.CollapsibleContent {...props} />
);
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
