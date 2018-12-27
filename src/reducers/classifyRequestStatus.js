const initialState = {
  request: null,
  response: null,
  status: 0,
  message: ""
};

const classifyRequestStatus = (state = initialState, action) => {
  var _state = Object.assign({}, state);
  console.log(
    `classifyRequestStatus action=${action.type} request=${
      action.request
    } response=${action.response}`
  );
  switch (action.type) {
    case "CLASSIFY_REQUEST":
      _state.status = 2;
      _state.request = action.request;
      _state.message = "loading...";
      return _state;

    case "CLASSIFY_RECEIVE_SUCCESS":
      _state.status = 1;
      _state.response = action.response;
      _state.message = "classify successful";
      return _state;

    case "CLASSIFY_RECEIVE_FAILED":
      _state.status = -1;
      _state.message = "classify error";
      return _state;

    default:
      return state;
  }
};

export default classifyRequestStatus;
