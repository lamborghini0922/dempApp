import classifyApi from "../APIs/classifyApi";

const classifyAction = request => {
  console.log("classifyAction");
  return dispatch => {
    dispatch(requestClassifyAction(request));
    classifyApi(request)
      .then(response => {
        console.log(`response=${response.data.status}`);
        if (response.data.status === "OK") {
          dispatch(receiveClassifyActionSuccess(response.data));
        } else {
          dispatch(receiveClassifyActionFailed());
        }
      })
      .catch(e => {
        console.log(e);
        dispatch(receiveClassifyActionFailed());
      });
  };
};

function requestClassifyAction(request) {
  console.log("request classify...");
  return {
    type: "CLASSIFY_REQUEST",
    request: request
  };
}

function receiveClassifyActionSuccess(data) {
  console.log("classify succeeded");
  console.log(JSON.stringify(data));
  return {
    type: "CLASSIFY_RECEIVE_SUCCESS",
    response: data
  };
}

function receiveClassifyActionFailed() {
  console.log("classify failed");
  return {
    type: "CLASSIFY_RECEIVE_FAILED"
  };
}

export default classifyAction;
