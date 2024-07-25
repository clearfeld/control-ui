import * as stylex from "@stylexjs/stylex";

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
	// Link,
	Outlet,
} from "react-router-dom";

import Navbar from "./commons/navbar";
import Playground from "./pages/playground";

import { H1 } from "@controlkit/headings";
// import Sidebar from "./commons/sidebar";
import ComponentsPage from "./pages/components";
import ButtonPage from "./pages/components/button";
import ButtonCode from "./pages/components/button/button-code";
import Examples from "./pages/examples";
import ComponentsSidebar from "./pages/components/sidebar";
import DividerPage from "./pages/components/divider";
import AvatarPage from "./pages/components/avatar";
import AccordianPage from "./pages/components/accordian";
import Introduction from "./pages/components/introduction";
import AlertPage from "./pages/components/alert";

const styles = stylex.create({
	content: {
		// marginTop: "var(--navbar-size)",
		paddingTop: "var(--navbar-size)",
		boxSizing: "border-box",
		display: "flex",
		flex: 1,
		// marginLeft: "var(--sidebar-size)",
		height: "100%",
	},

	sidebar_spacing: {
		paddingLeft: "var(--sidebar-size)",
		width: "calc(100% - var(--sidebar-size))",
	},
});

function Layout() {
	return (
		<>
			<Navbar />
			{/* <Sidebar /> */}
			<div {...stylex.props(styles.content)}>
				<Outlet />
			</div>
		</>
	);
}

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								height: "100%",
							}}
						>
							<H1
								style={{
									textAlign: "center",
									paddingTop: "2rem",
								}}
							>
								Under Construction
							</H1>

							<br />

							<span>
								This design system is not yet at an alpha state, and it's not
								recommended to use any components from here yet.
							</span>
							<span>
								Everything is subject to go under various breaking changes without
								warning at this time.
							</span>
						</div>
					}
				/>

				<Route
					path="docs"
					element={
						<>
							<ComponentsSidebar />
							<div {...stylex.props(styles.sidebar_spacing)}>
								<Introduction />
							</div>
						</>
					}
				/>

				<Route
					path="components"
					element={
						<>
							<ComponentsSidebar />
							<div {...stylex.props(styles.sidebar_spacing)}>
								<Outlet />
							</div>
						</>
					}
				>
					<Route
						index
						element={<ComponentsPage />}
					/>
					<Route path="alert">
						<Route
							path="examples"
							element={<AlertPage />}
						/>
					</Route>

					<Route path="accordian">
						<Route
							path="examples"
							element={<AccordianPage />}
						/>
					</Route>

					<Route path="avatar">
						<Route
							path="examples"
							element={<AvatarPage />}
						/>
					</Route>

					<Route path="button">
						<Route
							path="examples"
							element={<ButtonPage />}
						/>
						<Route
							path="code"
							element={<ButtonCode />}
						/>
					</Route>

					<Route path="divider">
						<Route
							path="examples"
							element={<DividerPage />}
						/>
						{/* <Route path="code" element={<ButtonCode />} /> */}
					</Route>
				</Route>

				<Route
					path="examples"
					element={<Examples />}
				/>

				<Route
					path="playground"
					element={<Playground />}
				/>
			</Route>,
		),
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
