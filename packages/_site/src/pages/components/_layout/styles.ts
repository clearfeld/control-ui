import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
	wrapper: {
		// boxSizing: "border-box",
	},

	threeColumnLayout: {
		gap: "2rem",
		gridTemplateAreas: `"content sidebar"`,
		display: "grid",
		gridTemplateColumns: "minmax(846px, 846px) auto",
		justifyContent: "center",
	},

	middleColumn: {
        gap: "2rem",
		marginBlock: '0',
		marginInline: 'auto',
        alignItems: "self-start",
        boxSizing: "border-box",
        display: "grid",
        gridColumnEnd: 'content',
        gridColumnStart: 'content',
        gridRowEnd: 'content',
        gridRowStart: 'content',
		position: "relative",
        marginTop: "2rem",
		maxWidth: "846px",
        paddingBottom: "2rem",
		width: "100%",
	},

	codeWrapper: {
		// border: "1px solid var(--border-100)",
		borderRadius: "var(--border-radius)",
		backgroundColor: "#121212",
		// padding: "1rem",
		boxSizing: "border-box",
	},

	blockWrapper: {
		marginTop: "1rem",
	},

	stepBlock: {
		gap: "1rem",
		display: "flex",
		flexDirection: "column",
	},
});
