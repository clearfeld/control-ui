import ComponentHero from "../commons/component-hero";
import * as stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
// import InstallationBlock from "../commons/installation-block";
import { H1, H2, H3, H5 } from "@controlkit/headings";
import { Divider } from "@controlkit/divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";
import { styles } from "../_layout/styles";
import { ComponentPropList, ComponentPropRow } from "../commons/component-prop-list";
import { AttributeTable, AttributeRow } from "../commons/attribute-list";
import type { ComponentProp } from "../commons/component-prop-list/types";
import { makeComponentProp } from "../commons/component-prop-list/types";

import {
    Progress,
    ProgressLabel,
    ProgressTypes,
    ProgressValue,
    // ProgressTypes
} from "@controlkit/progress-bar";

const rootProps: ComponentProp[] = [
    makeComponentProp("value", "The current value. The component is indeterminate when value is null.", "number | null"),
    makeComponentProp("aria-valuetext", "A string value that provides a user-friendly name for aria-valuenow, the current value of the progress bar.", "string"),
    makeComponentProp("getAriaValueText", "Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar.", "function"),
    makeComponentProp("locale", "The locale used by Intl.NumberFormat when formatting the value. Defaults to the user's runtime locale.", "Intl.LocalesArgument"),
    makeComponentProp("min", "The minimum value.", "number", "0"),
    makeComponentProp("max", "The maximum value.", "number", "100"),
    makeComponentProp("format", "Options to format the value.", "Intl.NumberFormatOptions"),
    makeComponentProp("className", "CSS class applied to the element, or a function that returns a class based on the component's state.", "string | function"),
    makeComponentProp("style", "Style applied to the element, or a function that returns a style object based on the component's state.", "React.CSSProperties | function"),
    makeComponentProp("render", "Allows you to replace the component's HTML element with a different tag, or compose it with another component.", "ReactElement | function"),
];

const trackerIndicatorLabelProps: ComponentProp[] = [
    makeComponentProp("className", "CSS class applied to the element, or a function that returns a class based on the component's state.", "string | function"),
    makeComponentProp("style", "Style applied to the element, or a function that returns a style object based on the component's state.", "React.CSSProperties | function"),
    makeComponentProp("render", "Allows you to replace the component's HTML element with a different tag, or compose it with another component.", "ReactElement | function"),
];

const valueProps: ComponentProp[] = trackerIndicatorLabelProps.concat(
    makeComponentProp("children", "", "((formattedValue: string | null, value: number | null,) => React.ReactNode)", "false")
)

const progressAttributes: [string, string][] = [
    ["data-complete", "Present when the progress has completed."],
    ["data-indeterminate", "Present when the progress is in indeterminate state."],
    ["data-progressing", "Present while the progress is progressing."],
];

export default function ProgressbarPage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Progress Bar"
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
                                        install="pnpm add @controlkit/progress-bar"
                                        npmjs="https://www.npmjs.com/package/@controlkit/progress-bar"
                                        npmTitle="@controlkit/progress-bar"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/progress-bar"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/progress-bar/lib/index.tsx"}
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
                                    <Progress value={75} />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Progress } from "@controlkit/progress-bar";

export default function PopoverExample() {
	return (
		<Progress value={75} />
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <ExampleBlock
                                title="Error"
                                description=""
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Progress
                                        value={46}
                                        variant={ProgressTypes.DANGER}
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Progress, ProgressTypes } from "@controlkit/progress-bar";

export default function PopoverExample() {
	return (
		<Progress
            value={46}
            variant={ProgressTypes.DANGER}
        />
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <ExampleBlock
                                title="Success"
                                description=""
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Progress
                                        value={100}
                                        variant={ProgressTypes.SUCCESS}
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Progress, ProgressTypes } from "@controlkit/progress-bar";

export default function PopoverExample() {
	return (
		<Progress
            value={100}
            variant={ProgressTypes.SUCCESS}
        />
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <ExampleBlock
                                title="Label and Value Fields"
                                description=""
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Progress value={56}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                paddingBottom: "0.5rem",
                                            }}
                                        >
                                            <ProgressLabel>Upload progress</ProgressLabel>
                                            <ProgressValue />
                                        </div>
                                    </Progress>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Progress } from "@controlkit/progress-bar";

export default function PopoverExample() {
	return (
		<Progress value={56}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "0.5rem",
                    }}
                >
                <ProgressLabel>Upload progress</ProgressLabel>
                <ProgressValue />
            </div>
        </Progress>
	);
}
`}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <H2 id="api-reference">API Reference</H2>
                    <div
                        style={{
                            display: "grid",
                            gap: "2rem",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <H3 id="root-progress">Root</H3>
                            <p>Groups all parts of the progress bar and provides the task completion status to screen readers. Renders a &lt;div&gt; element.</p>
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
                            <AttributeTable>
                                {progressAttributes.map(([name, value], idx) => (
                                    <AttributeRow key={idx} name={name} value={value} />
                                ))}
                            </AttributeTable>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <H3 id="track">Track</H3>
                            <p>Contains the progress bar indicator. Renders a &lt;div&gt; element.</p>
                            <ComponentPropList>
                                {trackerIndicatorLabelProps.map((prop, idx) => (
                                    <ComponentPropRow
                                        key={idx}
                                        propName={prop.propName}
                                        description={prop.description}
                                        type={prop.type || "string"}
                                        defaultValue={prop.defaultValue || null}
                                    />
                                ))}
                            </ComponentPropList>
                            <AttributeTable>
                                {progressAttributes.map(([name, value], idx) => (
                                    <AttributeRow key={idx} name={name} value={value} />
                                ))}
                            </AttributeTable>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <H3 id="indicator">Indicator</H3>
                            <p>Visualizes the completion status of the task. Renders a &lt;div&gt; element.</p>
                            <ComponentPropList>
                                {trackerIndicatorLabelProps.map((prop, idx) => (
                                    <ComponentPropRow
                                        key={idx}
                                        propName={prop.propName}
                                        description={prop.description}
                                        type={prop.type || "string"}
                                        defaultValue={prop.defaultValue || null}
                                    />
                                ))}
                            </ComponentPropList>
                            <AttributeTable>
                                {progressAttributes.map(([name, value], idx) => (
                                    <AttributeRow key={idx} name={name} value={value} />
                                ))}
                            </AttributeTable>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <H3 id="value">Value</H3>
                            <p>A text element displaying the current value. Renders a &lt;span&gt; element.</p>
                            <ComponentPropList>
                                {valueProps.map((prop, idx) => (
                                    <ComponentPropRow
                                        key={idx}
                                        propName={prop.propName}
                                        description={prop.description}
                                        type={prop.type || "string"}
                                        defaultValue={prop.defaultValue || null}
                                    />
                                ))}
                            </ComponentPropList>
                            <AttributeTable>
                                {progressAttributes.map(([name, value], idx) => (
                                    <AttributeRow key={idx} name={name} value={value} />
                                ))}
                            </AttributeTable>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <H3 id="label">Label</H3>
                            <p>An accessible label for the progress bar. Renders a &lt;span&gt; element.</p>
                            <ComponentPropList>
                                {trackerIndicatorLabelProps.map((prop, idx) => (
                                    <ComponentPropRow
                                        key={idx}
                                        propName={prop.propName}
                                        description={prop.description}
                                        type={prop.type || "string"}
                                        defaultValue={prop.defaultValue || null}
                                    />
                                ))}
                            </ComponentPropList>
                            <AttributeTable>
                                {progressAttributes.map(([name, value], idx) => (
                                    <AttributeRow key={idx} name={name} value={value} />
                                ))}
                            </AttributeTable>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
