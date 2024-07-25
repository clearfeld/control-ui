import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import { Button, ButtonVariants } from "@controlkit/button";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
// import InstallationBlock from "../commons/installation-block";
import { H2, H5 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";

const buttonPageStyles = stylex.create({
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

export default function ButtonPage() {
	return (
		<div {...stylex.props(buttonPageStyles.wrapper)}>
			<ComponentHero
				title="Button"
				description="A button triggers an event or action. They let users know what will happen next."
			/>

			<div {...stylex.props(buttonPageStyles.threeColumnLayout)}>
				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

				<div {...stylex.props(buttonPageStyles.middleColumn)}>
					<H2>Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(buttonPageStyles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/button"
										npmjs="https://www.npmjs.com/package/@controlkit/button"
										npmTitle="@controlkit/button"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(buttonPageStyles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-slot"
										npmjs="https://www.npmjs.com/package/@controlkit/button"
										npmTitle="@radix-ui/react-slot"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
									/>
								</div>

								<br />

								<div {...stylex.props(buttonPageStyles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										code={`"use client";

import React, { forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import { Slot } from "@radix-ui/react-slot"

type ExtendProps = { extend?: stylex.StyleXStyles };

enum ButtonVariants {
    CREATE = "create",
    ACTION = "action",
    DANGER = "danger",
    GHOST = "ghost"
}

const styles = stylex.create({
    base: {
        border: "none",
        outline: "none",
        borderRadius: "var(--border-radius, 0.25rem)",

        padding: "0.625rem 1rem 0.5rem 1rem",

        color: "var(--btn-text, #FCFCFC)",

        cursor: "pointer",

        height: "2rem",
        minWidth: "4rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        whiteSpace: "nowrap",

        transition: "background-color var(--transition-speed, 0.2s) ease",
    },

    fullWidth: {
        width: "100%",
    },

    disabled: {
        opacity: "0.75",
        cursor: "not-allowed",
    },

    [ButtonVariants.CREATE]: {
        backgroundColor: {
            default: "var(--btn-primary-background, #006699)",
            ":hover": "var(--btn-primary-hover-background, #00AAFF)",
        }
    },

    [ButtonVariants.ACTION]: {
        backgroundColor: {
            default: "var(--btn-secondary-background, #666666)",
            ":hover": "var(--btn-secondary-hover-background, #B3B3B3)",
        }
    },

    [ButtonVariants.DANGER]: {
        backgroundColor: {
            default: "var(--btn-dangerous-background, #CC2500)",
            ":hover": "var(--btn-dangerous-hover-background, #FF2E00)",
        }
    },

    [ButtonVariants.GHOST]: {
        backgroundColor: {
            default: "unset",
            ":hover": "var(--btn-primary-hover-background, #666666)",
        }
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    fullWidth?: boolean;
    disabled?: boolean;
    asChild?: boolean;
}

const Button = forwardRef<
    HTMLButtonElement,
    ButtonProps & ExtendProps
>(({
    extend,
    variant = ButtonVariants.CREATE,
    fullWidth,
    disabled,
    asChild = false,
    ...props
}, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            ref={ref}
            {...stylex.props(
                styles.base,
                styles[variant],
                fullWidth && styles.fullWidth,
                disabled && styles.disabled,
                extend
            )}
            disabled={disabled}
            {...props}
        />
    )
});
Button.displayName = "Button";

export { Button, ButtonVariants };`}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2>Examples</H2>
					<Divider />

					<div>
						<div>
							<ExampleBlock
								title="Default"
								description="The default form of a button. Used when performing an action that will modifiy data or save new data."
							/>
							<div {...stylex.props(buttonPageStyles.codeWrapper)}>
								<PreviewBlock>
									<Button>Button</Button>
								</PreviewBlock>

								<CodeBlock
									language="tsx"
									code={`import React from 'react';

import { Button } from "@controlkit/button";

export default function ButtonExample() {
	return (
		<Button>
			Button
		</Button>
	);
}`}
								/>
							</div>
						</div>

						<div>
							<ExampleBlock
								title="Full width"
								description="Buttons can be expanded to full width to fill its parent container."
							/>
							<div {...stylex.props(buttonPageStyles.codeWrapper)}>
								<PreviewBlock>
									<Button fullWidth>Button</Button>
								</PreviewBlock>

								<CodeBlock
									language="tsx"
									code={`import React from 'react';

import { Button } from "@controlkit/button";

export default function ButtonExample() {
	return (
		<Button
			fullWidth
		>
			Button
		</Button>
	);
}`}
								/>
							</div>
						</div>

						<div>
							<ExampleBlock
								title="Danger"
								description="The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals."
							/>
							<div {...stylex.props(buttonPageStyles.codeWrapper)}>
								<PreviewBlock>
									<Button variant={ButtonVariants.DANGER}>Button</Button>
								</PreviewBlock>

								<CodeBlock
									language="tsx"
									code={`import React from 'react';

import { Button, ButtonVariants } from "@controlkit/button";

export default function ButtonExample() {
	return (
		<Button
			variant={ButtonVariants.DANGER}
		>
			Button
		</Button>
	);
}`}
								/>
							</div>
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
