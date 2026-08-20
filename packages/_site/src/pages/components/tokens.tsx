import * as stylex from "@stylexjs/stylex";
// import InstallationBlock from "../commons/installation-block";
import { H2, H6 } from "@controlkit/headings";

import { Link } from "@controlkit/link";
import { ArrowRight } from "@controlkit/icons";
import DesignTokens from "@assets/design-tokens.png";

const tokenPageStyles = stylex.create({
	wrapper: {
		padding: "2rem",
		display: "grid",
		rowGap: "2rem",
		width: "100%",
		placeItems: "center"
	},
	section: {
		display: "grid",
		rowGap: "1rem",
		maxWidth: "54rem",
		width: "100%",
	},

	padding: {
		paddingBottom: "1rem",
	},

	tiles: {
		display: "grid",
	  	gridTemplateColumns: "1fr 1fr 1fr",
		gap: "0.5rem",
	},

	linkContainer: {
        borderColor: "var(--border-color)",
        borderRadius: "1rem",
        borderStyle: "solid",
        borderBottomWidth: "0.0625rem",
        borderLeftWidth: "0.0625rem",
        borderRightWidth: "0.0625rem",
        borderTopWidth: "0.0625rem",
		":hover": {
			backgroundColor: "var(--color-bg-compliment)",
		},
		textDecoration: "none",
		color: "var(--text-color)",
	},
	iconGrid: {
		padding: "1rem",
		display: "grid",
	  	gridTemplateColumns: "1fr max-content",
		rowGap: "0.25rem",
	},
	imageTile: {
		display: "grid",
		width: "100%"
	},
	imageTileText: {
		padding: "1rem",
	},
	imgWrapper: {
		width: "100%",
		textAlign: "center"
	},
	img: {
		maxWidth: "30%",
		borderTopRightRadius: "0.5rem",
	},
});

export default function Tokens() {
	return (
		<div {...stylex.props(tokenPageStyles.wrapper)}>
			<div {...stylex.props(tokenPageStyles.section)}>
				<H2>Design token library</H2>
				<div {...stylex.props(tokenPageStyles.imageTile)}>
					<Link href="" {...stylex.props(tokenPageStyles.linkContainer)}>
						<div {...stylex.props(tokenPageStyles.imgWrapper)}>
							<img
								{...stylex.props(tokenPageStyles.img)}
								src={
								DesignTokens
								}
								alt="design-token"
							/>
						</div>
						<div {...stylex.props(tokenPageStyles.imageTileText)}>
							<H6>Design tokens explained</H6>
							About design tokens and how they are used in the design system.
						</div>
					</Link>
				</div>
			</div>

			<div {...stylex.props(tokenPageStyles.section)}>
				<H2>Tokens in code and design</H2>
				<div {...stylex.props(tokenPageStyles.tiles)}>
					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Design tokens explained</H6>
						<ArrowRight />
						About design tokens and how they are used in the design system.
					</Link>
					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Use tokens in code</H6>
						<ArrowRight />
						Learn how to set up and use design tokens in code.
					</Link>
					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Use tokens in design</H6>
						<ArrowRight />
						Design using tokens in Figma and preview colors and tokens in apps.
					</Link>
					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Migrate to tokens</H6>
						<ArrowRight />
						How apps and teams move from old style values to design tokens.
					</Link>
				</div>
			</div>
		</div>
	);
}
