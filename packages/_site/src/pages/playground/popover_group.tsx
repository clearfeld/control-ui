import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
// import { Label } from '@controlkit/label';
import { Popover, PopoverContent, PopoverTrigger } from "@controlkit/popover";

import { Button } from "@controlkit/button";

const page_styles = stylex.create({
	row: {
		display: "flex",
		flexDirection: "row",
		gap: "1rem",
		flexWrap: "wrap",
	},
});

export default function PopoverGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Popover</H2>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Popover>
						<PopoverTrigger
							style={{
								width: "20rem",
							}}
							asChild
						>
							<Button>Open Top</Button>
						</PopoverTrigger>

						<PopoverContent
							style={{
								width: "20rem",
							}}
							side={"top"}
						>
							<div
								style={{
									border: "0.0625rem solid var(--sidebar-color-bg-hover)",
									backgroundColor: "var(--color-bg-compliment)",
									height: "20rem",
									textAlign: "center",
									borderRadius: "0.25rem",
								}}
							>
								Place content for the popover here.
							</div>
						</PopoverContent>
					</Popover>

					<Popover>
						<PopoverTrigger
							style={{
								width: "20rem",
							}}
							asChild
						>
							<Button>Open Left</Button>
						</PopoverTrigger>

						<PopoverContent
							style={{
								width: "20rem",
							}}
							side={"left"}
						>
							<div
								style={{
									border: "0.0625rem solid var(--sidebar-color-bg-hover)",
									backgroundColor: "var(--color-bg-compliment)",
									height: "20rem",
									textAlign: "center",
									borderRadius: "0.25rem",
								}}
							>
								Place content for the popover here.
							</div>
						</PopoverContent>
					</Popover>

					<Popover>
						<PopoverTrigger
							style={{
								width: "20rem",
							}}
							asChild
						>
							<Button>Open Right</Button>
						</PopoverTrigger>

						<PopoverContent
							style={{
								width: "20rem",
							}}
							side={"right"}
						>
							<div
								style={{
									border: "0.0625rem solid var(--sidebar-color-bg-hover)",
									backgroundColor: "var(--color-bg-compliment)",
									height: "20rem",
									textAlign: "center",
									borderRadius: "0.25rem",
								}}
							>
								Place content for the popover here.
							</div>
						</PopoverContent>
					</Popover>

					<Popover>
						<PopoverTrigger
							style={{
								width: "20rem",
							}}
							asChild
						>
							<Button>Open Bottom</Button>
						</PopoverTrigger>

						<PopoverContent
							style={{
								width: "20rem",
							}}
							side={"bottom"}
						>
							<div
								style={{
									border: "0.0625rem solid var(--sidebar-color-bg-hover)",
									backgroundColor: "var(--color-bg-compliment)",
									height: "20rem",
									textAlign: "center",
									borderRadius: "0.25rem",
								}}
							>
								Place content for the popover here.
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
}
