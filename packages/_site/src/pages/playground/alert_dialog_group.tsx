import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2, H5 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';

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
import { Button, ButtonVariants } from "@controlkit/button";

const page_styles = stylex.create({
	row: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
});

export default function AlertDialogGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Alert Dialog</H2>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button>Show Dialog</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle asChild>
									<H5>Are you absolutely sure?</H5>
								</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete your
									account and remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									<Button variant={ButtonVariants.ACTION}>Cancel</Button>
								</AlertDialogCancel>
								<AlertDialogAction>
									<Button>Continue</Button>
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</div>
		</div>
	);
}
