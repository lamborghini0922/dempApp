import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

// 永続化の設定
const persistConfig = {
  key: "cell-inspector", // Storageに保存されるキー名を指定する
  storage // 保存先としてlocalStorageがここで設定される
  //whitelist: ['todos'] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const middlewares = [thunk];

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default store;
