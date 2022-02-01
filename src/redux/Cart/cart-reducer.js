import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id ? { ...item } : item
            )
          : [...state.cart, { item }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.VIEW_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
