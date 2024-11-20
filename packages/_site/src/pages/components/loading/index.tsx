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
import { LoadingSpinner, LoadingSize } from "@controlkit/loading";

export default function LoadingPage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Loading"
                description="A spinning pre-loader to indicate that something is still rendering/loading."
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
                                        install="pnpm add @controlkit/loading"
                                        npmjs="https://www.npmjs.com/package/@controlkit/loading"
                                        npmTitle="@controlkit/loading"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/loading"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/loading/lib/index.tsx"}
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
                                description="The default version of the loading component."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <LoadingSpinner />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { LoadingSpinner, LoadingSize } from "@controlkit/loading";

export default function LoadingExample() {
	return (
        <LoadingSpinner />
	);
}
`}
                                />
                            </div>
                        </div>
                        <div>
                            <ExampleBlock
                                title="Small"
                                description="The small version of the loading component."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <LoadingSpinner size={LoadingSize.SMALL} />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { LoadingSpinner, LoadingSize } from "@controlkit/loading";

export default function LoadingExample() {
	return (
        <LoadingSpinner size={LoadingSize.SMALL} />
	);
}
`}
                                />
                            </div>
                        </div>
                        <div>
                            <ExampleBlock
                                title="Default"
                                description="The large version of the loading component."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <LoadingSpinner size={LoadingSize.LARGE} />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { LoadingSpinner, LoadingSize } from "@controlkit/loading";

export default function LoadingExample() {
	return (
        <LoadingSpinner size={LoadingSize.LARGE} />
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
