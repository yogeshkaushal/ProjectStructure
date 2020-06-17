import { LOADING_STATUS, LOGIN_USER } from "./types";

/** Sign in user using credentials*/
export const signIn = (email, password) => {
    return async (dispatch, getState) => {
      dispatch({ type: LOADING_STATUS, payload: true });
      try {
        const res = await executePostRequest('auth/login/', {
          email: email,
          password: password,
        });
        dispatch({ type: LOADING_STATUS, payload: false });
        if (res.status.code !== 200) {
          throw res.status.message[0].error;
        }
        dispatch({ type: LOGIN_USER, payload: res.data });
        return { success: res.data };
      } catch (err) {
        dispatch({ type: LOADING_STATUS, payload: false });
        return { error: err };
      }
    };
  };