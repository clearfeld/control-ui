import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";
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
				description="A popover is a button that displays content in one of four directions; right, left, top, bottom."
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
									<H5>1. Copy and paste the following code into your project.</H5>

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
						<ExampleBlock
							title="Top"
							description="Button that displays content to the top."
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
								code={`import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";
import { Button } from "@controlkit/button";

export default function CardGroup() {
	return (
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
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="Left"
							description="Button that displays content to the left."
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
								code={`import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";
import { Button } from "@controlkit/button";

export default function CardGroup() {
	return (
		<Popover>
			<PopoverTrigger
				style={{
					width: "20rem",
				}}
				asChild
			>
				<Button>Open left</Button>
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
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="Right"
							description="Button that displays content to the right."
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
								code={`import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";
import { Button } from "@controlkit/button";

export default function CardGroup() {
	return (
		<Popover>
			<PopoverTrigger
				style={{
					width: "20rem",
				}}
				asChild
			>
				<Button>Open right</Button>
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
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="Bottom"
							description="Button that displays content to the bottom."
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
								code={`import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";
import { Button } from "@controlkit/button";

export default function CardGroup() {
	return (
		<Popover>
			<PopoverTrigger
				style={{
					width: "20rem",
				}}
				asChild
			>
				<Button>Open bottom</Button>
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
	);
}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
