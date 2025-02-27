import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef, useState } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";
import { Textarea } from "@controlkit/textarea";

export default function TextareaPage() {
    const divRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<string>("");

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Textarea"
                description="A textarea lets users enter long form text which spans over multiple lines."
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
                                        install="pnpm add @controlkit/textarea"
                                        npmjs="https://www.npmjs.com/package/@controlkit/textarea"
                                        npmTitle="@controlkit/textarea"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/textarea"
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="tab-2">
                                <div {...stylex.props(styles.stepBlock)}>
                                    <H5>1. Copy and paste the following code into your project.</H5>

                                    <CodeBlock
                                        language="tsx"
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/textarea/lib/index.tsx"}
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <H2 id="examples">Examples</H2>
                    <Divider />

                    {/* default */}
                    <div>
                        <ExampleBlock
                            title="Default"
                            description="The default form of a textarea"
                        />
                        <div {...stylex.props(styles.codeWrapper)}>
                            <PreviewBlock>
                                <Textarea
                                    placeholder="example"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                    }}
                                />
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import React, { useState } from 'react';

import { Textarea } from "@controlkit/textarea";

export default function TextareaExample() {
    const [value, setValue] = useState<string>("");

	return (
        <Textarea
            placeholder="example"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
	);
}`}
                            />
                        </div>
                    </div>

                    <div>
                        <ExampleBlock
                            title="Disabled"
                            description="The disabled form of a textarea."
                        />
                        <div {...stylex.props(styles.codeWrapper)}>
                            <PreviewBlock>
                                <Textarea
                                    placeholder="example"
                                    disabled
                                />
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import Reactfrom 'react';

import { Textarea } from "@controlkit/textarea";

export default function TextareaExample() {
	return (
        <Textarea
            placeholder="example"
            disabled
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
