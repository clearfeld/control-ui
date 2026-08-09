import ComponentHero from "../commons/component-hero";
import * as stylex from "@stylexjs/stylex";
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

import { RadioGroup, RadioGroupItem } from "@controlkit/radio";
import { Label } from "@controlkit/label";
import { ComponentPropList, ComponentPropRow } from "../commons/component-prop-list";

export default function RadioPage() {

    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Radio"
                description=""
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
                                {/* <TabsTrigger value="tab-2">Manual</TabsTrigger> */}
                            </TabsList>
                            <TabsContent value="tab-1">
                                <div {...stylex.props(styles.blockWrapper)}>
                                    <ComponentInfo
                                        install="pnpm add @controlkit/radio"
                                        npmjs="https://www.npmjs.com/package/@controlkit/radio"
                                        npmTitle="@controlkit/radio"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/radio"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/radio/lib/index.tsx"}
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
                                description=""
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <RadioGroup defaultValue="option-one">
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "0.5rem",
                                            }}
                                        >
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">Option One</Label>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "0.5rem",
                                            }}
                                        >
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">Option Two</Label>
                                        </div>
                                    </RadioGroup>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';
import { RadioGroup, RadioGroupItem } from "@controlkit/radio";
import { Label } from "@controlkit/label";
export default function RadioExample() {
	return (
		<RadioGroup defaultValue="option-one">
            <div
                style={{
                    display: "flex",
                    gap: "0.5rem",
                }}
            >
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "0.5rem",
                }}
            >
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
            </div>
        </RadioGroup>
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <ComponentPropList title="RadioGroup" description="Provides a shared state to a series of radio buttons. Renders a <div> element.">
                            <ComponentPropRow propName="name" description="The name of the radio group."  type="string" defaultValue={null} />
                            <ComponentPropRow propName="defaultValue" description="The description of the radio group."  type="Value" defaultValue={null} />
                            <ComponentPropRow propName="value" description="The name of the radio group."  type="Value" defaultValue={null} />
                            <ComponentPropRow propName="onValueChange" description="The name of the radio group."  type="function" defaultValue={null} />
                            <ComponentPropRow propName="form" description="The name of the radio group."  type="string" defaultValue={null} />
                            <ComponentPropRow propName="disabled" description="The name of the radio group."  type="boolean" defaultValue="false" />
                            <ComponentPropRow propName="readOnly" description="The name of the radio group."  type="boolean" defaultValue="false" />
                            <ComponentPropRow propName="required" description="The name of the radio group."  type="boolean" defaultValue="false" />
                            <ComponentPropRow propName="inputRef" description="The name of the radio group."  type="React.Ref<HTMLInputElement>" defaultValue={null} />
                            <ComponentPropRow propName="className" description="The name of the radio group."  type="string | function" defaultValue={null} />
                            <ComponentPropRow propName="style" description="The name of the radio group."  type="React.CSSProperties | function" defaultValue={null} />
                            <ComponentPropRow propName="render" description="The name of the radio group."  type="ReactElement | function" defaultValue={null} />
                        </ComponentPropList>
                    </div>
                </div>

            </div>
        </div>
    );
}