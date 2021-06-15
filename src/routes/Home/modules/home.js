export const SET_MAIN_VIEW_USER = "SET_MAIN_VIEW_USER";
export const SET_MAIN_UPATED_USER = "SET_MAIN_UPATED_USER";
export const SET_MAIN_USER_UPDATED_VALUES = "SET_MAIN_USER_UPDATED_VALUES";

export function setFormFieldSpinner(flag) {
  return {
    type: REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS,
    payload: flag,
  };
}

export function setUpdatedValues(data) {
  return {
    type: SET_MAIN_USER_UPDATED_VALUES,
    payload: data,
  };
}

export function setUser(data) {
  return {
    type: SET_MAIN_VIEW_USER,
    payload: data,
  };
}

export function fetchFormFields(id) {
  return async (dispatch, getState) => {
    await dispatch(setFormFieldSpinner(true));
    try {
      const result = await fetch(`${__API__}/get/registration/fields/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      let response = await result.json();
      if (response.success === 200) {
        await dispatch(setFormFieldSpinner(false));
        await dispatch(setFormFields(response.data));
        await dispatch(setFieldNames(response.data));
      }
    } catch (e) {
      await dispatch(setFormFieldSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  formSpinner: false,
  formValue: {},
  errMessage: {
    msg: "",
    field: "",
  },
  modal: "",
};

const ACTION_HANDLERS = {
  [SET_MAIN_USER_UPDATED_VALUES]: (state, action) => {
    return {
      ...state,
      formValue: action.payload,
    };
  },
  // [SET_REGISTER_ERR_MESSAGE]: (state, action) => {
  //   return {
  //     ...state,
  //     errMessage: action.payload,
  //   };
  // },
};

export default function RegisterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
