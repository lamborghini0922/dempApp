import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import { Provider } from "react-redux";
//import rootReducer from "./reducers";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./configureStore";

//const middlewares = [thunk];

//const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
