export const MAIN_VIEW_SET_FILTER_VALUES = "MAIN_VIEW_SET_FILTER_VALUES";
export const MAIN_VIEW_FETCH_USER_SPINNER = "MAIN_VIEW_FETCH_USER_SPINNER";
export const SET_MAIN_MODAL_VALUE = "SET_MAIN_MODAL_VALUE";

export function setFilters(data) {
  return {
    type: MAIN_VIEW_SET_FILTER_VALUES,
    payload: data,
  };
}

export function setModal(data) {
  return {
    type: SET_MAIN_MODAL_VALUE,
    payload: data,
  };
}

export function setfetchUserSpinner(value) {
  return {
    type: MAIN_VIEW_FETCH_USER_SPINNER,
    payload: value,
  };
}

export function fetchFilterValues(filter) {
  return async (dispatch, getState) => {
    await dispatch(setfetchUserSpinner(true));
    try {
      const result = await fetch(`${__API__}/list.php?${filter}=list`);
      let response = await result.json();
      console.log(response);
      await dispatch(setfetchUserSpinner(false));
      await dispatch(setFilters(response.drinks));
    } catch (e) {
      await dispatch(setfetchUserSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  filters: [],
  userSpinner: false,
};

const ACTION_HANDLERS = {
  [MAIN_VIEW_SET_FILTER_VALUES]: (state, action) => {
    for(var i = 0; i < action.payload.length; i++){
      action.payload[i].label = action.payload[i]['name'];
      action.payload[i].value = action.payload[i]['phonecode'];
      delete action.payload[i].phonecode;
    }
    return {
      ...state,
      filters: action.payload,
    };
  },
  [MAIN_VIEW_FETCH_USER_SPINNER]: (state, action) => {
    return {
      ...state,
      userSpinner: action.payload,
    };
  },
  [SET_MAIN_MODAL_VALUE]: (state, action) => {
    
    return {
      ...state,
      modal: action.payload,
    };
  },
};

export default function authWrapperReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
