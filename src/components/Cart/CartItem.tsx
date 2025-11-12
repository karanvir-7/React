import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartItem: React.FC = () => {
  const cart = useSelector((state: any) => state?.cartSlice?.cartItems ?? []);

  return (
    <>
      { cart.map((product:any) => (    
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
    </div>))}
    </>
  
  );
};

export default CartItem;
