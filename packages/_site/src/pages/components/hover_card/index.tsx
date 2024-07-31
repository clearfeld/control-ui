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

const hoverCardPageStyles = stylex.create({
	wrapper: {
		width: "100%",
		height: "100%",
		padding: "2rem",
		boxSizing: "border-box",
	},

	threeColumnLayout: {
		display: "flex",
	},

	middleColumn: {
		width: "100%",
		height: "100%",
		//padding: "1rem",
		marginTop: "2rem",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
	},

	codeWrapper: {
		// border: "1px solid var(--border-100)",
		borderRadius: "var(--border-radius)",
		backgroundColor: "#121212",
		// padding: "1rem",
		boxSizing: "border-box",
	},

	blockWrapper: {
		marginTop: "1rem",
	},

	stepBlock: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
});

export default function HoverCardPage() {
	return (
		<div {...stylex.props(hoverCardPageStyles.wrapper)}>
			<ComponentHero
				title="Hover Card"
				description="Hover Card description"
			/>

			<div {...stylex.props(hoverCardPageStyles.threeColumnLayout)}>
				{/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

				<div {...stylex.props(hoverCardPageStyles.middleColumn)}>
					<H2>Installation</H2>
					<Divider />
					<div>
						<Tabs defaultValue="tab-1">
							<TabsList>
								<TabsTrigger value="tab-1">Automatic</TabsTrigger>
								<TabsTrigger value="tab-2">Manual</TabsTrigger>
							</TabsList>
							<TabsContent value="tab-1">
								<div {...stylex.props(hoverCardPageStyles.blockWrapper)}>
									<ComponentInfo
										install="pnpm add @controlkit/hover-card"
										npmjs="https://www.npmjs.com/package/@controlkit/hover-card"
										npmTitle="@controlkit/hover-card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/hover-card"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(hoverCardPageStyles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-hover-card"
										npmjs="https://www.npmjs.com/package/@controlkit/hover-card"
										npmTitle="@radix-ui/react-hover-card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/hover-card"
									/>
								</div>

								<br />

								<div {...stylex.props(hoverCardPageStyles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										code={`"use client";

import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';6
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const styles = stylex.create({
  base: {
    zIndex: 100,
    padding: "1rem",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    outlineStyle: "none",
    width: "16rem",
    backgroundColor: "var(--hover-card-background, #121212)"
  }
});
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = forwardRef(({ className, extend, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className,
    ...stylex.props(styles.base, extend),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };`}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2>Examples</H2>
					<Divider />
					<div>
						<ExampleBlock
							title="Hover Card with Avatar component"
							description="Hover card using the Avatar component as the hover element. Mouse over to reveal the hover card's content."
						/>
						<div {...stylex.props(hoverCardPageStyles.codeWrapper)}>
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
							{/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
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
