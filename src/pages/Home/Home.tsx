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
      .then((response) => {
        setProducts(response.data.products ?? []);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center p-8
    ">
      {products.map((product: any) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
