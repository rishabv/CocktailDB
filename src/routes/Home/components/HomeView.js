import React, { Fragment, useEffect } from "react";
import { fetchFormFields } from "../modules/home";
import { setModal } from "../../MainWrapper/modules/MainWrapper";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/Spinners/FormSpinner";
import View from "../../../components/Modals/View";
import Edit from "../../../components/Modals/Edit";
import Delete from "../../../components/Modals/Delete";

export function RegisterView(params) {
  let { users, userSpinner, modal } = useSelector((state) => state.mainWrapper);
  const dispatch=useDispatch()
  return (
    <Fragment>
      {modal === "view" ? (
        <View />
      ) : modal === "edit" ? (
        <Edit />
      ) : modal === "delete" ? (
        <Delete />
      ) : null}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {userSpinner ? (
            <Spinner />
          ) : (
            <div className="flex flex-wrap -m-2">
              {users.map((item) => (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.id}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {item.name}
                      </h2>
                      <p className="text-gray-500">{item.status}</p>
                    </div>
                    <div className="flex flex-wrap">
                      <button
                        onClick={()=>dispatch(setModal("view"))}
                        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-2"
                      >
                        <i className="far fa-eye "></i>
                      </button>
                      <button
                        onClick={()=>dispatch(setModal("edit"))}
                        class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-2"
                      >
                        <i class="fas fa-pen-square"></i>
                      </button>
                      <button
                        onClick={()=>dispatch(setModal("delete"))}
                        class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-2"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
}

export default RegisterView;
