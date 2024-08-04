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
import { styles } from "../_layout/styles";
import { useRef } from "react";
import ContentsSidebar from "../commons/contents_sidebar";

export default function AlertDialogPage() {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...stylex.props(styles.wrapper)}
      ref={divRef}
    >
      <ComponentHero
        title="Alert Dialog"
        description="Alert Dialogs communicate messages that provide additional context, important information, or help to users."
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
                    install="pnpm add @controlkit/alert-dialog"
                    npmjs="https://www.npmjs.com/package/@controlkit/alert-dialog"
                    npmTitle="@controlkit/alert-dialog"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/alert-dialog"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(styles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-alert-dialog"
                    npmjs="https://www.npmjs.com/package/@controlkit/avatar"
                    npmTitle="@radix-ui/react-alert-dialog"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/avatar"
                  />
                </div>

                <br />

                <div {...stylex.props(styles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>

                  <CodeBlock
                    language="tsx"
                    url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/alert_dialog/lib/index.tsx"}
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
              description="The default form of a avatar."
            />
            <div {...stylex.props(styles.codeWrapper)}>
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

      </div>
    </div>
  );
}
