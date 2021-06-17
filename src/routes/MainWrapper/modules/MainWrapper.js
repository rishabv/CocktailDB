export const MAIN_VIEW_SET_FILTER_VALUES = "MAIN_VIEW_SET_FILTER_VALUES";
export const MAIN_VIEW_FETCH_DRINKS_SPINNER = "MAIN_VIEW_FETCH_DRINKS_SPINNER";
export const SET_MAIN_MODAL_VALUE = "SET_MAIN_MODAL_VALUE";
export const SET_MDOAL_DATA = "SET_MDOAL_DATA";

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

export function setFilterSpinner(value) {
  return {
    type: MAIN_VIEW_FETCH_DRINKS_SPINNER,
    payload: value,
  };
}

export function setModalData(data) {
  return {
    type: SET_MDOAL_DATA,
    payload: data,
  };
}

export function fetchFilterValues(filter) {
  return async (dispatch, getState) => {
    await dispatch(setFilterSpinner(true));
    try {
      const result = await fetch(`${__API__}/list.php?${filter}=list`);
      let response = await result.json();
      await dispatch(setFilterSpinner(false));
      await dispatch(setFilters(response.drinks));
    } catch (e) {
      await dispatch(setFilterSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  filters: [],
  filterSpinner: false,
  modal: false,
};

const ACTION_HANDLERS = {
  [MAIN_VIEW_SET_FILTER_VALUES]: (state, action) => {
    return {
      ...state,
      filters: action.payload,
    };
  },
  [MAIN_VIEW_FETCH_DRINKS_SPINNER]: (state, action) => {
    return {
      ...state,
      filterSpinner: action.payload,
    };
  },
  [SET_MAIN_MODAL_VALUE]: (state, action) => {
    return {
      ...state,
      modal: action.payload,
    };
  },
  [SET_MDOAL_DATA]: (state, action) => {
    return {
      ...state,
      modalData: action.payload,
    };
  },
};

export default function authWrapperReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
