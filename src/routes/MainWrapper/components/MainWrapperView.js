import { Fragment, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../../components/Headers/Header";
import React from "react";
import Footer from "../../../components/Footer/Footer";

export function MainWrapperView({ children, route }) {
  return (
    <Fragment>
      <Header />
      {children}
      {renderRoutes(route.routes)}
      <Footer />
    </Fragment>
  );
}

export default MainWrapperView;
