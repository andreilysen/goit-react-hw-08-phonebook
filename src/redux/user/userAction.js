import { createAction } from "@reduxjs/toolkit";

export const registerUser = createAction("registerUser");
export const loginUser = createAction("loginUser");
export const logoutUser = createAction("logoutUser");
export const currentUser = createAction("currentUser");
export const isLoading = createAction("isLoading");
export const error = createAction("error");
