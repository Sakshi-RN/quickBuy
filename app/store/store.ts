import { configureStore } from "@reduxjs/toolkit";
import { Middleware, combineReducers } from "redux";
import { AuthReducer } from "./reducers/AuthReducer";
import { CategoryReducer } from "./reducers/CategoryReducer";
import { CartReducer } from "./reducers/CartReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { OrderReducer } from "./reducers/OrderReducer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loggerMiddleware: Middleware<{}> = (store) => (next) => (action) => {
  console.log("⌛ State before dispatch:", store.getState());
  const result = next(action);
  console.log("✅ State after dispatch:", store.getState());
  return result;
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: AuthReducer.reducer,
  cart: CartReducer.reducer,
  category: CategoryReducer.reducer,
  order: OrderReducer.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) => {
    return getDefaultMiddlware().concat(loggerMiddleware, sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
