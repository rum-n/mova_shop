import {
  // ADD_FETCHED_DATA,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../types.js";
// import axios from "axios";
// const apiUrl =
//   "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      itemId: item.itemId,
      size: item.size,
    },
  };
};

export const removeFromCart = (name) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      name,
    },
  };
};

// export const fetchData = () => {
//   return (dispatch) => {
//     return axios
//       .get(apiUrl)
//       .then((response) => {
//         return response.data;
//       })
//       .then((data) => {
//         dispatch({
//           type: ADD_FETCHED_DATA,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// };
