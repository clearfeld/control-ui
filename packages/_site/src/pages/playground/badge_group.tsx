import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Label } from "@controlkit/label";
import { Badge, BadgeVariants } from "@controlkit/badge";

export default function BadgesGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Badges</H2>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Default</Label>

				<Badge number={100} />

				<Badge
					number={100}
					max={50}
				/>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Primary</Label>

				<Badge
					number={100}
					variant={BadgeVariants.PRIMARY}
				/>

				<Badge
					number={100}
					max={50}
					variant={BadgeVariants.PRIMARY}
				/>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Important</Label>

				<Badge
					number={100}
					variant={BadgeVariants.IMPORTANT}
				/>

				<Badge
					number={100}
					max={50}
					variant={BadgeVariants.IMPORTANT}
				/>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Added</Label>

				<Badge
					number={100}
					variant={BadgeVariants.ADDED}
				/>

				<Badge
					number={100}
					max={50}
					variant={BadgeVariants.ADDED}
				/>
			</div>
		</div>
	);
}
