import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@controlkit/alert-dialog";
import { Button, ButtonVariants } from "@controlkit/button";

const alertDialogPageStyles = stylex.create({
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

export default function AlertDialogPage() {
  return (
    <div {...stylex.props(alertDialogPageStyles.wrapper)}>
      <ComponentHero
        title="Alert Dialog"
        description="Alert Dialogs communicate messages that provide additional context, important information, or help to users."
      />

      <div {...stylex.props(alertDialogPageStyles.threeColumnLayout)}>
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

        <div {...stylex.props(alertDialogPageStyles.middleColumn)}>
          <H2>Installation</H2>
          <Divider />
          <div>
            <Tabs defaultValue="tab-1">
              <TabsList>
                <TabsTrigger value="tab-1">Automatic</TabsTrigger>
                <TabsTrigger value="tab-2">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                <div {...stylex.props(alertDialogPageStyles.blockWrapper)}>
                  <ComponentInfo
                    install="pnpm add @controlkit/alert-dialog"
                    npmjs="https://www.npmjs.com/package/@controlkit/alert-dialog"
                    npmTitle="@controlkit/alert-dialog"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/alert-dialog"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(alertDialogPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-alert-dialog"
                    npmjs="https://www.npmjs.com/package/@controlkit/avatar"
                    npmTitle="@radix-ui/react-alert-dialog"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/avatar"
                  />
                </div>

                <br />

                <div {...stylex.props(alertDialogPageStyles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>

                  <CodeBlock
                    language="tsx"
                    code={`"use client";

import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from "react";
import * as stylex from '@stylexjs/stylex';
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
// import { buttonVariants } from "@controlkit/button";

type ExtendProps = { extend?: stylex.StyleXStyles };

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
        display: "grid",
        position: "fixed",
        zIndex: 100,
        padding: "1.5rem",
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

        transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transitionTimingFunction: ["cubic-bezier(0.4, 0, 0.2, 1)", "cubic-bezier(0.4, 0, 0.2, 1)"],
        transitionDuration: "var(--transition-speed, 0.2s)",
        backgroundColor: "var(--sheet-bg, #121212)",

        "@media (min-width: 640px)": {
            borderRadius: "0.5rem",
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

    cancel_btn: {
        padding: 0,
        margin: 0,
        outline: "none",
        border: "none",
        background: "none",
    },
});

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        className={className}
        {...stylex.props(styles.overlay, extend)}
        {...props}
        ref={ref}
    />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={className}
            {...stylex.props(styles.content, extend)}
            {...props}
        />
    </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
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
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
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
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Title>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={className}
        {...stylex.props(styles.title, extend)}
        {...props}
    />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Description>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={className}
        {...stylex.props(styles.description, extend)}
        {...props}
    />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Action>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={className}
        {...stylex.props(styles.action_btn, extend)}
        {...props}
    />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = forwardRef<
    ElementRef<typeof AlertDialogPrimitive.Cancel>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & ExtendProps
>(({ className, extend, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={className}
        {...stylex.props(styles.cancel_btn, extend)}
        {...props}
    />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};

`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <H2>Examples</H2>
          <Divider />
          <div>
            <ExampleBlock
              title="Default"
              description="The default form of a avatar."
            />
            <div {...stylex.props(alertDialogPageStyles.codeWrapper)}>
              <PreviewBlock>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Show Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>
                        <Button variant={ButtonVariants.ACTION}>Cancel</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction>
                        <Button variant={ButtonVariants.DANGER}>
                          Continue
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@controlkit/alert-dialog";
import { Button, ButtonVariants } from "@controlkit/button";

const AlertDialogExample = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Show Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>
						<Button variant={ButtonVariants.ACTION}>Cancel</Button>
					</AlertDialogCancel>
					<AlertDialogAction>
						<Button variant={ButtonVariants.DANGER}>
							Continue
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertDialogExample;`}
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
