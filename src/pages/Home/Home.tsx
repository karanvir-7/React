import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { Product } from "../../shared/types/product";
import Pagination from "../../components/Pagination/Pagination";
import { url } from "../../shared/utils/urls";
import { current } from "@reduxjs/toolkit";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 10;
  
  useEffect(() => {
    getProducts(limit,currentPage);
  }, []);

  function getProducts(limit:number, currentPage:number) {
    axios
      .get(url.getProducts(limit, (currentPage-1) * limit))
      .then((response) => {
        setProducts(response.data.products ?? []);
        setTotalItems(response.data.total ?? 0);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div
        className="flex flex-row flex-wrap gap-4 justify-center p-8
    "
      >
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={limit}
        currentPage={currentPage}
        getProducts={getProducts}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
