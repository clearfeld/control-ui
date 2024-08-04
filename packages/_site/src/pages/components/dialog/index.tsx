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

import { Button } from "@controlkit/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@controlkit/dialog";
import { Input } from "@controlkit/input";
import { Label } from "@controlkit/label";

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
                    code={`"use client";

import { type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type ExtendProps = { extend?: stylex.StyleXStyles };
type CloseExtendProps = { closeExtend?: stylex.StyleXStyles };

const styles = stylex.create({
	overlay: {
		position: "fixed",
		top: "0",
		right: "0",
		bottom: "0",
		left: "0",
		zIndex: 100,
		backgroundColor: "var(--sheet-overlay, #00000088)",
	},

	content: {
		padding: 0,
		display: "grid",
		position: "fixed",
		zIndex: 100,
		gap: "1rem",
		borderWidth: "1px",
		width: "100%",
		maxWidth: "32rem",
		boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",

		top: "25%",
		// left: "calc(50%)",
		insetArea: "center",
		margin: "0 auto",
		boxSizing: "border-box",

		transitionProperty:
			"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
		transitionTimingFunction: ["cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.4, 0, 0.2, 1)"],
		transitionDuration: "var(--transition-speed, 0.2s)",
		backgroundColor: "var(--sheet-bg, #121212)",

		"@media (min-width: 640px)": {
			borderRadius: "0.25rem",
		},
	},

	header: {
		display: "flex",
		marginTop: "0.5rem",
		flexDirection: "column",
		textAlign: "center",
		"@media (min-width: 640px)": {
			textAlign: "left",
		},
	},

	footer: {
		display: "flex",
		flexDirection: "column-reverse",
		"@media (min-width: 640px)": {
			marginLeft: "0.5rem",
			flexDirection: "row",
			justifyContent: "flex-end",
		},
	},

	title: {
		fontSize: "1.125rem",
		lineHeight: "1.75rem",
		fontWeight: 600,
	},

	description: {
		fontSize: "0.875rem",
		lineHeight: "1.25rem",
	},

	action_btn: {
		padding: 0,
		margin: 0,
		marginLeft: "1rem",
		outline: "none",
		border: "none",
		background: "none",
	},

	close: {
		backgroundColor: "transparent",
		color: "var(--color-text, #FCFCFC)",
		border: "none",
		outline: "none",
		cursor: "pointer",
		position: "absolute",
		top: "1.5rem",
		right: "1.5rem",
		borderRadius: "0.25rem",
		transitionProperty: "opacity background-color",
		transitionTimingFunction: "ease",
		transitionDuration: "var(--transition-speed, 0.2s)",
		opacity: 0.7,
		padding: "0.25rem 0.25rem",
		display: "flex",

		":hover": {
			opacity: 1,
			backgroundColor: "var(--sheet-close-hover, #333333)",
		},
	},
});

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef<
	ElementRef<typeof DialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={className}
		{...stylex.props(styles.overlay, extend)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & ExtendProps & CloseExtendProps
>(({ className, extend, closeExtend, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={className}
			{...stylex.props(styles.content, extend)}
			{...props}
		>
			{children}

			<DialogPrimitive.Close {...stylex.props(styles.close, closeExtend)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="var(--text-color)"
					width={"1.25rem"}
					height={"1.25rem"}
				>
					<title>Close</title>
					<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
				</svg>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
	className,
	extend,
	...props
}: HTMLAttributes<HTMLDivElement> & ExtendProps) => (
	<div
		className={className}
		{...stylex.props(styles.header, extend)}
		{...props}
	/>
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
	className,
	extend,
	...props
}: HTMLAttributes<HTMLDivElement> & ExtendProps) => (
	<div
		className={className}
		{...stylex.props(styles.footer, extend)}
		{...props}
	/>
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
	ElementRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={className}
		{...stylex.props(styles.title, extend)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
	ElementRef<typeof DialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & ExtendProps
>(({ className, extend, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={className}
		{...stylex.props(styles.description, extend)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <H2 id="examples">Examples</H2>
          <Divider />

          <div>
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
