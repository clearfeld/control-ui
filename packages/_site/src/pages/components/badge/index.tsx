import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

import { Badge, BadgeVariants } from "@controlkit/badge";
import { componentsList } from "../routes_list_docs_components";

import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";

export default function BadgePage() {
  const divRef = useRef<HTMLDivElement>(null);

  const badgeInfo = componentsList.find(
    (component) => component.title === "Badge"
  );
  return (
    <div
      {...stylex.props(styles.wrapper)}
      ref={divRef}
    >
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
                    install="pnpm add @controlkit/badge"
                    npmjs="https://www.npmjs.com/package/@controlkit/badge"
                    npmTitle="@controlkit/badge"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/badge"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(styles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @controlkit/badge"
                    npmjs="https://www.npmjs.com/package/@controlkit/badge"
                    npmTitle="@controlkit/badge"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/badge"
                  />
                </div>

                <br />

                <div {...stylex.props(styles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>
                  <CodeBlock
                    language="tsx"
                    url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/badge/lib/index.tsx"}
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
              description="The default form of a badge."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Badge number={10} />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Badge } from "@controlkit/badge";

const BadgeExample = () => {
	return (
		<Badge number={10} />
	);
};

export default BadgeExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Max number"
              description="A maxmimum number can be provided with the 𝘮𝘢𝘹 prop."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Badge number={100} max={10} />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Badge } from "@controlkit/badge";

const BadgeExample = () => {
	return (
		<Badge number={100} max={10} />
	);
};

export default BadgeExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Primary"
              description="The primary form of a badge can be used by providing a 𝘉𝘢𝘥𝘨𝘦𝘝𝘢𝘳𝘪𝘢𝘯𝘵 to the 𝘷𝘢𝘳𝘪𝘢𝘯𝘵 prop."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Badge number={100} max={10} variant={BadgeVariants.PRIMARY} />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Badge, BadgeVariants } from "@controlkit/badge";

const BadgeExample = () => {
	return (
		<Badge number={100} max={10} variant={BadgeVariants.PRIMARY} />
	);
};

export default BadgeExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Important"
              description="The important form of a badge can be used by providing a 𝘉𝘢𝘥𝘨𝘦𝘝𝘢𝘳𝘪𝘢𝘯𝘵 to the 𝘷𝘢𝘳𝘪𝘢𝘯𝘵 prop."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Badge
                  number={100}
                  max={10}
                  variant={BadgeVariants.IMPORTANT}
                />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Badge, BadgeVariants } from "@controlkit/badge";

const BadgeExample = () => {
	return (
		<Badge number={100} max={10} variant={BadgeVariants.IMPORTANT} />
	);
};

export default BadgeExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Added"
              description="The added form of a badge can be used by providing a 𝘉𝘢𝘥𝘨𝘦𝘝𝘢𝘳𝘪𝘢𝘯𝘵 to the 𝘷𝘢𝘳𝘪𝘢𝘯𝘵 prop."
            />
            <div {...stylex.props(styles.codeWrapper)}>
              <PreviewBlock>
                <Badge number={100} max={10} variant={BadgeVariants.ADDED} />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Badge, BadgeVariants } from "@controlkit/badge";

const BadgeExample = () => {
	return (
		<Badge number={100} max={10} variant={BadgeVariants.ADDED} />
	);
};

export default BadgeExample;`}
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
