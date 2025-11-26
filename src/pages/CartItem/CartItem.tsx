import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../../shared/interface/product";
import { State } from "../../shared/interface/state";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CartItem: React.FC = () => {
  const cart = useSelector((state: State) => state?.cartSlice?.cartItems ?? []);

  return (
    <>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <ShoppingBagIcon className="h-40 w-40 text-gray-700" />
          <h1>Your cart is empty</h1>
          <Link to="/" className="text-blue-600 underline italic">
            Go Shopping
          </Link>
        </div>
      )}
      {cart.map((product: Product) => (
        <div className="card w-96 bg-base-100 card-lg shadow border border-base-300">
          <figure>
            <img
              src={product?.images?.[0] ?? "https://placeimg.com/400/225/arch"}
              alt="Shoes"
              className="h-45 w-40 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.title ?? "-"}</h2>
            <p>{product?.description ?? "-"}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
