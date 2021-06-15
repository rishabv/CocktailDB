export const MAIN_VIEW_SET_ALL_USERS = "MAIN_VIEW_SET_ALL_USERS";
export const MAIN_VIEW_FETCH_USER_SPINNER = "MAIN_VIEW_FETCH_USER_SPINNER";
export const SET_MAIN_MODAL_VALUE = "SET_MAIN_MODAL_VALUE";

export function setUsers(data) {
  return {
    type: MAIN_VIEW_SET_ALL_USERS,
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

export function fetchAllUsers() {
  return async (dispatch, getState) => {
    await dispatch(setfetchUserSpinner(true));
    try {
      const result = await fetch(`${__API__}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      let response = await result.json();
      if (response.code === 200) {
        await dispatch(setfetchUserSpinner(false));
        console.log(response.data);
        await dispatch(setUsers(response.data));
      }
    } catch (e) {
      await dispatch(setfetchUserSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  users: [],
  userSpinner: false,
};

const ACTION_HANDLERS = {
  [MAIN_VIEW_SET_ALL_USERS]: (state, action) => {
    return {
      ...state,
      users: action.payload,
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
