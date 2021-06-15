import React from "react";
import { renderRoutes } from "react-router-config";
import Root from "../layouts/Root";
import { Redirect } from "react-router";
import { MainWrapperView } from "./MainWrapper/components/MainWrapperView";
import CoreLayout from "../layouts/CoreLayout";
import HomeView from "./Home/components/HomeView";

export const redirectRoute = () => {
  return <Redirect to="/home" />;
};

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: redirectRoute,
      },
      {
        path: "/home",
        component: CoreLayout,
        routes: [
          {
            path: "/home",
            component: MainWrapperView,
            routes: [
              {
                path: "/home",
                exact: true,
                component: HomeView,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const createRoutes = () => {
  return renderRoutes(routes);
};

export default createRoutes;
