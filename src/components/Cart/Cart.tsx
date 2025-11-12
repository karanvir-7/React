import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Cart: React.FC = () => {
  const cart = useSelector((state: any) => state?.cartSlice?.cartItems ?? []);

  return (
    <div className="relative inline-block">
      <ShoppingCartIcon className="h-8 w-8 text-gray-700" />
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
        {cart.length}
      </span>
    </div>
  );
};

export default Cart;
