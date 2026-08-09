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
    const componentProps = [
        {
            propName: "name",
            description: "The name of the radio group.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "defaultValue",
            description: "The default value of the radio group.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "value",
            description: "The value of the selected radio item.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "onValueChange",
            description: "The function to call when the value of the radio group changes.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "form",
            description: "The form attribute specifies the form the radio group belongs to.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "disabled",
            description: "The disabled attribute specifies whether the radio group is disabled.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "readOnly",
            description: "The readOnly attribute specifies whether the radio group is read-only.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "required",
            description: "The required attribute specifies whether the radio group is required.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "inputRef",
            description: "The reference to the input element.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "className",
            description: "The className attribute specifies one or more class names for the radio group.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "style",
            description: "The style attribute specifies the inline style for the radio group.",
            type: "string",
            defaultValue: null,
        },
        {
            propName: "render",
            description: "Allows you to replace the component's HTML element with a different tag, or compose it with another component.",
            type: "string",
            defaultValue: null,
        },
    ];

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
                        <h1>API Reference</h1>
                        <h2>RadioGroup</h2>
                        <p>Provides a shared state to a series of radio buttons. Renders a &lt;div&gt; element.</p>
                        <ComponentPropList>
                            {componentProps.map((prop) => (
                                <ComponentPropRow
                                    propName={prop.propName}
                                    description={prop.description}
                                    type={prop.type}
                                    defaultValue={prop.defaultValue}
                                />
                            ))}
                        </ComponentPropList>
                    </div>
                </div>

            </div>
        </div>
    );
}