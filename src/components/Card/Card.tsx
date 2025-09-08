import React from "react";

const Card: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure>
        <img
          src={product?.images?.[0] ?? "https://placeimg.com/400/225/arch"}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.title ?? "-"}</h2>
        <p>
         {product?.description ?? "-"}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
