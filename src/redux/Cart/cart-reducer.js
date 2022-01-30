import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.VIEW_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
