import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

// import { Badge, BadgeVariants } from "@controlkit/badge";
import { componentsList } from "../routes_list_docs_components";

import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";
import { Input } from "@controlkit/input";

export default function InputPage() {
  const divRef = useRef<HTMLDivElement>(null);

  const badgeInfo = componentsList.find(
    (component) => component.title === "Input"
  );
  return (
    <div {...stylex.props(styles.wrapper)} ref={divRef}>
      <ComponentHero
        title={badgeInfo?.title}
        description={badgeInfo?.description}
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
                    install="pnpm add @controlkit/input"
                    npmjs="https://www.npmjs.com/package/@controlkit/input"
                    npmTitle="@controlkit/input"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/input"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(styles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @controlkit/input"
                    npmjs="https://www.npmjs.com/package/@controlkit/input"
                    npmTitle="@controlkit/input"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/input"
                  />
                </div>

                <br />

                <div {...stylex.props(styles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>
                  <CodeBlock
                    language="tsx"
                    url={
                      "https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/input/lib/index.tsx"
                    }
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
              description="The default form of a input."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Input placeholder="placeholder" />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Input } from "@controlkit/input";

const InputExample = () => {
	return (
		<Input placeholder="placeholder" />
	);
};

export default InputExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Password"
              description="The input component can accept any type a normal input tag would."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Input
                  placeholder="Please enter your password"
                  type="password"
                />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Input } from "@controlkit/input";

const InputExample = () => {
	return (
			<Input
				placeholder="Please enter your password"
				type="password"
			/>
	);
};

export default InputExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Disabled"
              description="The input can be disabled to prevent user interaction."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Input placeholder="placeholder" disabled />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Input } from "@controlkit/input";

const InputExample = () => {
	return (
		<Input placeholder="placeholder" disabled />
	);
};

export default InputExample;`}
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
