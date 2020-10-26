import { UPDATE_CART } from "../types";

const INITAL_STATE = {
  cart: [],
  total: 0,
};

const cartReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: payload.cart,
        total: payload.total,
      };

    default:
      return state;
  }
};

export default cartReducer;
