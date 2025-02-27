import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

import { styles } from "../_layout/styles";
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";
import { componentsList } from "../routes_list_docs_components";

import { Button, ButtonVariants } from "@controlkit/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogClose,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@controlkit/dialog";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";
import { CloseIcon } from "@controlkit/icons";

const comp_styles = stylex.create({
	close: {
		position: "absolute",
		top: "1.5rem",
		right: "1rem",

		padding: "0.25rem",

		transitionProperty: "opacity, background-color",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		opacity: 0.7,

		":hover": {
			opacity: 1,
			backgroundColor: "var(--sheet-close-hover, #333333)",
		},
	},
});

export default function DialogPage() {
	const divRef = useRef<HTMLDivElement>(null);
	const componentInfo = componentsList.find(
		(component) => component.title === "Dialog"
	);

	return (
		<div {...stylex.props(styles.wrapper)} ref={divRef}>
			<ComponentHero
				title={componentInfo?.title}
				description={componentInfo?.description}
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
										install="pnpm add @controlkit/dialog"
										npmjs="https://www.npmjs.com/package/@controlkit/dialog"
										npmTitle="@controlkit/dialog"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/dialog"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Install the following dependencies</H5>
									<ComponentInfo
										install="pnpm add @radix-ui/react-dialog"
										npmjs="https://www.npmjs.com/package/@controlkit/dialog"
										npmTitle="@radix-ui/react-dialog"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/dialog"
									/>
								</div>

								<br />

								<div {...stylex.props(styles.stepBlock)}>
									<H5>
										2. Copy and paste the following code into your project.
									</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/dialog/lib/index.tsx"}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					<H2 id="examples">Examples</H2>
					<Divider />

					<div

					>
						<ExampleBlock
							title="Default"
							description="The default form of a Dialog."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Dialog>
									<DialogTrigger asChild>
										<Button>Edit Profile</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Edit profile</DialogTitle>
											<DialogDescription>
												Make changes to your profile here. Click save when
												you're done.
											</DialogDescription>
											<DialogClose
												// extend={comp_styles.close}
												asChild
											>
												{/* <Button type="submit">Save changes</Button> */}

												<Button
													variant={ButtonVariants.GHOST}
													extend={comp_styles.close}
												>
													<CloseIcon />
												</Button>
											</DialogClose>
										</DialogHeader>
										<div>
											<div>
												<Label htmlFor="name">Name</Label>
												<Input id="name" value="Pedro Duarte" />
											</div>

											<br />

											<div>
												<Label htmlFor="username">Username</Label>

												<Input id="username" value="@peduarte" />
											</div>
										</div>
										<DialogFooter>
											<Button type="submit">Save changes</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</PreviewBlock>

							<CodeBlock

								language="tsx"
								code={`import React, { useState } from 'react';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@controlkit/dialog";
import { Button } from "@controlkit/button";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";
import { CloseIcon } from "@controlkit/icons";

const DialogExample = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
		  <DialogClose>
		    <CloseIcon />
		  </DialogClose>
        </DialogHeader>
        <div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Pedro Duarte" />
          </div>
          <br />
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" value="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogExample;`}
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
