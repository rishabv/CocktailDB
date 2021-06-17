import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalBody from "./Body";

export function ViewModal() {
  let { drink } = useSelector((state) => state.home);
  let ingredients=[]
  

  return (
    <Fragment>
      <ModalBody>
        {drink.map((item,i) => (
          <div className="w-full p-1" key={i}>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-60 rounded w-full object-cover object-center mb-6"
                src={item.strDrinkThumb}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {item.strCategory}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                {item.idDrink}
              </h2>
              <p className="leading-relaxed text-base">
                {item.strIngredient1}
              </p>
            </div>
          </div>
        ))}
      </ModalBody>
    </Fragment>
  );
}

export default ViewModal;
