import { createReducer } from "@reduxjs/toolkit";
import * as userAction from "./userAction";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const userReduser = createReducer(initialState, {
  [userAction.registerUser]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    token: payload.token,
    isLoggedIn: true,
  }),
  [userAction.loginUser]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    token: payload.token,
    isLoggedIn: true,
  }),
  [userAction.logoutUser]: (state) => initialState,
  [userAction.currentUser]: (state, { payload }) => ({
    ...state,
    user: payload,
    isLoggedIn: true,
  }),
  [userAction.isLoading]: (state, { payload }) => ({
    ...state,
    isLoading: payload,
  }),
});

export default userReduser;
