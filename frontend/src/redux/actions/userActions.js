import { GET_USER } from "../types";
import API from "../../util/API";

const options = { headers: { "Content-Type": "application/json" } };

export const signupAction = (email, password) => async (dispath) => {
  const body = {
    email,
    password,
  };
  const url = "/auth/signup";
  try {
    const res = await API.post(url, body, options);
    dispath({ type: GET_USER, payload: res.data.user });
    console.log("res", res.data.user);
  } catch (err) {
    console.log("err", err);
  }
};

export const loginAction = (email, password) => async (dispath) => {
  console.log("LOGIN");
  const body = { email, password };
  const url = "/auth/login";
  try {
    const res = await API.post(url, body, options);
    dispath({ type: GET_USER, payload: res.data.user });
    console.log("res", res.data.user);
  } catch (err) {
    console.log("err", err);
  }
};
