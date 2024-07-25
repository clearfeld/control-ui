import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Range } from "@controlkit/range";

const page_styles = stylex.create({
	row: {
		display: "grid",
		gap: "1rem",
	},
});

export default function RangeGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Range</H2>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Range defaultValue={[33]} />

					<Range
						defaultValue={[33]}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
