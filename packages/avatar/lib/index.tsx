"use client";

import * as stylex from "@stylexjs/stylex";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

type ExtendProps = {
	extend?: stylex.StyleXStyles;
	size?: T_AvatarSizes;
	look?: T_AvatarLook;
};

const AvatarSizes = {
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large",
	XLARGE: "xlarge",
} as const;

type T_AvatarSizes = (typeof AvatarSizes)[keyof typeof AvatarSizes];

const AvatarLook = {
	DEFAULT: "default",
	SQUARE: "square",
} as const;

type T_AvatarLook = (typeof AvatarLook)[keyof typeof AvatarLook];

const styles = stylex.create({
	avatar: {
		backgroundColor: "var(--avatar-background, var(--cds-blue-300, #006699))",
		cursor: "pointer",
		display: "flex",
		flexShrink: "0",
		position: "relative",
		userSelect: "none",
		height: "2.5rem",
		width: "2.5rem",
	},

	// TODO: needs more customization options
	avatarBorder: {
		"::after": {
			borderColor: "var(--avatar-border, #757575)",
			borderRadius: "50%",
			borderStyle: "solid",
			borderWidth: "0.0625rem",
			content: "",
			mixBlendMode: "darken",
			position: "absolute",
			bottom: 0,
			left: 0,
			right: 0,
			top: 0,
		}
	},

	[AvatarLook.DEFAULT]: {
		borderRadius: "50%",
	},

	[AvatarLook.SQUARE]: {
		borderRadius: "0.25rem",
	},

	avatarImage: {
		aspectRatio: "1 / 1",
		objectFit: "cover",
		height: "100%",
		width: "100%",
	},

	avatarFallback: {
		borderRadius: "50%",
		alignItems: "center",
		color: "var(--avatar-text, var(--cds-white, #FCFCFC))",
		display: "flex",
		justifyContent: "center",
		height: "100%",
		width: "100%",
	},

	// TODO(clearfeld): connect disabled state to primitives
	disabled: {
		cursor: "not-allowed",
		opacity: "0.5",
	},

	[AvatarSizes.SMALL]: {
		fontSize: "0.625rem",
		height: "1.5rem",
		width: "1.5rem",
	},

	['badge-' + AvatarSizes.SMALL]: {
		display: "none",
	},

	[AvatarSizes.MEDIUM]: {
		fontSize: "0.75rem",
		height: "2rem",
		width: "2rem",
	},

	['badge-' + AvatarSizes.MEDIUM]: {
		height: "0.75rem",
		width: "0.75rem",
	},

	[AvatarSizes.LARGE]: {
		fontSize: "0.8625rem",
		height: "3rem",
		width: "3rem",
	},

	['badge-' + AvatarSizes.LARGE]: {
		height: "1rem",
		width: "1rem",
	},

	[AvatarSizes.XLARGE]: {
		fontSize: "1rem",
		height: "4rem",
		width: "4rem",
	},

	['badge-' + AvatarSizes.XLARGE]: {
		height: "1.25rem",
		width: "1.25rem",
	},

	avatarGroup: {
		alignItems: "center",
		display: "flex",
		marginLeft: {
			default: "-0.5rem",
			":nth-child(n+2)": "-0.5rem",
		},
	},

	avatarGroupCount: {
		borderRadius: '9999px',
		alignItems: 'center',
		backgroundColor: 'var(--muted-foreground, #1a1a1a)',
		boxShadow: `0 0 0 0.125rem var(--background, #272727)`,
		color: 'var(--muted, #bfbfbf)',
		display: 'flex',
		flexShrink: 0,
		fontSize: "0.75rem",
		justifyContent: 'center',
		position: 'relative',
		height: "1.75rem",
		width: "1.75rem",
	},

	avatarBadge: {
		borderRadius: "9999px",
		alignItems: "center",
		backgroundBlendMode: "color",
		backgroundColor: "var(--cds-green-400, #30AB53)",
		boxShadow: "0 0 0 0.125rem #131313",
		color: "var(--cds-green-400, #30AB53)",
		display: "inline-flex",
		justifyContent: "center",
		position: "absolute",
		userSelect: "none",
		zIndex: 10,
		bottom: 0,
		right: 0,
	},
});

function Avatar({
	extend,
	size = AvatarSizes.MEDIUM,
	look = AvatarLook.DEFAULT,
	border = false,
	...props
}: AvatarPrimitive.Root.Props & ExtendProps & {
	size?: T_AvatarSizes,
	look?: T_AvatarLook,
	border?: boolean,
}) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			data-size={size}
			{...stylex.props(
				styles.avatar,
				styles[size],
				styles[look],
				border && styles.avatarBorder,
				extend
			)}
			{...props}
		/>
	);
}

function AvatarImage({
	extend,
	look = AvatarLook.DEFAULT,
	...props
}: AvatarPrimitive.Image.Props & ExtendProps & {
	look?: T_AvatarLook
}) {
	return (
		<AvatarPrimitive.Image
			{...stylex.props(
				styles.avatarImage,
				styles[look],
				extend
			)}
			{...props}
		/>
	);
}

function AvatarFallback({
	extend,
	...props
}: AvatarPrimitive.Fallback.Props & ExtendProps) {
	return (
		<AvatarPrimitive.Fallback
			{...stylex.props(styles.avatarFallback, extend)}
			{...props}
		/>
	);
}

function AvatarBadge({
	extend,
	size = AvatarSizes.MEDIUM,
	...props
}: React.ComponentProps<"span"> & ExtendProps & {
	size?: T_AvatarSizes,
}) {
	return (
		<span
			data-slot="avatar-badge"
			{...stylex.props(
				styles.avatarBadge,
				styles["badge-" + size],
				extend
			)}
			{...props}
		/>
	)
}

function AvatarGroup({
	extend,
	...props
}: React.ComponentProps<"div"> & ExtendProps) {
	return (
		<div
			data-slot="avatar-group"
			{...stylex.props(styles.avatarGroup, extend)}
			{...props}
		/>
	)
}

function AvatarGroupCount({
	extend,
	...props
}: React.ComponentProps<"div"> & ExtendProps) {
	return (
		<div
			data-slot="avatar-group-count"
			{...stylex.props(styles.avatarGroupCount, extend)}
			{...props}
		/>
	)
}

export {
	Avatar,
	AvatarSizes,
	AvatarLook,
	AvatarImage,
	AvatarFallback,
	AvatarBadge,
	AvatarGroup,
	AvatarGroupCount
};
