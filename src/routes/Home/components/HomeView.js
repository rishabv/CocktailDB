import React, { Fragment, useEffect } from "react";
import { setModal } from "../../MainWrapper/modules/MainWrapper";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/Spinners/FormSpinner";
import Filters from "../../../components/FIlters/Filters";
import Card from "../../../components/Card/Card";
import { ViewModal } from "../../../components/Modals/View";

export function RegisterView(params) {
  let { drinks, drinkSpinner } = useSelector((state) => state.home);
  let { modal } = useSelector((state) => state.mainWrapper);
  return (
    <Fragment>
      <div className="container mx-auto px-4 sm:px-8">
        {modal ? <ViewModal /> : null}
        <div className="py-8">
          {/* Filter panel to filter the results */}
          <Filters />
          {/* Listing the filtered drinks */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              {drinkSpinner ? (
                <Spinner />
              ) : drinks.length == 0 ? (
                <p>No drinks found</p>
              ) : (
                <div className="flex flex-wrap -m-4">
                  {drinks.map((item,i) => (
                    <Card item={item} key={i}/>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterView;
