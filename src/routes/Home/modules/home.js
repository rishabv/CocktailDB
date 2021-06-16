export const SET_DRINKS_DATA = "SET_DRINKS_DATA";
export const SET_FETCH_DRINKS_SPINNER_STATUS =
  "SET_FETCH_DRINKS_SPINNER_STATUS";

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

export function fetchDrinksByFilter(filter, value) {
  console.log(filter, value);
  return async (dispatch, getState) => {
    await dispatch(setDrinksSpinner(true));
    try {
      const result = await fetch(`${__API__}/filter.php?${filter}=${value}`);
      let response = await result.json();
      if (response.success === 200) {
        await dispatch(setDrinksSpinner(false));
        await dispatch(setDrinksData(response.drink));
      }
    } catch (e) {
      await dispatch(setDrinksSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  drinkSpinner: false,
  formValue: {},
  errMessage: {
    msg: "",
    field: "",
  },
  drinks: [],
};

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
};

export default function RegisterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
