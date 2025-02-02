import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ShoppingCartItem from "../ShoppingCartItem";
import Button from "../Button";
import CartContext from "../../context/cartContext";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function Cart() {
  const { cartItems, handleChange, handleRemove } = useContext(CartContext);
  return (
    <aside className="col col-4">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              unitsInStock={item.unitsInStock}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <div className="col mb-4 text-center text-warning">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getCartTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <Link to="/checkout/step-1">
                {getCartTotal(cartItems) <= 0 ? (
                  <Button disabled>Checkout</Button>
                ) : (
                  <Button>Checkout</Button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
