import { Search } from 'lucide-react';
import {  SEARCHBAR,INCREMENT, DECREMENT, ADD_TO_CART, REMOVE_FROM_CART, CHN_QUANTITY } from './actions';

const initialState = {
  count: 0,
  cart: [],
  found:true,
  products: [
    { id: 1, name: 'Laptop', price: 999.99 ,quantity:1},
    { id: 2, name: 'Headphones', price: 99.99 ,quantity:1 },
    { id: 3, name: 'Mouse', price: 29.99 ,quantity:1},
    { id: 4, name: 'Remote', price: 9.99 ,quantity:1},

  ],
};

const counterReducer = (state = initialState, action) => {


  switch (action.type) {
    
    case SEARCHBAR:
  
      return {
        ...state,
        products: initialState.products.filter(item => 
          item.name.toLowerCase().includes(action.payload.trim().toLowerCase())
        ),
      };

    case CHN_QUANTITY:

      if(action.payload.quantity===0 && action.behaviour==="dec"){
      
         return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      }
      else if(action.behaviour==="inc")
        {
          return{
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
          }
          }

        else{
      return{
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ),
      }
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      case ADD_TO_CART:
        const existingProduct = state.cart.find(item => item.id === action.payload.id);
  
        if (existingProduct) {
              return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
          };
        } else {
          
          return {
            ...state,
            cart: [...state.cart, { ...action.payload }],
          };
        }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default counterReducer;
