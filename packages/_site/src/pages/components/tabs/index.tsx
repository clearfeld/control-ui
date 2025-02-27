import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
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

export default function TabsPage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Tabs"
                description="Tabs are used to organize content by grouping similar information on the same page."
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
                                        install="pnpm add @controlkit/tabs"
                                        npmjs="https://www.npmjs.com/package/@controlkit/tabs"
                                        npmTitle="@controlkit/tabs"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/tabs"
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="tab-2">
                                <div {...stylex.props(styles.stepBlock)}>
                                    <H5>1. Install the following dependencies</H5>
                                    <ComponentInfo
                                        install="pnpm add @radix-ui/react-slot"
                                        npmjs="https://www.npmjs.com/package/@controlkit/label"
                                        npmTitle="@radix-ui/react-slot"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/label"
                                    />
                                </div>

                                <br />

                                <div {...stylex.props(styles.stepBlock)}>
                                    <H5>2. Copy and paste the following code into your project.</H5>

                                    <CodeBlock
                                        language="tsx"
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/tabs/lib/index.tsx"}
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
                                description="The default form of tabs."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Tabs defaultValue="tab-1">
                                        <TabsList>
                                            <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
                                            <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="tab-1">Tab 1 Content</TabsContent>
                                        <TabsContent value="tab-2">Tab 2 Content</TabsContent>
                                    </Tabs>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";

export default function TabsExample() {
	return (
		<Tabs defaultValue="tab-1">
			<TabsList>
				<TabsTrigger value="tab-1">Tab 1</TabsTrigger>
				<TabsTrigger value="tab-2">Tab 2</TabsTrigger>
			</TabsList>
			<TabsContent value="tab-1">Tab 1 Content</TabsContent>
			<TabsContent value="tab-2">Tab 2 Content</TabsContent>
		</Tabs>
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
