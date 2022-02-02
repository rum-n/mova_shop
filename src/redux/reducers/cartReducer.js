import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((e) => {
        if (e.itemId !== action.payload.id.id) {
          return true;
        }
        return false;
      });
    default:
      return state;
  }
}
