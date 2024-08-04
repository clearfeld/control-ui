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
                    code={`"use client";

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import { CheckIcon } from "@radix-ui/react-icons";

type ExtendProps = { extend?: stylex.StyleXStyles };

const styles = stylex.create({
	root: {
		shrink: "0",
		borderRadius: "0.25rem",
		border: "0.0625rem solid var(--checkbox-border-color, #006699)",
		width: "1.25rem",
		height: "1.25rem",
		cursor: "pointer",
		transition: "background-color 0.1s ease-in",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "var(--checkbox-inactive-background, #FCFCFC)",

		":hover": {
			backgroundColor: "var(--checkbox-hover-background, #90bed5)",
		},

		':is([data-state="checked"])': {
			backgroundColor: "var(--checkbox-background, #006699)",

			":hover": {
				backgroundColor: "var(--checkbox-hover-background, #0088cc) !important",
			},
		},
	},

	disabled: {
		// pointerEvents: "",
		cursor: "not-allowed",
		opacity: "0.75",

		":hover": {
			backgroundColor: "var(--checkbox-inactive-background, #FCFCFC)",
		},

		':is([data-state="checked"])': {
			":hover": {
				backgroundColor: "var(--checkbox-background, #006699)",
			},
		},
	},

	indicator: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "currentColor",
	},

	// TODO: size variants
	// xsmall {
	//     height: "0.25rem",
	//     width: "0.25rem",
	//   }

	//   small {
	//     height: "0.5rem",
	//     width: "0.5rem",
	//   }

	//   medium {
	//     height: "0.75rem",
	//     width: "0.75rem",
	//   }

	//   large {
	//     height: "1rem",
	//     width: "1rem",
	//   }
});

const Checkbox = forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & ExtendProps
>(({ extend, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		{...stylex.props(styles.root, props.disabled && styles.disabled, extend)}
		{...props}
	>
		<CheckboxPrimitive.Indicator {...stylex.props(styles.indicator)}>
			{/* <CheckIcon className="h-4 w-4" /> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 16 16"
				fill="none"
			>
				<title>Checkmark</title>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.29744 13.2131L0.292893 8.2546C-0.0976311 7.86082 -0.0976311 7.22236 0.292893 6.82857C0.683418 6.43478 1.31658 6.43478 1.70711 6.82857L6.00068 11.0535L14.2889 2.79534C14.6794 2.40155 15.3126 2.40155 15.7031 2.79534C16.0936 3.18913 16.0936 3.82759 15.7031 4.22138L6.69941 13.2085C6.31158 13.5954 5.68777 13.5974 5.29744 13.2131Z"
					fill="white"
				/>
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
`}
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
