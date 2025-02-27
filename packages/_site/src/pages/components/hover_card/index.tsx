import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@controlkit/hover-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@controlkit/avatar";
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";
import { styles } from "../_layout/styles";

export default function HoverCardPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Hover Card"
				description="Hover card. Mouse over to reveal the hover card's content."
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
										install="pnpm add @controlkit/hover-card"
										npmjs="https://www.npmjs.com/package/@controlkit/hover-card"
										npmTitle="@controlkit/hover-card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/hover-card"
									/>
								</div>
							</TabsContent>

							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-hover-card"
										npmjs="https://www.npmjs.com/package/@controlkit/hover-card"
										npmTitle="@radix-ui/react-hover-card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/hover-card"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/hover_card/lib/index.tsx"}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2 id="examples">Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="Hover Card with Avatar component"
							description="Hover card using the Avatar component as the hover element. Mouse over to reveal the hover card's content."
						/>

						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<HoverCard>
									<HoverCardTrigger asChild>
										<Avatar>
											<AvatarImage src="https://github.com/vercel.png" />
											<AvatarFallback>VC</AvatarFallback>
										</Avatar>
									</HoverCardTrigger>

									<HoverCardContent>
										<div>
											<Avatar>
												<AvatarImage src="https://github.com/vercel.png" />
												<AvatarFallback>VC</AvatarFallback>
											</Avatar>
											<div>
												<h4>@nextjs</h4>
												<p>The React Framework – created and maintained by @vercel.</p>
												<div>
													{/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
													<span>Joined December 2021</span>
												</div>
											</div>
										</div>
									</HoverCardContent>
								</HoverCard>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from "@controlkit/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@controlkit/hover-card";

export default function HoverCardExample() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Avatar>
					<AvatarImage src="https://github.com/vercel.png" />
					<AvatarFallback>VC</AvatarFallback>
				</Avatar>
			</HoverCardTrigger>
			<HoverCardContent>
				<div>
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div>
						<h4>@nextjs</h4>
						<p>The React Framework – created and maintained by @vercel.</p>
						<div>
							<span>Joined December 2021</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}`}
							/>
						</div>
					</div>
				</div>

				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          help info
        </div> */}
			</div>
		</div>
	);
}
