var initialState = {
  session: null,
  status: 0
};

export default function login(state = initialState, action) {
  console.log("reducers/login");
  console.log(`action=${action.type}`);
  console.log(JSON.stringify(action.data));
  var _state = Object.assign({}, state);
  switch (action.type) {
    case "LOGIN_REQUEST":
      _state.status = 0;
      return _state;

    case "LOGIN_RECEIVE_SUCCESS":
      _state.status = 1;
      _state.session = action.data.result.user;
      console.log(JSON.stringify(_state));
      return _state;

    case "LOGIN_RECEIVE_FAILED":
      _state.status = -1;
      return _state;

    case "LOGOUT":
      _state.session = null;
      return _state;

    default:
      return state;
  }
}
