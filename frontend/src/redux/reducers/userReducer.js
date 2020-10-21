import { GET_USER } from "../types";

const INITAL_STATE = {
  user: {},
};

const userReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
