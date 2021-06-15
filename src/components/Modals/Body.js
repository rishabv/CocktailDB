import React, { Fragment } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { setModal } from "../../routes/MainWrapper/modules/MainWrapper";

export function Body({ children, closeEvent }) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="modal opacity fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75" />
        <div className="modal-container bg-white w-11/12 md:w-9/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content p-6 text-center">
            <div className="flex justify-end pb-3">
              <div
                className="modal-close cursor-pointer z-50"
                onClick={() => dispatch(setModal(""))}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
            </div>
            <div className="modal__body text-center">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mt-5">
                {/*<div className="sm:flex sm:items-start">
  <div className="mt-3 text-center sm:mt-0 sm:ml-4">*/}
                    {children}
                  {/*</div>
                  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Body;
