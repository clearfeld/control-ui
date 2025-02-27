import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H1, H2, H3, H4, H5, H6 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";

export default function HeadingPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Heading"
				description="A heading is used as a title/subtitle element for pages."
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
										install="pnpm add @controlkit/headings"
										npmjs="https://www.npmjs.com/package/@controlkit/headings"
										npmTitle="@controlkit/headings"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/headings"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/headings/lib/index.tsx"}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2 id="examples">Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="H1"
							description="Heading level 1, the most important heading."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H1>Heading 1</H1>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H1 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H1>Heading 1</H1>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H2"
							description="Heading level 2."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H2>Heading 2</H2>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H2 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H2>Heading 2</H2>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H3"
							description="Heading level 3."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H3>Heading 3</H3>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H3 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H3>Heading 3</H3>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H4"
							description="Heading level 4."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H4>Heading 4</H4>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H4 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H4>Heading 4</H4>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H5"
							description="Heading level 5."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H5>Heading 5</H5>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H5 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H5>Heading 5</H5>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="H6"
							description="Heading level 6, the least important heading."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<H6>Heading 6</H6>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { H6 } from "@controlkit/headings";

export default function HeadingExample() {
	return (
		<H6>Heading 6</H6>
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
