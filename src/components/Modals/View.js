import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalBody from "./Body";

export function View() {
  let {} = useSelector((state) => state.home);
  return (
    <Fragment>
      <ModalBody>
        <h1>hello world</h1>
      </ModalBody>
    </Fragment>
  );
}

export default View;
