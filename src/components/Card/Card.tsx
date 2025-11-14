import React from "react";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cartSlice';
import { Product } from "../../shared/interface/product";

const Card: React.FC<{ product: Product }> = ({ product }) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.ADD_TO_CART(product));
  }

  return (
    <div className="card w-96 bg-base-100 shadow border border-base-300">
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
          <button className="btn btn-primary" onClick={addToCart}>Add To Cart</button>
          <button className="btn btn-info">Buy Now</button>
          <button className="btn btn-info">View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
