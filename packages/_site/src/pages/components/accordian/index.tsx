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
import { styles } from "../_layout/styles";
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";

export default function AccordianPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Accordian"
				description="A vertically stacked set of interactive headings that each reveal a section of content."
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
										install="pnpm add @controlkit/accordian"
										npmjs="https://www.npmjs.com/package/@controlkit/accordian"
										npmTitle="@controlkit/accordian"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/accordian"
									/>
								</div>
							</TabsContent>

							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-accordion"
										npmjs="https://www.npmjs.com/package/@controlkit/accordian"
										npmTitle="@radix-ui/react-accordion"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/accordian"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>
									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/accordion/lib/index.tsx"}
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
							description="The default form of a accordian."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
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

			</div>
		</div>
	);
}
