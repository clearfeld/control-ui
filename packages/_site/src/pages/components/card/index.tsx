import ComponentHero from "../commons/component-hero";
import * as stylex from "@stylexjs/stylex";
import ExampleBlock from "../commons/example-block";
import CodeBlock from "../commons/code-block";
import { PreviewBlock } from "../commons/preview_block";
import ComponentInfo from "../commons/component-info";
import { Divider } from "@controlkit/divider";
import { H2, H5 } from "@controlkit/headings";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@controlkit/tabs";
import { useRef } from "react";
import { styles } from "../_layout/styles";
import ContentsSidebar from "../commons/contents_sidebar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";
import { Button } from "@controlkit/button";


const customStyle = stylex.create({
	card: {
		maxWidth: "400px",
		padding: "1rem",
		flexDirection: "column",
		display: "flex",
		gap: "1rem",
		border: "1px solid var(--border-color)",
		borderRadius: "var(--border-radius)",
	},

	cardImage: {
		width: "100%",
		height: "auto"
	}
})
export default function CardPage() {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...stylex.props(styles.wrapper)}
			ref={divRef}
		>
			<ComponentHero
				title="Card"
				description="A card is a block of content neatly divided into Title, Content, Footer."
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
										install="pnpm add @controlkit/card"
										npmjs="https://www.npmjs.com/package/@controlkit/card"
										npmTitle="@controlkit/card"
										source="https://github.com/clearfeld/control-ui/tree/main/packages/card"
									/>
								</div>
							</TabsContent>
							<TabsContent value="tab-2">
								<div {...stylex.props(styles.stepBlock)}>
									<H5>1. Copy and paste the following code into your project.</H5>

									<CodeBlock
										language="tsx"
										url={"https://raw.githubusercontent.com/clearfeld/control-ui/main/packages/card/lib/index.tsx"}
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
							description="Default card with basic <p> elements in each section."
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Card>
									<CardHeader>
										<CardTitle>Card Title</CardTitle>
										<CardDescription>Card Description</CardDescription>
									</CardHeader>
									<CardContent>
										<p>Card Content</p>
									</CardContent>
									<CardFooter>
										<p>Card Footer</p>
									</CardFooter>
								</Card>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";

export default function CardGroup() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="Extend styles"
							description="A card with extended styles"
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Card extend={customStyle.card}>
									<CardHeader>
										<CardTitle>Cute Corgi</CardTitle>
										<CardDescription>Picture of a cute corgi</CardDescription>
									</CardHeader>
									<CardContent >
										<img {...stylex.props(customStyle.cardImage)} src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" alt="corgi dog" />
									</CardContent>
									<CardFooter>
										<Button>❤️ Like</Button>
									</CardFooter>
								</Card>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";
import { Button } from "@controlkit/button";
import * as stylex from "@stylexjs/stylex";

const customStyle = stylex.create({
	card: {
		maxWidth: "400px",
		padding: "1rem",
		flexDirection: "column",
		display: "flex",
		gap: "1rem",
		border: "1px solid var(--border-color)",
		borderRadius: "var(--border-radius)",
	},

	cardImage: {
		width: "100%",
		height: "auto",
	},
});

export default function CardGroup() {
	return (
		<Card extend={customStyle.card}>
			<CardHeader>
				<CardTitle>Cute Corgi</CardTitle>
				<CardDescription>Picture of a cute corgi</CardDescription>
			</CardHeader>
			<CardContent>
				<img
					{...stylex.props(customStyle.cardImage)}
					src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg"
					alt="corgi dog"
				/>
			</CardContent>
			<CardFooter>
				<Button>❤️ Like</Button>
			</CardFooter>
		</Card>
	);
}`}
							/>
						</div>
					</div>

					<div>
						<ExampleBlock
							title="Custom theming"
							description="Use stylex custom theme objects for easy styling"
						/>
						<div {...stylex.props(styles.codeWrapper)}>
							<PreviewBlock>
								<Card extend={customStyle.card}>
									<CardHeader>
										<CardTitle>Cute Corgi</CardTitle>
										<CardDescription>Picture of a cute corgi</CardDescription>
									</CardHeader>
									<CardContent >
										<img {...stylex.props(customStyle.cardImage)} src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg" alt="corgi dog" />
									</CardContent>
									<CardFooter>
										<Button>❤️ Like</Button>
									</CardFooter>
								</Card>
							</PreviewBlock>

							<CodeBlock
								language="tsx"
								code={`import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@controlkit/card";
import { Button } from "@controlkit/button";
import * as stylex from "@stylexjs/stylex";

const customStyle = stylex.create({
	card: {
		maxWidth: "400px",
		padding: "1rem",
		flexDirection: "column",
		display: "flex",
		gap: "1rem",
		border: "1px solid var(--border-color)",
		borderRadius: "var(--border-radius)",
	},

	cardImage: {
		width: "100%",
		height: "auto",
	},
});

export default function CardGroup() {
	return (
		<Card extend={customStyle.card}>
			<CardHeader>
				<CardTitle>Cute Corgi</CardTitle>
				<CardDescription>Picture of a cute corgi</CardDescription>
			</CardHeader>
			<CardContent>
				<img
					{...stylex.props(customStyle.cardImage)}
					src="https://i.pinimg.com/originals/54/68/46/5468462853ea7dde8a82220461c13f14.jpg"
					alt="corgi dog"
				/>
			</CardContent>
			<CardFooter>
				<Button>❤️ Like</Button>
			</CardFooter>
		</Card>
	);
}`}
							/>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
