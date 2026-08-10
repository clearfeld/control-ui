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
import { ComponentPropList, ComponentPropRow  } from "../commons/component-prop-list";
import { AttributeTable, AttributeRow } from "../commons/attribute-list";
import type { ComponentProp } from "../commons/component-prop-list/types";
import { makeComponentProp } from "../commons/component-prop-list/types";

const radioGroupProps: ComponentProp[] = [
  makeComponentProp("name", "The name of the radio group.", "string"),
  makeComponentProp("defaultValue", "The default value of the radio group.", "Value"),
  makeComponentProp("value", "The value of the selected radio item.", "Value"),
  makeComponentProp("onValueChange", "The function to call when the value of the radio group changes.", "function"),
  makeComponentProp("form", "The form attribute specifies the form the radio group belongs to.", "string"),
  makeComponentProp("disabled", "The disabled attribute specifies whether the radio group is disabled.", "boolean"),
  makeComponentProp("readOnly", "The readOnly attribute specifies whether the radio group is read-only.", "boolean", "false"),
  makeComponentProp("required", "The required attribute specifies whether the radio group is required.", "boolean", "false"),
  makeComponentProp("inputRef", "The reference to the input element.", "React.Ref<HTMLInputElement>", "false"),
  makeComponentProp("className", "The className attribute specifies one or more class names for the radio group.", "string | function"),
  makeComponentProp("style", "The style attribute specifies the inline style for the radio group.", "React.CSSProperties | function"),
  makeComponentProp("render", "Allows you to replace the component's HTML element with a different tag, or compose it with another component.", "ReactElement | function"),
];

const rootProps: ComponentProp[] = [
  makeComponentProp("value", "The unique identifying value of the radio in a group.", "Value"),
  makeComponentProp("nativeButton", "Whether the component renders a native <button> element when replacing it via the render prop. Set to true if the rendered element is a native button.", "boolean", "false"),
  makeComponentProp("disabled", "Whether the component should ignore user interaction.", "boolean"),
  makeComponentProp("readOnly", "Whether the user should be unable to select the radio button.", "boolean"),
  makeComponentProp("required", "Whether the user must choose a value before submitting a form.", "boolean"),
  makeComponentProp("inputRef", "The reference to the input element.", "React.Ref<HTMLInputElement>"),
  makeComponentProp("className", "The className attribute specifies one or more class names for the radio group.", "string | function"),
  makeComponentProp("style", "The style attribute specifies the inline style for the radio group.", "React.CSSProperties | function"),
  makeComponentProp("render", "Allows you to replace the component's HTML element with a different tag, or compose it with another component.", "ReactElement | function"),
];

const indicatorProps: ComponentProp[] = [
  makeComponentProp("className", "CSS class applied to the element, or a function that returns a class based on the component's state.", "string | function"),
  makeComponentProp("style", "Style applied to the element, or a function that returns a style object based on the component's state.", "React.CSSProperties | function"),
  makeComponentProp("keepMounted", "Whether to keep the HTML element in the DOM when the radio button is inactive.", "boolean", "false"),
  makeComponentProp("render", "Allows you to replace the component's HTML element with a different tag, or compose it with another component.", "ReactElement | function"),
];

const radioGroupAttributes: [string, string][] = [
 ["data-disabled", "Present when the radio group is disabled."]
];

const rootAttributes: [string, string][] = [
 ["data-checked", "Present when the radio is checked."],
 ["data-unchecked", "Present when the radio is unchecked."],
 ["data-disabled", "Present when the radio is disabled."],
 ["data-readonly", "Present when the radio is read-only."],
 ["data-required", "Present when the radio is required."],
 ["data-valid", "Present when the radio is in a valid state (when wrapped in Field.Root)."],
 ["data-invalid", "Present when the radio is in an invalid state (when wrapped in Field.Root)."],
 ["data-dirty", "Present when the radio's value has changed (when wrapped in Field.Root)."],
 ["data-touched", "Present when the radio has been touched (when wrapped in Field.Root)."],
 ["data-filled", "Present when the radio is checked (when wrapped in Field.Root)."],
 ["data-focused", "Present when the radio is focused (when wrapped in Field.Root)."]
];
const indicatorAttributes: [string, string][] = rootAttributes.concat([
 ["data-starting-style", "Present when the radio indicator begins animating in."],
 ["data-ending-style", "Present when the radio indicator is animating out."],
]);

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
                    <h1>API Reference</h1>
                    <div>
                        <h2>RadioGroup</h2>
                        <p>Provides a shared state to a series of radio buttons. Renders a &lt;div&gt; element.</p>
                        <ComponentPropList>
                            {radioGroupProps.map((prop, idx) => (
                                <ComponentPropRow
                                    key={idx}
                                    propName={prop.propName}
                                    description={prop.description}
                                    type={prop.type || "string"}
                                    defaultValue={prop.defaultValue || null}
                                />
                            ))}
                        </ComponentPropList>
                        <br />
                        <AttributeTable>
                            {radioGroupAttributes.map(([name, value], idx) => (
                                <AttributeRow key={idx} name={name} value={value} />
                            ))}
                        </AttributeTable>
                    </div>
                    <div>
                        <h2>Root</h2>
                        <p>Represents the radio button itself. Renders a &lt;span&gt; element and a hidden &lt;input&gt; beside.</p>
                        <ComponentPropList>
                            {rootProps.map((prop, idx) => (
                                <ComponentPropRow
                                    key={idx}
                                    propName={prop.propName}
                                    description={prop.description}
                                    type={prop.type || "string"}
                                    defaultValue={prop.defaultValue || null}
                                />
                            ))}
                        </ComponentPropList>
                        <br />
                        <AttributeTable>
                            {rootAttributes.map(([name, value], idx) => (
                                <AttributeRow key={idx} name={name} value={value} />
                            ))}
                        </AttributeTable>
                    </div>
                    <div>
                        <h2>Indicator</h2>
                        <p>Represents the visual indicator of the radio button. Renders a &lt;span&gt; element.</p>
                        <ComponentPropList>
                            {indicatorProps.map((prop, idx) => (
                                <ComponentPropRow
                                    key={idx}
                                    propName={prop.propName}
                                    description={prop.description}
                                    type={prop.type || "string"}
                                    defaultValue={prop.defaultValue || null}
                                />
                            ))}
                        </ComponentPropList>
                        <br />
                        <AttributeTable>
                            {indicatorAttributes.map(([name, value], idx) => (
                                <AttributeRow key={idx} name={name} value={value} />
                            ))}
                        </AttributeTable>
                    </div>
                </div>

            </div>
        </div>
    );
}