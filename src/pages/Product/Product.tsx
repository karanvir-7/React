import React, { useEffect, useState } from "react";
import api from "../../shared/utils/interceptor";
import { endpoints } from "../../shared/utils/endpoints";
import { useParams } from "react-router-dom";
import { useMemo } from "react"; 
import { getOriginalPriceFromDiscounted } from "../../shared/utils/price";

const Product: React.FC = () => {
    const [product, setProduct] = useState<any>(null);
    const { productId } = useParams<{ productId: string }>();
    useEffect(() => getProductDetails() ,[productId]);

    const getProductDetails = () =>{
        if (!productId) return;
        api.get(endpoints.getProductDetails(productId)).then((response)=>{
            setProduct(response.data);
            console.log("Product Details:", response.data);
        }).catch((error)=>{
            console.error("Error fetching product details:", error);
        })
    } 

    const originalPrice = useMemo(() => {
        if (!product?.discountPercentage || product?.discountPercentage <= 0) return null;
        if (!product?.price) return null;
        return getOriginalPriceFromDiscounted(product.price, product.discountPercentage);
    }, [product]);

    return <>
    <div className="grid grid-cols-2 gap-4">
        <div>
            <img src={product?.images[0]} alt={product?.title} />
        </div>
        
        <div className="p-7">
            <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
            <p className="text-gray-700 mb-2">{product?.description}</p>
            <hr className="p-3"/>
            <div className="py-1">
                <span className="text-xl font-semibold mb-4">${product?.price} </span>
                                {originalPrice && (
                                    <span className="text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</span>
                                )}
                {product?.discountPercentage && (
                  <span className="text-green-600 ml-2">-{product.discountPercentage}%</span>
                )}
            </div>
        
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
    </div>
    </>;
};

export default Product;