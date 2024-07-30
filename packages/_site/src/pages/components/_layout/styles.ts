import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
	wrapper: {
		width: "100%",
		height: "100%",
		padding: "2rem",
		boxSizing: "border-box",
	},

	threeColumnLayout: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateAreas: `"content sidebar"`,
		gap: "2rem",
	},

	middleColumn: {
        marginTop: "2rem",
        boxSizing: "border-box",
        display: "grid",
        alignItems: "self-start",
        gap: "2rem",
        gridArea: "content",
        paddingBottom: "2rem",
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
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
});
