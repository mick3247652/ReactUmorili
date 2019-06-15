import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const persistConfig = {
  key: "posts",
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(persistedReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
