import * as stylex from "@stylexjs/stylex";

import styles from "./common_styles";

import { H2 } from "@controlkit/headings";
import { Label } from "@controlkit/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@controlkit/tabs";
import { Avatar, AvatarImage, AvatarFallback, AvatarSizes } from "@controlkit/avatar";

const page_styles = stylex.create({
	row: {
		display: "flex",
		gap: "1rem",
		alignItems: "center",
	},

	box: {
		width: "300px",
	},

	img: {
		objectFit: "cover",
		width: "100%",
		height: "100%",
		borderRadius: "0.5rem",
	},

	label: {
		width: "4rem",
		color: "var(--text-sub-color)",
	},
});

const profile_pic = "https://github.com/clearfeld.png";

export default function AvatarGroup() {
	return (
		<div {...stylex.props(styles.group)}>
			<H2>Avatar</H2>

			<br />

			<Tabs defaultValue="theme-colors">
				<TabsList
				// style={{
				//     width: "auto"
				// }}
				>
					<TabsTrigger value="theme-colors">Theme Colors</TabsTrigger>
					<TabsTrigger value="all-sizes">All Sizes</TabsTrigger>
				</TabsList>

				<TabsContent value="theme-colors">
					<ThemeColors />
				</TabsContent>
				<TabsContent value="all-sizes">
					<AllSizes />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function ThemeColors() {
	return (
		<div>
			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Avatar>
						<AvatarImage src={profile_pic} />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar>
						<AvatarImage src="" />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar>
						<AvatarImage src="" />
						<AvatarFallback>M</AvatarFallback>
					</Avatar>

					{/* TODO(clearfeld): do one with a svg profile icon
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
             */}
				</div>
			</div>
		</div>
	);
}

function AllSizes() {
	return (
		<div>
			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Label extend={page_styles.label}>Small</Label>

					<Avatar size={AvatarSizes.SMALL}>
						<AvatarImage src={profile_pic} />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.SMALL}>
						<AvatarImage src="" />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.SMALL}>
						<AvatarImage src="" />
						<AvatarFallback>M</AvatarFallback>
					</Avatar>

					{/* TODO(clearfeld): do one with a svg profile icon
            <Avatar size={AvatarSizes.SMALL}>
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
             */}
				</div>
			</div>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Label extend={page_styles.label}>Medium</Label>

					<Avatar>
						<AvatarImage src={profile_pic} />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar>
						<AvatarImage src="" />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar>
						<AvatarImage src="" />
						<AvatarFallback>M</AvatarFallback>
					</Avatar>

					{/* TODO(clearfeld): do one with a svg profile icon
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
             */}
				</div>
			</div>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Label extend={page_styles.label}>Large</Label>

					<Avatar size={AvatarSizes.LARGE}>
						<AvatarImage src={profile_pic} />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.LARGE}>
						<AvatarImage src="" />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.LARGE}>
						<AvatarImage src="" />
						<AvatarFallback>M</AvatarFallback>
					</Avatar>

					{/* TODO(clearfeld): do one with a svg profile icon
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
             */}
				</div>
			</div>

			<div {...stylex.props(styles.row)}>
				<div {...stylex.props(page_styles.row)}>
					<Label extend={page_styles.label}>XLarge</Label>

					<Avatar size={AvatarSizes.XLARGE}>
						<AvatarImage src={profile_pic} />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.XLARGE}>
						<AvatarImage src="" />
						<AvatarFallback>MR</AvatarFallback>
					</Avatar>

					<Avatar size={AvatarSizes.XLARGE}>
						<AvatarImage src="" />
						<AvatarFallback>M</AvatarFallback>
					</Avatar>

					{/* TODO(clearfeld): do one with a svg profile icon
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
             */}
				</div>
			</div>
		</div>
	);
}
