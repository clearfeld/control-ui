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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@controlkit/collapsible";
import { Button } from "@controlkit/button";

export default function CollapsiblePage() {
  const divRef = useRef<HTMLDivElement>(null);
  const componentInfo = componentsList.find(
    (component) => component.title === "Collapsible"
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
                    install="pnpm add @controlkit/collapsible"
                    npmjs="https://www.npmjs.com/package/@controlkit/collapsible"
                    npmTitle="@controlkit/collapsible"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/collapsible"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(styles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-collapsible"
                    npmjs="https://www.npmjs.com/package/@controlkit/collapsible"
                    npmTitle="@radix-ui/react-collapsible"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/collapsible"
                  />
                </div>

                <br />

                <div {...stylex.props(styles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>

                  <CodeBlock
                    language="tsx"
                    url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/collapsible/lib/index.tsx"}
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
              description="The default form of a collapsible."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button>Toggle Content</Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent>Content</CollapsibleContent>
                </Collapsible>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@controlkit/collapsible";
import { Button } from "@controlkit/button";

const CollapsibleExample = () => {

  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button>Toggle Content</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleExample;`}
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
