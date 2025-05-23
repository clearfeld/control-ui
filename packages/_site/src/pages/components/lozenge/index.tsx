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
import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengePage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Lozenge"
                description="A lozenge is a visual indicator used to highlight an item's status for quick recognition."
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
                                        install="pnpm add @controlkit/lozenge"
                                        npmjs="https://www.npmjs.com/package/@controlkit/lozenge"
                                        npmTitle="@controlkit/lozenge"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/lozenge"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/lozenge/lib/index.tsx"}
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
                                description="Default Lozenge element."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.DEFAULT}
                                    >
                                        Default
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.DEFAULT}
        >
            Default
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Default Bold"
                                description="Default Lozenge element, boldened."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.DEFAULT}
                                        isBold={true}
                                    >
                                        Default Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.DEFAULT}
            isBold={true}
        >
            Default Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Success"
                                description="Green Lozenged element, indicated success."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.SUCCESS}
                                    >
                                        Success
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.SUCCESS}
        >
            Success
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Success Bold"
                                description="Green Lozenged element, indicated success, boldened."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.SUCCESS}
                                        isBold={true}
                                    >
                                        Success Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.SUCCESS}
            isBold={true}
        >
            Success Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Removed"
                                description="Red Lozenged element, indicated removal."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.REMOVED}
                                    >
                                        Removed
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.REMOVED}
        >
            Removed
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Removed Bold"
                                description="Red Lozenged element, indicated removal, boldened."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.REMOVED}
                                        isBold={true}
                                    >
                                        Removed Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.REMOVED}
            isBold={true}
        >
            Removed Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="In Progress"
                                description="Blue Lozenged element, indicating In Progress."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.IN_PROGRESS}
                                    >
                                        In Progress
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.IN_PROGRESS}
        >
            In Progress
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="In Progress Bold"
                                description="Blue Lozenged element, indicating In Progress."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.IN_PROGRESS}
                                        isBold={true}
                                    >
                                        In Progress Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.IN_PROGRESS}
            isBold={true}
        >
            In Progress Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="New"
                                description="Purple Lozenged element, indicating new entity."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.NEW}
                                    >
                                        New
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.NEW}
        >
            New
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="New Bold"
                                description="Purple Lozenged element, indicating new entity."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.NEW}
                                        isBold={true}
                                    >
                                        New Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.NEW}
            isBold={true}
        >
            New Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Moved"
                                description="Yellow Lozenged element, indicating moved entity."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.MOVED}
                                    >
                                        Moved
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.MOVED}
        >
            Moved
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Moved Bold"
                                description="Yellow Lozenged element, indicating moved entity."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.MOVED}
                                        isBold={true}
                                    >
                                        Moved Bold
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.MOVED}
            isBold={true}
        >
            Moved Bold
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Default Max Width Overflow"
                                description="Default max width overflow set to 200."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.DEFAULT}
                                    >
                                        Default Max Width Overflow
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.DEFAULT}
        >
            Default Max Width Overflow
        </Lozenge>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Max Width Overflow Set"
                                description="Element with set max width overflow."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Lozenge
                                        variant={LozengeVariants.DEFAULT}
                                        maxWidth={100}
                                    >
                                        MAX WIDTH OVERFLOW SET TO 100
                                    </Lozenge>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Lozenge, LozengeVariants } from "@controlkit/lozenge";

export default function LozengeExample() {
	return (
        <Lozenge
            variant={LozengeVariants.DEFAULT}
            maxWidth={100}
        >
            MAX WIDTH OVERFLOW SET TO 100
        </Lozenge>
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
