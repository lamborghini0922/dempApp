import signInApi from "../APIs/signInApi";

const loginApi = (user, password) => {
  return dispatch => {
    dispatch(requestLogin());
    signInApi(user, password)
      .then(response => {
        console.log(`response=${response.data.status}`);
        if (response.data.status === "OK") {
          dispatch(receiveLoginSuccess(response.data));
        } else {
          dispatch(receiveLoginFailed());
        }
      })
      .catch(e => {
        console.log(e);
        dispatch(receiveLoginFailed());
      });
  };
};

export function logout() {
  console.log("logout");
  return { type: "LOGOUT" };
}

function requestLogin() {
  console.log("login...");
  return { type: "LOGIN_REQUEST" };
}

function receiveLoginSuccess(data) {
  console.log("login succeeded");
  return {
    type: "LOGIN_RECEIVE_SUCCESS",
    data: data
  };
}

function receiveLoginFailed() {
  console.log("login failed");
  return {
    type: "LOGIN_RECEIVE_FAILED"
  };
}

export default loginApi;
