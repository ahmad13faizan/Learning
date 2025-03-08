import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chnQuantity, removeFromCart } from "../redux/actions";
import { Trash2 } from "lucide-react";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price*item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    dispatch(chnQuantity(item,"dec"));
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch(chnQuantity(item,"inc"));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="remove-item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
