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
import { useRef, useState } from "react";
import ContentsSidebar from "../commons/contents_sidebar";
import { Checkbox } from "@controlkit/checkbox";
import { componentsList } from "../routes_list_docs_components";

export default function CheckboxPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const checkboxInfo = componentsList.find(
    (component) => component.title === "Checkbox"
  );

  const [isChecked, setIsChecked] = useState(false);
  return (
    <div {...stylex.props(styles.wrapper)} ref={divRef}>
      <ComponentHero
        title={checkboxInfo?.title}
        description={checkboxInfo?.description}
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
                    install="pnpm add @controlkit/checkbox"
                    npmjs="https://www.npmjs.com/package/@controlkit/checkbox"
                    npmTitle="@controlkit/checkbox"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/checkbox"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(styles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-checkbox"
                    npmjs="https://www.npmjs.com/package/@controlkit/avatar"
                    npmTitle="@radix-ui/react-checkbox"
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
                    url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/checkbox/lib/index.tsx"}
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
              description="The default form of a checkbox."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Checkbox
                  checked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
                />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Checkbox } from "@controlkit/checkbox";

const CheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);
	return (
		<Checkbox
			checked={isChecked}
			onClick={() => setIsChecked(!isChecked)}
		/>
	);
};

export default CheckboxExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Disabled"
              description="The checkbox can be disabled by providing the disabled prop."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Checkbox
                  checked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
                  disabled
                />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Checkbox } from "@controlkit/checkbox";

const CheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);
	return (
		<Checkbox
			checked={isChecked}
			onClick={() => setIsChecked(!isChecked)}
            disabled
		/>
	);
};

export default CheckboxExample;`}
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
