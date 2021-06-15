import React, { Fragment } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import Loading from "../components/Loading";
import { createRoutes } from "../routes/index";
import store, { history } from "../store/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "../assets/style.css";

const App = () => {
  const routes = createRoutes();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Fragment>{routes}</Fragment>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
