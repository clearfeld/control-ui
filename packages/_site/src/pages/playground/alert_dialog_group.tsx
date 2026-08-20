import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2, H5 } from "@controlkit/headings";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@controlkit/alert-dialog";
import { Button } from "@controlkit/button";

const page_styles = stylex.create({
	row: {
		gap: "1rem",
		display: "flex",
		flexDirection: "column",
	},
});

export default function AlertDialogGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Alert Dialog</H2>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<AlertDialog>
						<AlertDialogTrigger render={<Button />}>
							Show Dialog
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle render={<H5 />}>
									Are you absolutely sure?
								</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete your
									account and remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									Cancel
								</AlertDialogCancel>
								<AlertDialogAction>
									Continue
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</div>
		</div>
	);
}
