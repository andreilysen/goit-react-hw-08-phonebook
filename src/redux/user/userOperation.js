import * as userAPI from "../../service/user-API";
import axios from "axios";
import * as userAction from "./userAction";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (registerData) => async (dispatch) => {
  dispatch(userAction.isLoading(true));
  try {
    const data = await userAPI.registerUser(registerData);
    token.set(data.token);
    dispatch(userAction.registerUser(data));
  } catch (error) {
    dispatch(userAction.error(error));
  } finally {
    dispatch(userAction.isLoading(false));
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(userAction.isLoading(true));

  try {
    const result = await userAPI.loginUser(loginData);
    console.log(`result`, result);
    token.set(result.token);
    dispatch(userAction.loginUser(result));
  } catch (error) {
    dispatch(userAction.error(error));
  } finally {
    dispatch(userAction.isLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await userAPI.logoutUser();
    token.unset();
    dispatch(userAction.logoutUser());
  } catch (error) {}
};

export const currentUser = (curToken) => async (dispatch) => {
  if (curToken === null) {
    return;
  }
  dispatch(userAction.isLoading(true));

  token.set(curToken);
  try {
    const result = await userAPI.currentUser();
    dispatch(userAction.currentUser(result));
  } catch (error) {
    dispatch(userAction.error(error));
  } finally {
    dispatch(userAction.isLoading(false));
  }
};
