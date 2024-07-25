import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

import { AspectRatio } from "@controlkit/aspect-ratio";

const aspectRatioPageStyles = stylex.create({
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

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "0.5rem",
  },
});

export default function AspectRatioPage() {
  return (
    <div {...stylex.props(aspectRatioPageStyles.wrapper)}>
      <ComponentHero
        title="Aspect Ratio"
        description="Displays content within a desired ratio."
      />

      <div {...stylex.props(aspectRatioPageStyles.threeColumnLayout)}>
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

        <div {...stylex.props(aspectRatioPageStyles.middleColumn)}>
          <H2>Installation</H2>
          <Divider />
          <div>
            <Tabs defaultValue="tab-1">
              <TabsList>
                <TabsTrigger value="tab-1">Automatic</TabsTrigger>
                <TabsTrigger value="tab-2">Manual</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                <div {...stylex.props(aspectRatioPageStyles.blockWrapper)}>
                  <ComponentInfo
                    install="pnpm add @controlkit/aspect-ratio"
                    npmjs="https://www.npmjs.com/package/@controlkit/aspect-ratio"
                    npmTitle="@controlkit/aspect-ratio"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/aspect-ratio"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(aspectRatioPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-aspect-ratio"
                    npmjs="https://www.npmjs.com/package/@controlkit/aspect-ratio"
                    npmTitle="@radix-ui/react-aspect-ratio"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/aspect-ratio"
                  />
                </div>

                <br />

                <div {...stylex.props(aspectRatioPageStyles.stepBlock)}>
                  <H5>
                    2. Copy and paste the following code into your project.
                  </H5>

                  <CodeBlock
                    language="tsx"
                    code={`"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
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
              title="16:9 Ratio"
              description="Ratios can be set by the 𝘳𝘢𝘵𝘪𝘰 prop"
            />
            <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
              <PreviewBlock>
                <AspectRatio ratio={16 / 9}>
                  <img
                    {...stylex.props(aspectRatioPageStyles.img)}
                    src={
                      "https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
                    }
                    alt=""
                  />
                </AspectRatio>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { AspectRatio } from "@controlkit/aspect-ratio";

const AspectRatioExample = () => {
	return (
		<AspectRatio ratio={16 / 9}>
			<img
				{...stylex.props(aspectRatioPageStyles.img)}
				src={
					"https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
				}
				alt=""
			/>
		</AspectRatio>
	);
};

export default AspectRatioExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="4:3 Ratio"
              description="Ratios can be set by the 𝘳𝘢𝘵𝘪𝘰 prop"
            />
            <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
              <PreviewBlock>
                <AspectRatio ratio={4 / 3}>
                  <img
                    {...stylex.props(aspectRatioPageStyles.img)}
                    src={
                      "https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
                    }
                    alt=""
                  />
                </AspectRatio>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { AspectRatio } from "@controlkit/aspect-ratio";

const AspectRatioExample = () => {
	return (
		<AspectRatio ratio={4 / 3}>
			<img
				{...stylex.props(aspectRatioPageStyles.img)}
				src={
					"https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
				}
				alt=""
			/>
		</AspectRatio>
	);
};

export default AspectRatioExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="1:1 Ratio"
              description="Ratios can be set by the 𝘳𝘢𝘵𝘪𝘰 prop"
            />
            <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
              <PreviewBlock>
                <AspectRatio ratio={1 / 1}>
                  <img
                    {...stylex.props(aspectRatioPageStyles.img)}
                    src={
                      "https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
                    }
                    alt=""
                  />
                </AspectRatio>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { AspectRatio } from "@controlkit/aspect-ratio";

const AspectRatioExample = () => {
	return (
		<AspectRatio ratio={1 / 1}>
			<img
				{...stylex.props(aspectRatioPageStyles.img)}
				src={
					"https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
				}
				alt=""
			/>
		</AspectRatio>
	);
};

export default AspectRatioExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="2:1 Ratio"
              description="Ratios can be set by the 𝘳𝘢𝘵𝘪𝘰 prop"
            />
            <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
              <PreviewBlock>
                <AspectRatio ratio={2 / 1}>
                  <img
                    {...stylex.props(aspectRatioPageStyles.img)}
                    src={
                      "https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
                    }
                    alt=""
                  />
                </AspectRatio>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { AspectRatio } from "@controlkit/aspect-ratio";

const AspectRatioExample = () => {
	return (
		<AspectRatio ratio={2 / 1}>
			<img
				{...stylex.props(aspectRatioPageStyles.img)}
				src={
					"https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=2000"
				}
				alt=""
			/>
		</AspectRatio>
	);
};

export default AspectRatioExample;`}
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
