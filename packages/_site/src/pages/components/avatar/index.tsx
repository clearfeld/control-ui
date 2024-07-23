import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

const avatarPageStyles = stylex.create({
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
    padding: "1rem",
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

export default function AvatarPage() {
  return (
    <div {...stylex.props(avatarPageStyles.wrapper)}>
      <ComponentHero
        title="Divider"
        description="A divider is used to separate sections."
      />

      <div {...stylex.props(avatarPageStyles.threeColumnLayout)}>
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

        <div {...stylex.props(avatarPageStyles.middleColumn)}>
          <H2>Installation</H2>
          <Divider />
          <div>
            <Tabs defaultValue="tab-1">
              <TabsList>
                <TabsTrigger value="tab-1">Automatic</TabsTrigger>
                <TabsTrigger value="tab-2">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                <div {...stylex.props(avatarPageStyles.blockWrapper)}>
                  <ComponentInfo
                    install="pnpm add @controlkit/button"
                    npmjs="https://www.npmjs.com/package/@controlkit/button"
                    npmTitle="@controlkit/button"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/button"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(avatarPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @controlkit/divider"
                    npmjs="https://www.npmjs.com/package/@controlkit/divider"
                    npmTitle="@controlkit/divider"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
                  />
                </div>
                <div {...stylex.props(avatarPageStyles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <H2>Examples</H2>
          <Divider />
          <div>
            <ExampleBlock
              title="Default"
              description="The default form of a divider."
            />
            <div {...stylex.props(avatarPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Divider />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React from 'react';

import { Divider } from "@controlkit/divider";

export default function DividerExample() {
	return (
		<Divider />
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
