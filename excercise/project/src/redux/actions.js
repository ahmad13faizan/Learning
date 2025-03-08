// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHN_QUANTITY= 'CHN_QUANTITY';
export const SEARCHBAR='SEARCHBAR';

// Action Creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const chnQuantity =(product,behaviourVal)=>({
  type: CHN_QUANTITY,
  payload:product,
  behaviour:behaviourVal
})

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
})

  export const searchBar=(searchString)=>({
    type:SEARCHBAR,
    payload:searchString,

});
