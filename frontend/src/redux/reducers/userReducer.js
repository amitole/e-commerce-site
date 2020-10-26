import { GET_USER, LOGOUT } from "../types";

const INITAL_STATE = {
  user: {
    clearance: "",
    email: "",
    _id: "",
  },
};

const userReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return INITAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
