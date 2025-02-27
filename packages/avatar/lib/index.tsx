"use client";

import type { ComponentProps } from "react";
import * as stylex from "@stylexjs/stylex";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	size?: AvatarSizes; // TODO(clearfeld): clean
};

// TODO(clearfeld): add variant for rounded vs square shape

enum AvatarSizes {
	SMALL = "small",
	MEDIUM = "medium",
	LARGE = "large",
	XLARGE = "xlarge",
}

const styles = stylex.create({
	avatar: {
		display: "flex",
		overflow: "hidden",
		position: "relative",
		shrink: "0",
		borderRadius: "50%",
		width: "2.5rem",
		height: "2.5rem",
		backgroundColor: "var(--avatar-background, #006699)",
		cursor: "pointer",
	},

	avatarImage: {
		aspectRatio: "1 / 1",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	avatarFallback: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50%",
		width: "100%",
		height: "100%",
		color: "var(--avatar-text, #FCFCFC)",
	},

	// TODO(clearfeld): connect disabled state to primitives
	disabled: {
		opacity: "0.5",
		cursor: "not-allowed",
	},

	[AvatarSizes.SMALL]: {
		height: "1.5rem",
		width: "1.5rem",
		fontSize: "0.625rem",
	},

	[AvatarSizes.MEDIUM]: {
		height: "2rem",
		width: "2rem",
		fontSize: "0.75rem",
	},

	[AvatarSizes.LARGE]: {
		height: "3rem",
		width: "3rem",
		fontSize: "0.8625rem",
	},

	[AvatarSizes.XLARGE]: {
		height: "4rem",
		width: "4rem",
		fontSize: "1rem",
	},
});

const Avatar = ({
	extend,
	size = AvatarSizes.MEDIUM,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Root> & ExtendProps) => (
	<AvatarPrimitive.Root
		ref={ref}
		{...stylex.props(styles.avatar, styles[size], extend)}
		{...props}
	/>
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Image> & ExtendProps) => (
	<AvatarPrimitive.Image
		ref={ref}
		{...stylex.props(styles.avatarImage, extend)}
		{...props}
	/>
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
	extend,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Fallback> & ExtendProps) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		{...stylex.props(styles.avatarFallback, extend)}
		{...props}
	/>
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback, AvatarSizes };
