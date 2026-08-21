import * as stylex from "@stylexjs/stylex";
// import InstallationBlock from "../commons/installation-block";
import { H2, H6 } from "@controlkit/headings";

import { Link } from "@controlkit/link";
import { ArrowRight } from "@controlkit/icons";
import DesignTokens from "@assets/design-tokens.png";

const tokenPageStyles = stylex.create({
	wrapper: {
		margin: "2rem",
		placeItems: "center",
		display: "grid",
		rowGap: "2rem",
	},
	section: {
		display: "grid",
		rowGap: "1rem",
		maxWidth: "54rem",
		width: "100%",
	},

	tiles: {
		gap: "2rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))"
	},

	linkContainer: {
        borderColor: "var(--border-color)",
        borderRadius: "1rem",
        borderStyle: "solid",
		textDecoration: "none",
		transition: "background-color var(--transition-speed) ease",
		backgroundColor: {
			":hover": "var(--color-bg-compliment)",
		},
		color: "var(--text-color)",
        borderBottomWidth: "0.0625rem",
        borderLeftWidth: "0.0625rem",
        borderRightWidth: "0.0625rem",
        borderTopWidth: "0.0625rem",
	},
	paragraph: {
		verticalAlign: "top",
	},
	iconGrid: {
		padding: "1rem",
		display: "grid",
	  	gridTemplateColumns: "1fr max-content",
		gridTemplateRows: "min-content",
		rowGap: "0.25rem",
		verticalAlign: "top",
	},
	imageTile: {
		display: "grid",
		width: "100%"
	},
	imageTileText: {
		padding: "1rem",
	},
	imgWrapper: {
		textAlign: "center",
		width: "100%",
	},
	img: {
		maxWidth: "30%",
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
						<span {...stylex.props(tokenPageStyles.paragraph)}>About design tokens and how they are used in the design system.</span>
					</Link>

					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Use tokens in code</H6>
						<ArrowRight />
						<span {...stylex.props(tokenPageStyles.paragraph)}>Learn how to set up and use design tokens in code.</span>
					</Link>

					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Use tokens in design</H6>
						<ArrowRight />
						<span {...stylex.props(tokenPageStyles.paragraph)}>Design using tokens in Figma and preview colors and tokens in apps.</span>
					</Link>

					<Link href="" {...stylex.props(tokenPageStyles.linkContainer, tokenPageStyles.iconGrid)}>
						<H6>Migrate to tokens</H6>
						<ArrowRight />
						<span {...stylex.props(tokenPageStyles.paragraph)}>How apps and teams move from old style values to design tokens.</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
