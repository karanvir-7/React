import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("https://dummyjson.com/products")
      .then((response: any) => {
        setProducts(response.data.products ?? []);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      {products.map((product: any) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </>
  );
};

export default Home;
