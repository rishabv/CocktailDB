import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";

export function AuthLayout({ children, route }) {
  return (
    <Fragment>
      {children}
      {renderRoutes(route.routes)}
    </Fragment>
  );
}

export default AuthLayout;