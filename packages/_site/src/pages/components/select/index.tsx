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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@controlkit/select";

export default function SelectPage() {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div
            {...stylex.props(styles.wrapper)}
            ref={divRef}
        >
            <ComponentHero
                title="Select"
                description="Displays a list of options for the user to pick from, triggered by clicking a button."
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
                                        install="pnpm add @controlkit/select"
                                        npmjs="https://www.npmjs.com/package/@controlkit/select"
                                        npmTitle="@controlkit/select"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/select"
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
                                        url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/Select/lib/index.tsx"}
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
                                description="Allows the user to select a single item from a dropdown list of items."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Select>
                                        <SelectTrigger
                                            style={{
                                                width: "18rem",
                                            }}
                                        >
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>

                                        <SelectContent
                                            style={{
                                                width: "18rem",
                                            }}
                                        >
                                            <SelectItem value="est">Apples</SelectItem>
                                            <SelectItem value="est">Bananas</SelectItem>
                                            <SelectItem value="est">Oranges</SelectItem>
                                            <SelectItem value="est">Grapes</SelectItem>
                                            <SelectItem value="est">Blueberries</SelectItem>
                                            <SelectItem value="est">Watermelon</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectGroup,
	SelectLabel,
} from "@controlkit/select";

export default function SelectExample() {
	return (
		<Select>
			<SelectTrigger
				style={{
					width: "18rem",
				}}
			>
				<SelectValue placeholder="Select a timezone" />
			</SelectTrigger>

			<SelectContent
				style={{
					width: "18rem",
				}}
			>
                <SelectItem value="est">Apples</SelectItem>
                <SelectItem value="est">Bananas</SelectItem>
                <SelectItem value="est">Oranges</SelectItem>
                <SelectItem value="est">Grapes</SelectItem>
                <SelectItem value="est">Blueberries</SelectItem>
                <SelectItem value="est">Watermelon</SelectItem>
			</SelectContent>
		</Select>
	);
}
`}
                                />
                            </div>
                        </div>

                        <div>
                            <ExampleBlock
                                title="Grouped options"
                                description="Related options can be grouped together, marked by labels."
                            />
                            <div {...stylex.props(styles.codeWrapper)}>
                                <PreviewBlock>
                                    <Select>
                                        <SelectTrigger
                                            style={{
                                                width: "18rem",
                                            }}
                                        >
                                            <SelectValue placeholder="Select a timezone" />
                                        </SelectTrigger>

                                        <SelectContent
                                            style={{
                                                width: "18rem",
                                            }}
                                        >
                                            <SelectGroup>
                                                <SelectLabel>North America</SelectLabel>
                                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Europe & Africa</SelectLabel>
                                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                                <SelectItem value="west">
                                                    Western European Summer Time (WEST)
                                                </SelectItem>
                                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Asia</SelectLabel>
                                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                                <SelectItem value="ist_indonesia">
                                                    Indonesia Central Standard Time (WITA)
                                                </SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Australia & Pacific</SelectLabel>
                                                <SelectItem value="awst">
                                                    Australian Western Standard Time (AWST)
                                                </SelectItem>
                                                <SelectItem value="acst">
                                                    Australian Central Standard Time (ACST)
                                                </SelectItem>
                                                <SelectItem value="aest">
                                                    Australian Eastern Standard Time (AEST)
                                                </SelectItem>
                                                <SelectItem value="nzst">
                                                    New Zealand Standard Time (NZST)
                                                </SelectItem>
                                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>South America</SelectLabel>
                                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </PreviewBlock>

                                <CodeBlock
                                    language="tsx"
                                    code={`import React from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectGroup,
	SelectLabel,
} from "@controlkit/select";

export default function SelectExample() {
	return (
		<Select>
			<SelectTrigger
				style={{
					width: "18rem",
				}}
			>
				<SelectValue placeholder="Select a timezone" />
			</SelectTrigger>

			<SelectContent
				style={{
					width: "18rem",
				}}
			>
				<SelectGroup>
					<SelectLabel>North America</SelectLabel>
					<SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
					<SelectItem value="cst">Central Standard Time (CST)</SelectItem>
					<SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
					<SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
					<SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
					<SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Europe & Africa</SelectLabel>
					<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
					<SelectItem value="cet">Central European Time (CET)</SelectItem>
					<SelectItem value="eet">Eastern European Time (EET)</SelectItem>
					<SelectItem value="west">
						Western European Summer Time (WEST)
					</SelectItem>
					<SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
					<SelectItem value="eat">East Africa Time (EAT)</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Asia</SelectLabel>
					<SelectItem value="msk">Moscow Time (MSK)</SelectItem>
					<SelectItem value="ist">India Standard Time (IST)</SelectItem>
					<SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
					<SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
					<SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
					<SelectItem value="ist_indonesia">
						Indonesia Central Standard Time (WITA)
					</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Australia & Pacific</SelectLabel>
					<SelectItem value="awst">
						Australian Western Standard Time (AWST)
					</SelectItem>
					<SelectItem value="acst">
						Australian Central Standard Time (ACST)
					</SelectItem>
					<SelectItem value="aest">
						Australian Eastern Standard Time (AEST)
					</SelectItem>
					<SelectItem value="nzst">
						New Zealand Standard Time (NZST)
					</SelectItem>
					<SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>South America</SelectLabel>
					<SelectItem value="art">Argentina Time (ART)</SelectItem>
					<SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
					<SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
					<SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
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
