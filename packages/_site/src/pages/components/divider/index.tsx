import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

const dividerPageStyles = stylex.create({
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

export default function DividerPage() {
	return (
		<div {...stylex.props(dividerPageStyles.wrapper)}>
			<ComponentHero
				title="Divider"
				description="A divider is used to separate sections."
			/>

			<div {...stylex.props(dividerPageStyles.threeColumnLayout)}>
				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

				<div {...stylex.props(dividerPageStyles.middleColumn)}>
					<H2>Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(dividerPageStyles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/divider"
										npmjs="https://www.npmjs.com/package/@controlkit/divider"
										npmTitle="@controlkit/divider"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(dividerPageStyles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-separator"
										npmjs="https://www.npmjs.com/package/@controlkit/divider"
										npmTitle="@radix-ui/react-separator"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
									/>
								</div>

								<br />

								<div {...stylex.props(dividerPageStyles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										code={`"use client";

import React from "react";
import * as stylex from '@stylexjs/stylex';
import * as SeparatorPrimitive from "@radix-ui/react-separator"

type ExtendProps = { extend?: stylex.StyleXStyles };

enum DividerVariants {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

const styles = stylex.create({
    base: {
        shrink: "0",
        margin: 0,
        padding: 0,
        borderRadius: "0.25rem",
        border: "none",
    },

    [DividerVariants.HORIZONTAL]: {
        width: "100%",
        borderTop: "0.0625rem solid var(--divider-color, #808080)",
        height: "0.0625rem",
    },

    [DividerVariants.VERTICAL]: {
        height: "100%",
        borderRight: "0.0625rem solid var(--divider-color, #808080)",
        width: "0.0625rem",
    },
});

const Divider = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & ExtendProps
>(
    (
        { className, extend, orientation = DividerVariants.HORIZONTAL, decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={className}
            {...stylex.props(
                styles.base,
                styles[orientation],
                extend
            )}
            {...props}
        />
    )
)
Divider.displayName = SeparatorPrimitive.Root.displayName;

export {
    DividerVariants,
    Divider,
};`}
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
							description="The default form of a divider."
						/>
						<div {...stylex.props(dividerPageStyles.codeWrapper)}>
							<PreviewBlock>
								<Divider />
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { Divider } from "@controlkit/divider";

export default function DividerExample() {
	return (
		<Divider />
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
