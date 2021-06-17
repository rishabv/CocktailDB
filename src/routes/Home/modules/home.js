// defining the unique types

export const SET_DRINKS_DATA = "SET_DRINKS_DATA";
export const SET_FETCH_DRINKS_SPINNER_STATUS =
  "SET_FETCH_DRINKS_SPINNER_STATUS";
export const SET_ERR_MESSAGE_VALUES = "SET_ERR_MESSAGE_VALUES";
export const SET_SINGLE_DRINK_DATA = "SET_SINGLE_DRINK_DATA";

// defining the actions

export function setDrinksSpinner(flag) {
  return {
    type: SET_FETCH_DRINKS_SPINNER_STATUS,
    payload: flag,
  };
}

export function setDrinksData(data) {
  return {
    type: SET_DRINKS_DATA,
    payload: data,
  };
}

export function setErrMessage(msg) {
  return {
    type: SET_ERR_MESSAGE_VALUES,
    payload: msg,
  };
}

export function setDrink(params) {
  return {
    type: SET_SINGLE_DRINK_DATA,
    payload: params,
  };
}

// fetching the drinks from the API according to the filters

export function fetchDrinksByFilter(filter, value) {
  return async (dispatch, getState) => {
    await dispatch(setDrinksSpinner(true));
    try {
      const result = await fetch(`${__API__}/filter.php?${filter}=${value}`);
      let response = await result.json();
      if (!response) {
        await dispatch(setErrMessage("No drinks found"));
      }
      await dispatch(setDrinksSpinner(false));
      await dispatch(setDrinksData(response.drinks));
    } catch (e) {
      await dispatch(setDrinksSpinner(false));
      console.log(e);
    }
  };
}

export function fetchDrinksById(id) {
  return async (dispatch, getState) => {
    await dispatch(setDrinksSpinner(true));
    try {
      const result = await fetch(`${__API__}/lookup.php?i=${id}`);
      let response = await result.json();
      if (!response) {
        await dispatch(setErrMessage("No drinks found"));
      }
      await dispatch(setDrinksSpinner(false));
      await dispatch(setDrink(response.drinks));
    } catch (e) {
      await dispatch(setDrinksSpinner(false));
      console.log(e);
    }
  };
}

export function SearchDrinks(name) {
  return async (dispatch, getState) => {
    await dispatch(setDrinksSpinner(true));
    try {
      const result = await fetch(`${__API__}/search.php?s=${name}`);
      let response = await result.json();
      if (!response) {
        await dispatch(setErrMessage("No drinks found"));
      }
      await dispatch(setDrinksSpinner(false));
      await dispatch(setDrinksData(response.drinks));
    } catch (e) {
      await dispatch(setDrinksSpinner(false));
      console.log(e);
    }
  };
}

// defining the initialState

export const initialState = {
  drinkSpinner: false,
  errMessage: "",
  drinks: [],
  drink: [],
};

// setting data to the variables according to the actions dispatched

const ACTION_HANDLERS = {
  [SET_DRINKS_DATA]: (state, action) => {
    return {
      ...state,
      drinks: action.payload,
    };
  },
  [SET_FETCH_DRINKS_SPINNER_STATUS]: (state, action) => {
    return {
      ...state,
      drinkSpinner: action.payload,
    };
  },
  [SET_SINGLE_DRINK_DATA]: (state, action) => {
    return {
      ...state,
      drink: action.payload,
    };
  },
};

export default function RegisterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
