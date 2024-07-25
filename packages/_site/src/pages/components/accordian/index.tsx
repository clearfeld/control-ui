import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@controlkit/accordion";

const accordianPageStyles = stylex.create({
	wrapper: {
		width: "100%",
		height: "100%",
		padding: "2rem",
		boxSizing: "border-box",
	},

	threeColumnLayout: {
		display: "flex",
	},

	middleColumn: {
		width: "100%",
		height: "100%",
		//padding: "1rem",
		marginTop: "2rem",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
	},

	codeWrapper: {
		// border: "1px solid var(--border-100)",
		borderRadius: "var(--border-radius)",
		backgroundColor: "#121212",
		// padding: "1rem",
		boxSizing: "border-box",
	},

	blockWrapper: {
		marginTop: "1rem",
	},

	stepBlock: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
});

export default function AccordianPage() {
	return (
		<div {...stylex.props(accordianPageStyles.wrapper)}>
			<ComponentHero
				title="Accordian"
				description="A vertically stacked set of interactive headings that each reveal a section of content."
			/>

			<div {...stylex.props(accordianPageStyles.threeColumnLayout)}>
				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

				<div {...stylex.props(accordianPageStyles.middleColumn)}>
					<H2>Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>

							<TabsContent value="tab-1">
								<div {...stylex.props(accordianPageStyles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/accordian"
										npmjs="https://www.npmjs.com/package/@controlkit/accordian"
										npmTitle="@controlkit/accordian"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/accordian"
									/>
								</div>
							</TabsContent>

							<TabsContent value="tab-2">
								<div {...stylex.props(accordianPageStyles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-accordion"
										npmjs="https://www.npmjs.com/package/@controlkit/accordian"
										npmTitle="@radix-ui/react-accordion"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/accordian"
									/>
								</div>

								<br />

								<div {...stylex.props(accordianPageStyles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>
									<CodeBlock
										language="tsx"
										code={`"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import * as AccordionPrimitive from "@radix-ui/react-accordion"

type ExtendProps = { extend?: stylex.StyleXStyles };

const rotate_up = stylex.keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(180deg)" },
});

const rotate_down = stylex.keyframes({
    from: { transform: "rotate(180deg)" },
    to: { transform: "rotate(0deg)" },
});

const accordion_down = stylex.keyframes({
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
});

const accordion_up = stylex.keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
});

const styles = stylex.create({
    item: {
        borderBottomWidth: "0.0625rem",

        ':not(#__unused__) > h3': {
            margin: 0,
            padding: 0,
        }
    },

    trigger: {
        width: "100%",
        boxSizing: "border-box",
        padding: "0.5rem 0.5rem",
        display: "flex",
        flex: "1 1 0%",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 500,

        transitionProperty: "all",
        transitionTimingFunction: "ease",
        transitionDuration: "var(--transition-speed, 0.2s)",

        border: "none",
        borderBottom: "0.0625rem solid var(--accordion-border, #808080)",

        backgroundColor: "transparent",
        color: "var(--accordion-color, #FCFCFC)",
        cursor: "pointer",

        ":hover": {
            backgroundColor: "var(--accordion-hover, #333333)",
        },

        ":not(#__unused__):is([data-state=\"open\"]) > svg": {
            animationName: rotate_up,
            animationDuration: '0.2s',
            animationDelay: "0s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
            animationIterationCount: 1,
        },

        ":not(#__unused__):is([data-state=\"closed\"]) > svg": {
            animationName: rotate_down,
            animationDuration: '0.2s',
            animationTimingFunction: "ease-out",
            animationDelay: "0s",
            animationFillMode: "forwards",
            animationIterationCount: 1,
        },
    },

    content: {
        overflow: "hidden",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",

        ":is([data-state=\"open\"])": {
            animationName: accordion_down,
            animationDuration: '0.2s',
            animationTimingFunction: "ease-out",
        },

        ":is([data-state=\"closed\"])": {
            animationName: accordion_up,
            animationDuration: '0.2s',
            animationTimingFunction: "ease-out",
        },
    },
});

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={className}
        {...stylex.props(styles.item, extend)}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & ExtendProps
>(({ className, extend, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={className}
            {...stylex.props(styles.trigger, extend)}
            {...props}
        >
            {children}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={"1rem"}
                height={"1rem"}
            >
                <title>Down Chevron Arrow</title>
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>

        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & ExtendProps
>(({ className, extend, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        {...stylex.props(styles.content)}
        {...props}
    >
        <div
            className={className}
            {...stylex.props(extend)}
        >
            {children}
        </div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2>Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="Default"
							description="The default form of a accordian."
						/>
						<div {...stylex.props(accordianPageStyles.codeWrapper)}>
							<PreviewBlock>
								<Accordion
									type="single"
									collapsible
								>
									<AccordionItem value="item-1">
										<AccordionTrigger>Is it accessible?</AccordionTrigger>
										<AccordionContent>
											Yes. It adheres to the WAI-ARIA design pattern.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger>Is it styled?</AccordionTrigger>
										<AccordionContent>
											Yes. It comes with default styles that matches the other
											components&apos; aesthetic.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-3">
										<AccordionTrigger>Is it animated?</AccordionTrigger>
										<AccordionContent>
											Yes. It's animated by default, but you can disable it if
											you prefer.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@controlkit/accordion";

export default function AccordianExample() {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components' aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you can disable it if
					you prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}`}
							/>
						</div>
					</div>
				</div>

				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          help info
        </div> */}
			</div>
		</div>
	);
}
