import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
} from "../actions/actionTypes";

const cartInitialState = {
  cartProducts: [],
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartProducts: action.payload };
    case REMOVE_FROM_CART:
      return { ...state, cartProducts: action.product_id };
    case CHECKOUT:
      return { ...state, cartProducts: [] };
    default:
      return state;
  }
};

export default cartReducer;