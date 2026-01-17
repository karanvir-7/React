import React, { useEffect, useState } from "react";
import api from "../../shared/utils/interceptor";
import { endpoints } from "../../shared/utils/endpoints";
import { Params, useParams } from "react-router-dom";

const Product: React.FC = () => {
    const [product, setProduct] = useState<any>(null);
    const  { productId } = useParams<Params>(); 
    useEffect(() => getProductDetails() ,[productId]);

    const getProductDetails = () =>{
        if(!productId) return;
        api.get(endpoints.getProductDetails(productId)).then((response)=>{
            setProduct(response.data);
            console.log("Product Details:", response.data);
        }).catch((error)=>{
            console.error("Error fetching product details:", error);
        })
    } 

    return <>

    </>;
};

export default Product;