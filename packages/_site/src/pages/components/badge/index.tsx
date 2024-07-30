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
                    code={`"use client";

import * as stylex from "@stylexjs/stylex";
import { type HTMLAttributes, forwardRef } from "react";

type ExtendProps = { extend?: stylex.StyleXStyles };

enum BadgeVariants {
	DEFAULT = "default",
	PRIMARY = "primary",
	IMPORTANT = "important",
	ADDED = "added",
}

const styles = stylex.create({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "0.25rem",
		overflow: "hidden",
		fontWeight: "bold",

		height: "1rem",
		minWidth: "1rem",
		width: "fit-content",
		fontSize: "0.75rem",
		padding: "0.125rem 0.375rem",
	},

	[BadgeVariants.DEFAULT]: {
		color: "var(--badge-default-text, #90adbb)",
		backgroundColor: "var(--badge-default-background, #292d33)",
	},

	[BadgeVariants.PRIMARY]: {
		color: "var(--badge-primary-text, #8db8fb)",
		backgroundColor: "var(--badge-primary-background, #1e2b40)",
	},

	[BadgeVariants.IMPORTANT]: {
		color: "var(--badge-important-text, #f29d92)",
		backgroundColor: "var(--badge-important-background, #3e241f)",
	},

	[BadgeVariants.ADDED]: {
		color: "var(--badge-added-text, #93dfbb)",
		backgroundColor: "var(--badge-added-background, #213d31)",
	},
});

interface I_BadgeProps {
	number: number;
	variant?: BadgeVariants;
	max?: number;
}

function GetDisplayValue(number: number, max: number | undefined): string {
	if (max && number > max) {
		return \`\${max} +\`;
	}

	return \`\${number}\`;
}

const Badge = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ExtendProps & I_BadgeProps>(
	({ className, extend, variant = BadgeVariants.DEFAULT, ...props }, ref) => (
		<div
			ref={ref}
			className={className}
			{...stylex.props(
				styles.base,
				styles[variant],
				extend
			)}
			{...props}
		>
			{props.number && GetDisplayValue(props.number, props.max)}
		</div>
	),
);
Badge.displayName = "Badge";

export {
	BadgeVariants,
	Badge,
};`}
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
