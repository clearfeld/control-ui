import ComponentHero from "../commons/component-hero";
import { buttonPageStyles } from "./styles";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import { Button, ButtonVariants } from "@controlkit/button";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";

export default function ButtonPage() {
  return (
    <div {...stylex.props(buttonPageStyles.wrapper)}>
      <ComponentHero
        title="Button"
        description="A button triggers an event or action. They let users know what will happen next."
      />

      <div {...stylex.props(buttonPageStyles.threeColumnLayout)}>
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

        <div {...stylex.props(buttonPageStyles.middleColumn)}>
          <div>
            <ExampleBlock
              title="Default"
              description="The default form of a button. Used when performing an action defaults to the primary color."
            />
            <div {...stylex.props(buttonPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Button>Button</Button>
              </PreviewBlock>

              <CodeBlock
                language="typescript"
                code={`import React from 'react';

import { Button } from "@controlkit/button";

const ButtonExample = () => {
	return (
		<Button>
			Button
		</Button>
	);
};

export default ButtonExample;`}
              />
            </div>
          </div>
          <div>
            <ExampleBlock
              title="Full width"
              description="Buttons can be expanded to full width to fill its parent container."
            />
            <div {...stylex.props(buttonPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Button fullWidth>Button</Button>
              </PreviewBlock>

              <CodeBlock
                language="typescript"
                code={`import React from 'react';

import { Button } from "@controlkit/button";

const ButtonExample = () => {
	return (
		<Button
			fullWidth
		>
			Button
		</Button>
	);
};

export default ButtonExample;`}
              />
            </div>
          </div>
          <div>
            <ExampleBlock
              title="Danger"
              description="The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals."
            />
            <div {...stylex.props(buttonPageStyles.codeWrapper)}>
              <PreviewBlock>
                <Button variant={ButtonVariants.DANGER}>Button</Button>
              </PreviewBlock>

              <CodeBlock
                language="typescript"
                code={`import React from 'react';

import { Button, ButtonVariants } from "@controlkit/button";

const ButtonExample = () => {
	return (
		<Button
			variant={ButtonVariants.DANGER}
		>
			Button
		</Button>
	);
};

export default ButtonExample;`}
              />
            </div>
          </div>
        </div>
        <ComponentInfo
          install="pnpm add @controlkit/button"
          npmjs="https://www.npmjs.com/package/@controlkit/button"
          npmTitle="@controlkit/button"
          source="https://github.com/Control-Design-System/react-button"
        />
        {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          help info
        </div> */}
      </div>
    </div>
  );
}
