import * as actionTypes from "./cart-types";

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const viewItem = (itemId) => {
  return {
    type: actionTypes.VIEW_CURRENT_ITEM,
    payload: {
      id: itemId,
    },
  };
};
