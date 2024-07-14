import * as stylex from '@stylexjs/stylex';

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  // Link,
  Outlet,
} from "react-router-dom";

import Navbar from './commons/navbar';
import Playground from './pages/playground';

const styles = stylex.create({
  wrapper: {
    paddingTop: "var(--navbar-size)"
  },
});

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navbar />
            {/*
            <Sidebar /> */}

            <div
              {...stylex.props(styles.wrapper)}
            >
              <Outlet />
            </div>
          </>
        }>

        <Route index element={
          <>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Under Construction
            </h1>
          </>
        } />

        <Route path="playground" element={<Playground />} />

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


