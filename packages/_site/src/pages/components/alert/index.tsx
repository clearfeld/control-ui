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
  Alert,
  AlertVariants,
  AlertIconDefault,
  AlertTitle,
  AlertDescription,
  AlertIconDanger,
  AlertIconSuccess,
  AlertIconWarning,
} from "@controlkit/alert";

const alertPageStyles = stylex.create({
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

export default function AlertPage() {
  return (
    <div {...stylex.props(alertPageStyles.wrapper)}>
      <ComponentHero
        title="Alert"
        description="Alerts communicate messages that provide additional context, important information, or help to users."
      />

      <div {...stylex.props(alertPageStyles.threeColumnLayout)}>
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

        <div {...stylex.props(alertPageStyles.middleColumn)}>
          <H2>Installation</H2>
          <Divider />
          <div>
            <Tabs defaultValue="tab-1">
              <TabsList>
                <TabsTrigger value="tab-1">Automatic</TabsTrigger>
                <TabsTrigger value="tab-2">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                <div {...stylex.props(alertPageStyles.blockWrapper)}>
                  <ComponentInfo
                    install="pnpm add @controlkit/alert"
                    npmjs="https://www.npmjs.com/package/@controlkit/alert"
                    npmTitle="@controlkit/alert"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/alert"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(alertPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-separator"
                    npmjs="https://www.npmjs.com/package/@controlkit/alert"
                    npmTitle="@radix-ui/react-separator"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/alert"
                  />
                </div>

                <br />

                <div {...stylex.props(alertPageStyles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>

                  <CodeBlock language="tsx" code={""} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <H2>Examples</H2>
          <Divider />

          {/* default */}
          <div>
            <ExampleBlock
              title="Default"
              description="The default form of a alert."
            />
            <div {...stylex.props(alertPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Alert variant={AlertVariants.DEFAULT}>
                  <AlertIconDefault />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React from 'react';

import {
  Alert,
  AlertVariants,
  AlertIconDefault,
  AlertTitle,
  AlertDescription,
} from "@controlkit/alert";

export default function AlertExample() {
	return (
            <Alert variant={AlertVariants.DEFAULT}>
              <AlertIconDefault />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
	);
}`}
              />
            </div>
          </div>
          {/* danger */}
          <div>
            <ExampleBlock
              title="Danger"
              description="The danger form of a alert."
            />
            <div {...stylex.props(alertPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Alert variant={AlertVariants.DANGER}>
                  <AlertIconDanger />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React from 'react';

import {
  Alert,
  AlertVariants,
  AlertIconDanger,
  AlertTitle,
  AlertDescription,
} from "@controlkit/alert";

export default function AlertExample() {
	return (
            <Alert variant={AlertVariants.DANGER}>
              <AlertIconDanger />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
	);
}`}
              />
            </div>
          </div>
          {/* success */}
          <div>
            <ExampleBlock
              title="Success"
              description="The success form of a alert."
            />
            <div {...stylex.props(alertPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Alert variant={AlertVariants.SUCCESS}>
                  <AlertIconSuccess />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React from 'react';

import {
  Alert,
  AlertVariants,
  AlertIconSuccess,
  AlertTitle,
  AlertDescription,
} from "@controlkit/alert";

export default function AlertExample() {
	return (
            <Alert variant={AlertVariants.SUCCESS}>
              <AlertIconSuccess />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
	);
}`}
              />
            </div>
          </div>
          {/* warning */}
          <div>
            <ExampleBlock
              title="Warning"
              description="The warning form of a alert."
            />
            <div {...stylex.props(alertPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Alert variant={AlertVariants.WARNING}>
                  <AlertIconWarning />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React from 'react';

import {
  Alert,
  AlertVariants,
  AlertIconWarning,
  AlertTitle,
  AlertDescription,
} from "@controlkit/alert";

export default function AlertExample() {
	return (
            <Alert variant={AlertVariants.WARNING}>
              <AlertIconWarning />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
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
