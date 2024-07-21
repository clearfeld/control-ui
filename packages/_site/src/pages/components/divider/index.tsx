import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";

const buttonPageStyles = stylex.create({
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
        padding: "1rem",
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
        padding: "1rem",
    },
});

export default function DividerPage() {
    return (
        <div {...stylex.props(buttonPageStyles.wrapper)}>
            <ComponentHero
                title="Divider"
                description="A divider is used to separate sections."
            />

            <div {...stylex.props(buttonPageStyles.threeColumnLayout)}>
                {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          scroller
        </div> */}

                <div {...stylex.props(buttonPageStyles.middleColumn)}>
                    <div>
                        <ExampleBlock
                            title="Default"
                            description="The default form of a divider."
                        />
                        <div {...stylex.props(buttonPageStyles.codeWrapper)}>
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

                <ComponentInfo
                    install="pnpm add @controlkit/divider"
                    npmjs="https://www.npmjs.com/package/@controlkit/divider"
                    npmTitle="@controlkit/divider"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/divider"
                />
                {/* <div style={{ backgroundColor: "red", width: "fit-content" }}>
          help info
        </div> */}

            </div>
        </div>
    );
}
