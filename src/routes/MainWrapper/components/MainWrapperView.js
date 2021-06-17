import { Fragment, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../../components/Headers/Header";
import React from "react";
import Footer from "../../../components/Footer/Footer";
import Errors from "../../../components/Errors/FormError";
import { connect, useSelector, useDispatch } from "react-redux";

export function MainWrapperView({ children, route }) {
  const {errMessage} = useSelector((state) => state.mainWrapper);
  
  return (
    <Fragment>
      <Header />
      {errMessage && <Errors msg={errMessage} />}

      {children}
      {renderRoutes(route.routes)}
      <Footer />
    </Fragment>
  );
}

export default MainWrapperView;
