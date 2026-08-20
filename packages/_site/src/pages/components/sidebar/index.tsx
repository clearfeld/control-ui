import { H6 } from "@controlkit/headings";
import * as stylex from "@stylexjs/stylex";
import { Link, useMatches } from "react-router-dom";
import { componentsList, getting_started, foundations } from "../routes_list_docs_components";

const styles = stylex.create({
	wrapper: {
		overflow: "auto",
		backgroundColor: "var(--sidebar-color-bg)",
		boxSizing: "border-box",
		position: "fixed",
		scrollbarColor: "#9f9f9f transparent",
		scrollbarWidth: "thin",
		zIndex: 1,
		borderRightColor: 'var(--border-color, #333333)',
		borderRightStyle: 'solid',
		borderRightWidth: '0.0625rem',
		height: "calc(100vh - 4rem) !important",
		width: "var(--sidebar-size)",
	},

	title: {
		paddingBlock: '0.5rem',
		paddingInline: '1rem',
		boxSizing: "border-box",
	},

	link: {
		borderRadius: "1.25rem",
		paddingBlock: '0.25rem',
		paddingInline: '1rem',
		transition: "background-color var(--transition-speed) ease",
		backgroundColor: {
			":hover": "var(--ds-surface)",
		},
		boxSizing: "border-box",
		cursor: "pointer",
		position: "relative",
		marginBottom: '0.125rem',
		marginLeft: '0.75rem',
		marginRight: '0.125rem',
		marginTop: '0.125rem',
		paddingBottom: '0.5rem',
		paddingLeft: '1.5rem',
		paddingRight: '0.5rem',
		paddingTop: '0.5rem',
		width: "calc(100% - 1rem)",
	},

	link_active: {
		backgroundColor: "var(--ds-surface-sunken)",
		"::before": {
			backgroundColor: "#006699",
			content: "",
			position: "absolute",
			height: "100%",
			left: 0,
			top: 0,
			width: "0.25rem",
		},
	},

	link_unstyle: {
		textDecoration: "none",
		color: "var(--color-text)",
	},
});

export default function ComponentsSidebar() {
	const matches = useMatches();
	const cur_path = matches[matches.length - 1].pathname;

	return (
		<div {...stylex.props(styles.wrapper)}>
			<H6 extend={styles.title}>Getting Started</H6>

			{getting_started.map((component) => (
				<Link
					to={component.route}
					{...stylex.props(styles.link_unstyle)}
					key={component.title}>
					<div
						{...stylex.props(
							styles.link,
							cur_path === component.route && styles.link_active
						)}>
						{component.title}
					</div>
				</Link>
			))}

			<H6 extend={styles.title}>Components {/* Atoms */}</H6>

			{componentsList.map((component) => (
				<Link
					to={component.link}
					{...stylex.props(styles.link_unstyle)}
					key={component.title}>
					<div
						{...stylex.props(
							styles.link,
							cur_path === component.link && styles.link_active
						)}>
						{component.title}
					</div>
				</Link>
			))}

			<H6 extend={styles.title}>Foundations</H6>

			{foundations.map((component) => (
				<Link
					to={component.route}
					{...stylex.props(styles.link_unstyle)}
					key={component.title}>
					<div
						{...stylex.props(
							styles.link,
							cur_path === component.route && styles.link_active
						)}>
						{component.title}
					</div>
				</Link>
			))}
		</div>
	);
}
