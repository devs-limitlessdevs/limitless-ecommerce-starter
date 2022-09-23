import * as React from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((previousQty) => previousQty + 1);
  };

  const decreaseQty = () => {
    setQty((previousQty) => {
      if (previousQty - 1 < 1) return 1;

      return previousQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        qty,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
