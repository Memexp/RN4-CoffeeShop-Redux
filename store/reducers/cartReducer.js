import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  quantity: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let newItem = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );

      if (newItem) {
        newItem.quantity += action.payload.quantity;
        return {
          ...state,
          items: [...state.items],
          quantity: state.quantity + action.payload.quantity
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload),
          quantity: state.quantity + action.payload.quantity
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
        quantity: state.quantity - action.payload.quantity
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
        quantity: 0
      };
    default:
      return state;
  }
};

export default cartReducer;
