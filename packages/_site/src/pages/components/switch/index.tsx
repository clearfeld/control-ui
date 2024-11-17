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

import { Switch,
         SwitchSizes
} from "@controlkit/switch";
import { useState } from "react";

export default function SwitchPage() {
    const divRef = useRef<HTMLDivElement>(null);
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);
	const [switchCheckedMed, setSwitchCheckedMed] = useState<boolean>(false);
	const [switchCheckedLarge, setSwitchCheckedLarge] = useState<boolean>(false);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Switch"
                description="A switch is a control used to toggle between enabled or disabled states."
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
                                        install="pnpm add @controlkit/switch"
                                        npmjs="https://www.npmjs.com/package/@controlkit/switch"
                                        npmTitle="@controlkit/switch"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/switch"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/sheet/lib/index.tsx"}
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
                                description="Default form of the switch."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Switch
                                        checked={switchChecked}
                                        onCheckedChange={(e) => {
                                            setSwitchChecked(e);
                                        }}
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React, { useState } from 'react';

import { Switch } from "@controlkit/switch";

export default function SwitchExample() {
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
		<Switch
			checked={switchChecked}
			onCheckedChange={(e) => {
				setSwitchChecked(e);
			}}
		/>
	);
}
`}
                                />
                            </div>
                        </div>
                        <div>
                            <ExampleBlock
                                title="Medium"
                                description="For more important actions, set size to medium."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Switch
                                        checked={switchCheckedMed}
                                        onCheckedChange={(e) => {
                                            setSwitchCheckedMed(e);
                                        }}
                                        size={SwitchSizes.MEDIUM}
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React, { useState } from 'react';

import { Switch, SwitchSizes } from "@controlkit/switch";

export default function SwitchExample() {
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
		<Switch
			checked={switchChecked}
			onCheckedChange={(e) => {
				setSwitchChecked(e);
			}}
            size={SwitchSizes.MEDIUM}
		/>
	);
}
`}
                                />
                            </div>
                        </div>
                        <div>
                            <ExampleBlock
                                title="Large"
                                description="For important actions that need attention, set size to large."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Switch
                                        checked={switchCheckedLarge}
                                        onCheckedChange={(e) => {
                                            setSwitchCheckedLarge(e);
                                        }}
                                        size={SwitchSizes.LARGE}
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React, { useState } from 'react';

import { Switch, SwitchSizes } from "@controlkit/switch";

export default function SwitchExample() {
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
		<Switch
			checked={switchChecked}
			onCheckedChange={(e) => {
				setSwitchChecked(e);
			}}
            size={SwitchSizes.LARGE}
		/>
	);
}
`}
                                />
                            </div>
                        </div>
                        <div>
                            <ExampleBlock
                                title="Disabled"
                                description="When the switch selection has no need to be changable, set the state to disabled."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Switch
                                        checked={false}
                                        onCheckedChange={(e) => {
                                            setSwitchChecked(e);
                                        }}
                                        disabled
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React, { useState } from 'react';

import { Switch } from "@controlkit/switch";

export default function SwitchExample() {
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
		<Switch
			checked={switchChecked}
			onCheckedChange={(e) => {
				setSwitchChecked(e);
			}}
            disabled
		/>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Toggled and Disabled"
                                description="Disabled switches can also be toggled on."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Switch
                                        checked={true}
                                        onCheckedChange={(e) => {
                                            setSwitchChecked(e);
                                        }}
                                        disabled
                                    />
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React, { useState } from 'react';

import { Switch } from "@controlkit/switch";

export default function SwitchExample() {
	const [switchChecked, setSwitchChecked] = useState<boolean>(false);

    return (
		<Switch
			checked={switchChecked}
			onCheckedChange={(e) => {
				setSwitchChecked(e);
			}}
		/>
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
