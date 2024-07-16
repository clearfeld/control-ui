"use client";

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import * as SliderPrimitive from "@radix-ui/react-slider"

type ExtendProps = { extend?: stylex.StyleXStyles };
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const styles = stylex.create({
    root: {
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: "100%",
        touchAction: "none",
        userSelect: "none",
        cursor: "pointer",
    },

    disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
    },

    track: {
        overflow: "hidden",
        position: "relative",
        borderRadius: "9999px",
        width: "100%",
        height: "0.375rem",
        backgroundColor: "var(--range-background-color, #333333)",
    },

    range: {
        position: "absolute",
        height: "100%",
        backgroundColor: "var(--range-track-color, #999999)",
    },

    thumb: {
        display: "block",
        borderRadius: "9999px",
        borderWidth: "0.0625rem",
        width: "1rem",
        height: "1rem",
        transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "var(--transition-speed, 0.2s)",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        backgroundColor: "var(--range-thumb-color, #FCFCFC)",

        ":focus": {
            outline: "0.25rem solid var(--range-thumb-outline-color, #006699)",
        }
    },
});

const Range = forwardRef<
    ElementRef<typeof SliderPrimitive.Root>,
    ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & ExtendProps
>(({ extend, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        {...stylex.props(
            styles.root,
            props.disabled && styles.disabled,
            extend
        )}
        {...props}
    >
        <SliderPrimitive.Track
            {...stylex.props(styles.track)}
        >
            <SliderPrimitive.Range
                {...stylex.props(styles.range)}
            />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
            {...stylex.props(styles.thumb)}
        />
    </SliderPrimitive.Root>
));
Range.displayName = SliderPrimitive.Root.displayName;

export { Range };
