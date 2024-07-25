import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Label } from "@controlkit/label";
import { Button, ButtonVariants } from "@controlkit/button";

export default function ButtonGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Button</H2>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Create</Label>

				<Button>Create</Button>

				<Button disabled>Create</Button>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Action</Label>

				<Button variant={ButtonVariants.ACTION}>Action</Button>

				<Button
					variant={ButtonVariants.ACTION}
					disabled
				>
					Action
				</Button>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Danger</Label>

				<Button variant={ButtonVariants.DANGER}>Danger</Button>

				<Button
					variant={ButtonVariants.DANGER}
					disabled
				>
					Danger
				</Button>
			</div>

			<div {...stylex.props(styles.row, styles.btn_row)}>
				<Label htmlFor="">Ghost</Label>

				<Button variant={ButtonVariants.GHOST}>Ghost</Button>

				<Button
					variant={ButtonVariants.GHOST}
					disabled
				>
					Ghost
				</Button>
			</div>
		</div>
	);
}
