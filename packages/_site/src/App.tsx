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

const styles = stylex.create({
  wrapper: {
    paddingTop: "var(--navbar-size)",
  },

  layout: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    // background: "linear-gradient(177deg, #000000 10%, #021534 55%)",
  },

  content: {
    paddingTop: "var(--navbar-size)",
    boxSizing: "border-box",
    display: "flex",
    flex: 1,
    // marginLeft: "var(--sidebar-size)",
    overflow: "auto",
  },
});

function Layout() {
  return (
    <div {...stylex.props(styles.layout)}>
      <Navbar />
      {/* <Sidebar /> */}
      <div {...stylex.props(styles.content)}>
        <Outlet />
      </div>
    </div>
  );
}
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <H1
                style={{
                  textAlign: "center",
                  paddingTop: "2rem",
                }}>
                Under Construction
              </H1>
            </>
          }
        />
        <Route path="components" element={<ComponentsPage />} />

        <Route path="components/button">
          <Route path="examples" element={<ButtonPage />} />
          <Route path="code" element={<ButtonCode />} />
        </Route>
        <Route path="playground" element={<Playground />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
