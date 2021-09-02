import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import contactReducer from "./contactsReducer";

const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
