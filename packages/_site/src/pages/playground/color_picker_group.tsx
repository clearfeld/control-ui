import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

import { ColorPickerHexAlpha } from "@controlkit/color-picker";
import "@controlkit/color-picker/dist/style.css";

import { useState } from "react";

const page_styles = stylex.create({
	row: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
});

export default function ColorPickerGroup() {
	const [color, setColor] = useState<string>("#aabbcc");

	return (
		<div {...stylex.props(styles.group)}>
			<H2>Color Picker</H2>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<ColorPickerHexAlpha
						color={color}
						setColor={setColor}
					/>
				</div>
			</div>
		</div>
	);
}
