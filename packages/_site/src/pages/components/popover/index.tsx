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

import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

export default function PopoverPage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Popover"
                description="Displays rich content in a portal, triggered by a button."
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
                                        install="pnpm add @controlkit/popover"
                                        npmjs="https://www.npmjs.com/package/@controlkit/popover"
                                        npmTitle="@controlkit/popover"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/popover"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/popover/lib/index.tsx"}
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
                                title="Open Top"
                                description="Displays content to the top of the Trigger element."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Popover>
                                        <PopoverTrigger
                                            style={{
                                                width: "20rem",
                                            }}
                                            asChild
                                        >
                                            <Button>Open Top</Button>
                                        </PopoverTrigger>

                                        <PopoverContent
                                            style={{
                                                width: "20rem",
                                            }}
                                            side={"top"}
                                        >
                                            <div
                                                style={{
                                                    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
                                                    backgroundColor: "var(--color-bg-compliment)",
                                                    height: "20rem",
                                                    textAlign: "center",
                                                    borderRadius: "0.25rem",
                                                }}
                                            >
                                                Place content for the popover here.
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

export default function PopoverExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open Top</Button>
			</PopoverTrigger>

			<PopoverContent
			    side={"top"}
			>
				<div
					style={{
					    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
						backgroundColor: "var(--color-bg-compliment)",
						height: "20rem",
						textAlign: "center",
						borderRadius: "0.25rem",
					}}
				>
					Place content for the popover here.
				</div>
			</PopoverContent>
		</Popover>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Open Left"
                                description="Displays content to the left of the Trigger element."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Popover>
                                        <PopoverTrigger
                                            style={{
                                                width: "20rem",
                                            }}
                                            asChild
                                        >
                                            <Button>Open Left</Button>
                                        </PopoverTrigger>

                                        <PopoverContent
                                            style={{
                                                width: "20rem",
                                            }}
                                            side={"left"}
                                        >
                                            <div
                                                style={{
                                                    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
                                                    backgroundColor: "var(--color-bg-compliment)",
                                                    height: "20rem",
                                                    textAlign: "center",
                                                    borderRadius: "0.25rem",
                                                }}
                                            >
                                                Place content for the popover here.
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

export default function PopoverExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open Left</Button>
			</PopoverTrigger>

			<PopoverContent
			    side={"left"}
			>
				<div
					style={{
					    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
						backgroundColor: "var(--color-bg-compliment)",
						height: "20rem",
						textAlign: "center",
						borderRadius: "0.25rem",
					}}
				>
					Place content for the popover here.
				</div>
			</PopoverContent>
		</Popover>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Open Right"
                                description="Displays content to the right of the Trigger element."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Popover>
                                        <PopoverTrigger
                                            style={{
                                                width: "20rem",
                                            }}
                                            asChild
                                        >
                                            <Button>Open Right</Button>
                                        </PopoverTrigger>

                                        <PopoverContent
                                            style={{
                                                width: "20rem",
                                            }}
                                            side={"right"}
                                        >
                                            <div
                                                style={{
                                                    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
                                                    backgroundColor: "var(--color-bg-compliment)",
                                                    height: "20rem",
                                                    textAlign: "center",
                                                    borderRadius: "0.25rem",
                                                }}
                                            >
                                                Place content for the popover here.
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

export default function PopoverExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open Right</Button>
			</PopoverTrigger>

			<PopoverContent
			    side={"right"}
			>
				<div
					style={{
					    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
						backgroundColor: "var(--color-bg-compliment)",
						height: "20rem",
						textAlign: "center",
						borderRadius: "0.25rem",
					}}
				>
					Place content for the popover here.
				</div>
			</PopoverContent>
		</Popover>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Open Bottom"
                                description="Displays content to the bottom of the Trigger element."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Popover>
                                        <PopoverTrigger
                                            style={{
                                                width: "20rem",
                                            }}
                                            asChild
                                        >
                                            <Button>Open Bottom</Button>
                                        </PopoverTrigger>

                                        <PopoverContent
                                            style={{
                                                width: "20rem",
                                            }}
                                            side={"bottom"}
                                        >
                                            <div
                                                style={{
                                                    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
                                                    backgroundColor: "var(--color-bg-compliment)",
                                                    height: "20rem",
                                                    textAlign: "center",
                                                    borderRadius: "0.25rem",
                                                }}
                                            >
                                                Place content for the popover here.
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

export default function PopoverExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open Bottom</Button>
			</PopoverTrigger>

			<PopoverContent
			    side={"bottom"}
			>
				<div
					style={{
					    border: "0.0625rem solid var(--sidebar-color-bg-hover)",
						backgroundColor: "var(--color-bg-compliment)",
						height: "20rem",
						textAlign: "center",
						borderRadius: "0.25rem",
					}}
				>
					Place content for the popover here.
				</div>
			</PopoverContent>
		</Popover>
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
