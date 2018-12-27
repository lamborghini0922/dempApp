import signInApi from "../APIs/signInApi";

const loginApi = (user, password) => {
  return dispatch => {
    dispatch(requestLogin());
    signInApi(user, password)
      .then(response => {
        if (response.data.status === "OK") {
          sessionStorage.setItem("cell-inspector-session", response.data);
          dispatch(receiveLoginSuccess(response.data));
        } else {
          dispatch(receiveLoginFailed());
        }
      })
      .catch(e => {
        dispatch(receiveLoginFailed());
      });
  };
};

export const logoutApi = () => {
  return dispatch => {
    dispatch(logout());
  };
};

export function logout() {
  sessionStorage.clear();
  return { type: "LOGOUT" };
}

function requestLogin() {
  return { type: "LOGIN_REQUEST" };
}

function receiveLoginSuccess(data) {
  return {
    type: "LOGIN_RECEIVE_SUCCESS",
    data: data
  };
}

function receiveLoginFailed() {
  return {
    type: "LOGIN_RECEIVE_FAILED"
  };
}

export default loginApi;
