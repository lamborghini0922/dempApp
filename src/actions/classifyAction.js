import classifyApi from "../APIs/classifyApi";

const classifyAction = request => {
  return dispatch => {
    dispatch(requestClassifyAction(request));
    classifyApi(request)
      .then(response => {
        if (response.data.status === "OK") {
          dispatch(receiveClassifyActionSuccess(response.data));
        } else {
          dispatch(receiveClassifyActionFailed());
        }
      })
      .catch(e => {
        dispatch(receiveClassifyActionFailed());
      });
  };
};

function requestClassifyAction(request) {
  return {
    type: "CLASSIFY_REQUEST",
    request: request
  };
}

function receiveClassifyActionSuccess(data) {
  return {
    type: "CLASSIFY_RECEIVE_SUCCESS",
    response: data
  };
}

function receiveClassifyActionFailed() {
  return {
    type: "CLASSIFY_RECEIVE_FAILED"
  };
}

export default classifyAction;
