import { Fragment, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import AuthHeader from "../../../components/Headers/AuthHeader";
import React from "react";
import Footer from "../../../components/Footer/Footer";
import { fetchAllUsers } from "../modules/MainWrapper";
import { connect, useSelector, useDispatch } from "react-redux";

export function MainWrapperView({ children, route }) {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchAllUsers());
  }, []);

  return (
    <Fragment>
      <AuthHeader />

      {children}
      {renderRoutes(route.routes)}
      <Footer />
    </Fragment>
  );
}

export default MainWrapperView;
