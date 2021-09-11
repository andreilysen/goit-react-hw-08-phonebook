import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const registerUser = async (registerData) => {
  const { data } = await axios.post("/users/signup", registerData);
  return data;
};

export const loginUser = async (loginData) => {
  const { data } = await axios.post("/users/login", loginData);
  console.log(`data`, data);
  return data;
};

export const currentUser = async () => {
  const { data } = await axios.get("/users/current");
  return data;
};

export const logoutUser = async () => {
  await axios.post("/users/logout");
};
