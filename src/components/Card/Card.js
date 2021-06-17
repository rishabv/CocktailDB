import React, { Fragment } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setModal,
  setModalData,
} from "../../routes/MainWrapper/modules/MainWrapper";
import { fetchDrinksById } from "../../routes/Home/modules/home";

function Card(props) {
  const dispatch = useDispatch();

  const openModal = async (item) => {
    await dispatch(setModal(true));
    await dispatch(fetchDrinksById(item.idDrink));
  };

  return (
    <Fragment>
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={props.item.strDrinkThumb}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {props.item.strDrink}
            </h1>
            <div className="flex items-center flex-wrap ">
              <Link
                to="#"
                onClick={() => openModal(props.item)}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
