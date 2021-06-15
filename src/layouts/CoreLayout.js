import React,{ Fragment } from "react";
import { renderRoutes } from "react-router-config";
import auth from "../helpers/auth";

export const CoreLayout = ({ children, route }) => (
  <Fragment>
    <div className="wrapper">
      <div className="core-layout__viewport">
        {children}
        {renderRoutes(route.routes)}
      </div>
    </div>
  </Fragment>
);

export default CoreLayout;
