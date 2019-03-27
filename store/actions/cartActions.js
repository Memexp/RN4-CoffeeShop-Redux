import * as actionTypes from "./types";

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const checkoutCart = () => {
  return {
    type: actionTypes.CHECKOUT
  };
};
