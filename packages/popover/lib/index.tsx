"use client";

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import * as PopoverPrimitive from "@radix-ui/react-popover";

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const styles = stylex.create({
    base: {
        zIndex: 100,
        padding: "1rem",
        borderRadius: "0.375rem",
        borderWidth: "0.0625rem",
        outlineStyle: "none",
        width: "18rem",
    },
});

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = forwardRef<
    ElementRef<typeof PopoverPrimitive.Content>,
    ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & ExtendProps
>(({ extend, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            {...stylex.props(
                styles.base,
                extend
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };



