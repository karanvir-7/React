
import React from "react";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {

  const cart = useSelector((state: any) => state.cart);
  console.log(cart)
  return (
    <div>
        {cart.length}
    </div>
  );
};

export default Cart;
