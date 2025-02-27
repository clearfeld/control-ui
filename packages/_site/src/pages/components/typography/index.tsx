import ComponentHero from "../commons/component-hero";
import stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H1, H2, H3, H4, H5, H6 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";

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

export default function Typography() {
    return (
        <div {...stylex.props(aspectRatioPageStyles.wrapper)}>
            <ComponentHero
                title="Typography"
                description="Styles for headings, paragraphs, lists...etc"
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
                                        install="pnpm add @controlkit/headings"
                                        npmjs="https://www.npmjs.com/package/@controlkit/headings"
                                        npmTitle="@controlkit/headings"
                                        source="https://github.com/clearfeld/control-ui/tree/main/packages/headings"
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="tab-2">
                                {/* <div {...stylex.props(aspectRatioPageStyles.stepBlock)}>
                  <H5>1. Install the following dependencies</H5>
                  <ComponentInfo
                    install="pnpm add @radix-ui/react-aspect-ratio"
                    npmjs="https://www.npmjs.com/package/@controlkit/aspect-ratio"
                    npmTitle="@radix-ui/react-aspect-ratio"
                    source="https://github.com/clearfeld/control-ui/tree/main/packages/aspect-ratio"
                  />
                </div> */}

                                <br />

                                <div {...stylex.props(aspectRatioPageStyles.stepBlock)}>
                                    <H5>
                                        Copy and paste the following code into your project.
                                    </H5>

                                    <CodeBlock
                                        language="tsx"
                                        code={""}
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <H2>Examples</H2>
                    <Divider />

                    <div>
                        <ExampleBlock
                            title="H1"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H1>Title</H1>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H1 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H1>Title</H1>
	);
};`}
                            />
                        </div>
                    </div>

                    <div>
                        <ExampleBlock
                            title="H2"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H2>Title</H2>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H2 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H2>Title</H2>
	);
};`}
                            />
                        </div>
                    </div>


                    <div>
                        <ExampleBlock
                            title="H3"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H3>Title</H3>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H3 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H3>Title</H3>
	);
};`}
                            />
                        </div>
                    </div>


                    <div>
                        <ExampleBlock
                            title="H4"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H4>Title</H4>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H4 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H4>Title</H4>
	);
};`}
                            />
                        </div>
                    </div>


                    <div>
                        <ExampleBlock
                            title="H5"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H5>Title</H5>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H5 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H5>Title</H5>
	);
};`}
                            />
                        </div>
                    </div>


                    <div>
                        <ExampleBlock
                            title="H6"
                            description=""
                        />
                        <div {...stylex.props(aspectRatioPageStyles.codeWrapper)}>
                            <PreviewBlock>
                                <H6>Title</H6>
                            </PreviewBlock>

                            <CodeBlock
                                language="tsx"
                                code={`import { H6 } from "@controlkit/headings";

export default const HeadingExample = () => {
	return (
        <H6>Title</H6>
	);
};`}
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
