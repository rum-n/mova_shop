import { ADD_TO_CART, REMOVE_FROM_CART } from "../types.js";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name: item.name,
      itemId: item.itemId,
      price: item.price,
      size: item.size,
      img: item.img,
    },
  };
};

export const removeFromCart = (itemId) => {
  console.log(itemId);
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
