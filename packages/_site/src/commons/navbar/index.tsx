/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { MenuSvg } from "@controlkit/icons";
import { Button, ButtonVariants } from "@controlkit/button";

import {
	SheetVariants,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@controlkit/sheet";
import { Label } from "@controlkit/label";

const styles = stylex.create({
	base: {
		height: "var(--navbar-size)",
		position: "fixed",
		width: "100%",

		backgroundColor: "var(--navbar-color-bg)",
		backdropFilter: "blur(0.5rem)",


		borderBottomColor: 'var(--btn-ghost-hover-background)',
		borderBottomStyle: 'solid',
		borderBottomWidth: '1px',

		/*
	  display: "grid",
	  gridTemplateColumns: "1fr 1fr 1fr",
	  alignItems: "center",
	  padding: "0 1rem",
	*/

		padding: "1rem",
		display: "flex",
		alignItems: "center",
		boxSizing: "border-box",
		top: 0,
		zIndex: 10,
	},
	navbar_items: {
		justifyContent: "space-between",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},

	link: {
		textDecoration: "none",
		color: "var(--text-color)",
	},

	pill: {
		display: "flex",
		gap: "1rem",
		border: "2px solid var(--border-100)",
		borderRadius: "var(--border-radius)",
		padding: "0.5rem",
		width: "fit-content",
		justifyContent: "center",
		alignItems: "center",
		boxSizing: "border-box",
	},

	light_btn: {
		backgroundColor: "unset",
		border: "none",
		outline: "0.125rem solid #006699",
		borderRadius: "0.25rem 0 0 0.25rem",
		color: "var(--text-color)",
		padding: "0.5rem 1rem",
		width: "50%",
		cursor: "pointer",
	},

	dark_btn: {
		cursor: "pointer",
		backgroundColor: "unset",
		border: "none",
		outline: "0.125rem solid #006699",
		borderRadius: "0 0.25rem 0.25rem 0",
		color: "var(--text-color)",
		padding: "0.5rem 1rem",
		width: "50%",
	},

	active_btn: {
		outline: "0.125rem solid #006699",
		backgroundColor: "#006699",
		color: "var(--cds-white)",
	},

	sidebar_toggle_button: {
		padding: "0.5rem",
		borderRadius: "0.25rem",
		cursor: "pointer",
		backgroundColor: {
			default: "transparent",
			":hover": "var(--accordion-hover, #333333)",
		},
		borderStyle: "none",
	}
});

export default function Navbar() {
	return (
		<div {...stylex.props(styles.base)}>
			<Button
				{...stylex.props(styles.sidebar_toggle_button)}
				onClick={() => {
					const root = document.documentElement;
					const size = getComputedStyle(root).getPropertyValue('--sidebar-size');
					if (size === '0px' || size === '0' || size === '' || size === null || size === undefined) {
						root.style.setProperty('--sidebar-size', '320px');
					} else {
						root.style.setProperty('--sidebar-size', '0');
					}
				}}
				variant={ButtonVariants.GHOST}
			>
				<MenuSvg
					style={{ verticalAlign: "middle" }}
					height={"24"}
					width={"24"}
				/>
			</Button>

			<div {...stylex.props(styles.navbar_items)}>
				<div>
					<Link
						to={"/"}
						{...stylex.props(styles.link)}
					>
						Control Design System
					</Link>
				</div>

				<div
					// {...stylex.props(styles.pill)}
					style={{
						display: "flex",
						gap: "1rem",
					}}
				>
					<Link
						to={"/components"}
						{...stylex.props(styles.link)}
					>
						Components
					</Link>

					<Link
						to={"/examples"}
						{...stylex.props(styles.link)}
					>
						Examples
					</Link>

					<Link
						to={"/Colors"}
						{...stylex.props(styles.link)}
					>
						Colors
					</Link>

					{/*
			<Link to={"/components"} {...stylex.props(styles.link)}>
			About
			</Link> */}
				</div>

				<div {...stylex.props(styles.pill)}>
					<Link
						to={"/playground"}
						{...stylex.props(styles.link)}
					>
						Playground
					</Link>

					<Settings />
				</div>
			</div>
		</div>
	);
}

type T_Theme = "Dark" | "Light" | "System";
interface I_Cookie_UserPreferences {
	theme: T_Theme;
}

function Settings() {
	const user_preferences_cookie = "cds__user_preferences";
	const [theme, setTheme] = useState<T_Theme>("Dark");

	useEffect(() => {
		EnablePreferredTheme();
	}, []);

	function EnablePreferredTheme() {
		const up = Cookies.get(user_preferences_cookie);

		if (up) {
			const upc = JSON.parse(up) as I_Cookie_UserPreferences;

			const htmlroot = document.getElementsByTagName("html")[0];

			setTheme(upc.theme);
			htmlroot.setAttribute("data-theme", upc.theme);
		}
	}

	function ToggleThemes(theme_arg: T_Theme) {
		const htmlroot = document.getElementsByTagName("html")[0];

		const css = document.createElement("style");
		css.type = "text/css";
		css.appendChild(
			document.createTextNode(
				`* {
       				-webkit-transition: none !important;
       				-moz-transition: none !important;
       				-o-transition: none !important;
       				-ms-transition: none !important;
       				transition: none !important;
    			}`,
			),
		);
		document.head.appendChild(css);

		setTheme(theme_arg);
		htmlroot.setAttribute("data-theme", theme_arg);

		// @ts-expect-error ignore
		const _ = window.getComputedStyle(css).opacity;
		document.head.removeChild(css);

		const up = Cookies.get(user_preferences_cookie);
		if (up) {
			const upc = JSON.parse(up) as I_Cookie_UserPreferences;

			upc.theme = theme_arg;
			Cookies.set(user_preferences_cookie, JSON.stringify(upc), {
				path: "/",
				sameSite: "strict",
				// domain: domain_str
			});
		} else {
			const upc = {
				theme: theme_arg,
			};

			Cookies.set(user_preferences_cookie, JSON.stringify(upc), {
				path: "/",
				sameSite: "strict",
				// domain: domain_str
			});
		}
	}

	return (
		<Sheet key={SheetVariants.RIGHT}>
			<SheetTrigger asChild>
				<span
					style={{ cursor: "pointer" }}
				>
					Settings
				</span>
			</SheetTrigger>

			<SheetContent side={SheetVariants.RIGHT}>
				<SheetHeader>
					<SheetTitle>Settings</SheetTitle>
				</SheetHeader>

				<br />

				<div>
					<Label>MODE</Label>

					<div
						style={{ marginTop: "1rem" }}
					>
						<button
							{...stylex.props(
								styles.light_btn,
								theme === "Light" && styles.active_btn
							)}
							onClick={() => ToggleThemes("Light")}
						>
							Light (WIP)
						</button>

						<button
							{...stylex.props(
								styles.dark_btn,
								theme === "Dark" && styles.active_btn
							)}
							onClick={() => ToggleThemes("Dark")}
						>
							Dark
						</button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
