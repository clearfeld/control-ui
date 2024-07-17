import stylex from "@stylexjs/stylex";

export const components = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
    padding: "2rem",
  },

  titleCard: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2rem",
    boxSizing: "border-box",
    border: "1px solid var(--border-100)",
    height: "11rem",
    width: "100%",
    borderRadius: "var(--border-radius)",
    background:
      "radial-gradient(circle at 100% 100%,#1cb1eb 15%, #0392cb 28%, #00b7ff 30%, #003A7E 32%, #000000 80%)",
  },

  componentCard: {
    border: "1px solid var(--border-100)",
    borderRadius: "var(--border-radius)",
    padding: "1rem",
    backgroundColor: "#000711",
    cursor: "pointer",
  },

  componentCardWrapper: {
    display: "grid",
    gridTemplateColumns: {
      default: "1fr 1fr 1fr",
      "@media (max-width: 1400px)": "1fr 1fr",
      "@media (max-width: 1024px)": "1fr",
    },
    gap: "1rem",
    marginTop: "4rem",
  },

  placeholderImage: {
    width: "100%",
    height: "6rem",
    backgroundColor: "#000D20",
  },

  link: {
    textDecoration: "none",
    color: "white",
  },
});
