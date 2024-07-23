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
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarSizes,
} from "@controlkit/avatar";

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
        title="Avatar"
        description="An avatar is a visual representation of a user or entity."
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
                    install="pnpm add @controlkit/avatar"
                    npmjs="https://www.npmjs.com/package/@controlkit/avatar"
                    npmTitle="@controlkit/avatar"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/avatar"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div {...stylex.props(avatarPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @controlkit/avatar"
                    npmjs="https://www.npmjs.com/package/@controlkit/avatar"
                    npmTitle="@controlkit/avatar"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/avatar"
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
              description="The default form of a avatar."
            />
            <div {...stylex.props(avatarPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Avatar />
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Avatar } from "@controlkit/Avatar";

const AvatarExample = () => {
	return (
		<Avatar/>
	);
};

export default AvatarExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Initials"
              description={
                "You can provide an inital to avatar by using the AvatarFallback child."
              }
            />
            <div {...stylex.props(avatarPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Avatar, AvatarFallback } from "@controlkit/Avatar";

const AvatarExample = () => {
	return (
		<Avatar>
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
	);
};

export default AvatarExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Image"
              description={
                "You can provide an image to avatar by using the AvatarImage child and provide a src link."
              }
            />
            <div {...stylex.props(avatarPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Avatar>
                  <AvatarImage src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" />
                </Avatar>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Avatar, AvatarImage } from "@controlkit/Avatar";

const AvatarExample = () => {
	return (
		<Avatar>
            <AvatarImage src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" />
        </Avatar>
	);
};

export default AvatarExample;`}
              />
            </div>
          </div>

          <div>
            <ExampleBlock
              title="Sizes"
              description={
                "You can change the size of the avatar by passing our AvatarSizes to the size prop."
              }
            />
            <div {...stylex.props(avatarPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Avatar size={AvatarSizes.LARGE}>
                  <AvatarImage src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" />
                </Avatar>
              </PreviewBlock>

              <CodeBlock
                language="tsx"
                code={`import React, { useState } from 'react';

import { Avatar, AvatarImage, AvatarSizes } from "@controlkit/Avatar";

const AvatarExample = () => {
	return (
		<Avatar size={AvatarSizes.LARGE}>
            <AvatarImage src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" />
        </Avatar>
	);
};

export default AvatarExample;`}
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
