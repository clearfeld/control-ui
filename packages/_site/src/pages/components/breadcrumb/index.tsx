import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import { Button, ButtonVariants } from "@controlkit/button";
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
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@controlkit/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@controlkit/dropdown-menu";

export default function BreadcrumbPageZ() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Breadcrumb"
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
										install="pnpm add @controlkit/breadcrumb"
										npmjs="https://www.npmjs.com/package/@controlkit/breadcrumb"
										npmTitle="@controlkit/breadcrumb"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/breadcrumb"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-slot"
										npmjs="https://www.npmjs.com/package/@controlkit/button"
										npmTitle="@radix-ui/react-slot"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
									<H5>2. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/button/lib/index.tsx"}
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
								description="The default form of a button. Used when performing an action that will modifiy data or save new data."
							/>
							<div {...stylex.props(styles.codeWrapper)}>
								<PreviewBlock>
									<Breadcrumb>
										<BreadcrumbList>
											<BreadcrumbItem>
												<BreadcrumbLink href="#">Home</BreadcrumbLink>
											</BreadcrumbItem>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<div>
															<BreadcrumbEllipsis />
														</div>
														{/* <span className="sr-only">Toggle menu</span> */}
													</DropdownMenuTrigger>
													<DropdownMenuContent align="start">
														<DropdownMenuItem>Documentation</DropdownMenuItem>
														<DropdownMenuItem>Themes</DropdownMenuItem>
														<DropdownMenuItem>GitHub</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</BreadcrumbItem>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<BreadcrumbLink href="#">Components</BreadcrumbLink>
											</BreadcrumbItem>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
											</BreadcrumbItem>
										</BreadcrumbList>
									</Breadcrumb>
								</PreviewBlock>

								<CodeBlock
									language="tsx"
									code={`import React from 'react';

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@controlkit/breadcrumb";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@controlkit/dropdown-menu";

export default function BreadcrumbExample() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div>
								<BreadcrumbEllipsis />
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem>Documentation</DropdownMenuItem>
							<DropdownMenuItem>Themes</DropdownMenuItem>
							<DropdownMenuItem>GitHub</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
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
