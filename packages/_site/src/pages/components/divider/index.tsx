import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider, DividerVariants } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";

export default function DividerPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Divider"
				description="A divider is used to separate sections."
			/>

			<div {...stylex.props(styles.threeColumnLayout)}>
				<ContentsSidebar ref={divRef} />

				<div {...stylex.props(styles.middleColumn)}>
					<H2 id="installation">Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(styles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/divider"
										npmjs="https://www.npmjs.com/package/@controlkit/divider"
										npmTitle="@controlkit/divider"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-separator"
										npmjs="https://www.npmjs.com/package/@controlkit/divider"
										npmTitle="@radix-ui/react-separator"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
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

					<H2 id="examples">Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="Default"
							description="The default form of a divider."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
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

					<div>
						<ExampleBlock
							title="Vertical"
							description="The vertical form of a divider."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Divider
									orientation={DividerVariants.VERTICAL}
									style={{
										height: "4rem",
									}}
								/>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { Divider, DividerVariants } from "@controlkit/divider";

export default function DividerExample() {
	return (
		<Divider
			orientation={DividerVariants.VERTICAL}
			style={{
				height: "4rem",
			}}
		/>
	);
}`}
							/>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
