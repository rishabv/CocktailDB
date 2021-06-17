import React, { Fragment, useState, useEffect } from "react";
import { fetchFilterValues } from "../../routes/MainWrapper/modules/MainWrapper";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  fetchDrinksByFilter,
  SearchDrinks,
} from "../../routes/Home/modules/home";
import Spinner from "../Spinners/FormSpinner";

function Filters() {
  const { filters } = useSelector((state) => state.mainWrapper);
  const dispatch = useDispatch();

  const [filterBy, setFilterBy] = useState("c");
  const [filterValue, setFilterValue] = useState("");
  const [searchterm, setSearchTerm] = useState("");

  const ChangeFilter = async (e) => {
    await setFilterBy(e.target.value);
    await dispatch(fetchFilterValues(e.target.value));
  };

  const hanldeChange = async (e) => {
    setFilterValue(e.target.value);
    await dispatch(fetchDrinksByFilter(filterBy, e.target.value));
  };

  useEffect(async () => {
    await dispatch(fetchFilterValues(filterBy));
    // await setFilterValue(filters[0].strCategory);
    // await dispatch(fetchDrinksByFilter(filterBy,filterValue));
  }, []);

  const onSearch = async (e) => {
    e.preventDefault();
    await dispatch(SearchDrinks(searchterm));
  };

  return (
    <Fragment>
      <div className="my-2 flex sm:flex-row flex-col">
        <h2 className="text-2xl font-semibold leading-tight">Filter by:</h2>
        <div className="flex flex-row mb-1 ml-2 sm:mb-0">
          <div className="relative">
            <select
              onChange={(e) => ChangeFilter(e)}
              className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="c">category</option>
              <option value="g">Glass</option>
              <option value="a">Alcoholic</option>
              <option value="i">Ingrediants</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {filters && (
            <div className="relative">
              <select
                onChange={(e) => hanldeChange(e)}
                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              >
                <option value="">select</option>
                {filterBy === "c"
                  ? filters.map((item, i) => (
                      <option value={item.strCategory} key={i}>
                        {item.strCategory}
                      </option>
                    ))
                  : filterBy === "i"
                  ? filters.map((item, i) => (
                      <option value={item.strIngredient1} key={i}>
                        {item.strIngredient1}
                      </option>
                    ))
                  : filterBy === "g"
                  ? filters.map((item, i) => (
                      <option value={item.strGlass} key={i}>
                        {item.strGlass}
                      </option>
                    ))
                  : filterBy === "a"
                  ? filters.map((item, i) => (
                      <option value={item.strAlcoholic} key={i}>
                        {item.strAlcoholic}
                      </option>
                    ))
                  : null}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-gray-500"
            >
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
        <div className="block relative">
          <button
            onClick={(e) => onSearch(e)}
            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-2 my-auto rounded"
          >
            search
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Filters;
