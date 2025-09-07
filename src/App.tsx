import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import { priviteRoutes, publisRoutes } from "./Routes";
import PrivateLayout from "./Components/Layouts/PrivateLayout";
import PublicLayout from "./Components/Layouts/DefaultLayout";

function App() {
  return (
    <Routes>
      {publisRoutes.map((route, index) => {
        let Layout: typeof PublicLayout | typeof Fragment = PublicLayout;
        if (route.layout) Layout = route.layout;
        else if (route.layout === null) Layout = Fragment;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      {priviteRoutes.map((route, index) => {
        let Layout: typeof PublicLayout | typeof Fragment = PrivateLayout;
        if (route.layout) Layout = route.layout;
        else Layout = Fragment;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
