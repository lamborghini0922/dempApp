const initialState = {
  session: null,
  status: 0,
  message: "",
  buttonText: "Sign in"
};

const loginStatus = (state = initialState, action) => {
  console.log("reducers/login");
  console.log(`action=${action.type}`);
  console.log(JSON.stringify(action.data));
  var _state = Object.assign({}, state);
  switch (action.type) {
    case "LOGIN_REQUEST":
      _state.status = 0;
      _state.message = "loading...";
      _state.buttonText = "connect...";
      return _state;

    case "LOGIN_RECEIVE_SUCCESS":
      _state.status = 1;
      _state.session = action.data.result.user;
      _state.message = "login successful";
      _state.buttonText = "Sign out";
      return _state;

    case "LOGIN_RECEIVE_FAILED":
      _state.status = -1;
      _state.message = "login error";
      _state.buttonText = "Sign in";
      return _state;

    case "LOGOUT":
      _state.status = 0;
      _state.session = null;
      _state.message = "logout";
      _state.buttonText = "Sign in";
      return _state;

    default:
      return state;
  }
};

export default loginStatus;
