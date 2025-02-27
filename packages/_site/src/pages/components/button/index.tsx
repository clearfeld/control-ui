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
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";
import { styles } from "../_layout/styles";

export default function ButtonPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Button"
				description="A button triggers an event or action. They let users know what will happen next."
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
										install="pnpm add @controlkit/button"
										npmjs="https://www.npmjs.com/package/@controlkit/button"
										npmTitle="@controlkit/button"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-slot"
										npmjs="https://www.npmjs.com/package/@controlkit/button"
										npmTitle="@radix-ui/react-slot"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/button/lib/index.tsx"}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2 id="examples">Examples</H2>
					<Divider />

					<div>
						<div>
							<ExampleBlock
								title="Default"
								description="The default form of a button. Used when performing an action that will modifiy data or save new data."
							/>
							<div {...stylex.props(styles.codeWrapper)}>
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
							<div {...stylex.props(styles.codeWrapper)}>
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
							<div {...stylex.props(styles.codeWrapper)}>
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

			</div>
		</div>
	);
}
