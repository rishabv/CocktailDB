import React, { Fragment, useEffect } from "react";
import { setModal } from "../../MainWrapper/modules/MainWrapper";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/Spinners/FormSpinner";
import Filters from "../../../components/FIlters/Filters";
import Card from "../../../components/Card/Card";

export function RegisterView(params) {
  let { filters } = useSelector((state) => state.mainWrapper);
  let {drinks} = useSelector(state=>state.home)
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <Filters />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {drinks.map(item=>
                  <Card {...item}/>
                )
                  
                }
              </div>
            </div>
          </section>

          {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterView;
