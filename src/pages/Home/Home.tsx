import React, { useEffect, useState } from "react";
import axios from "axios";
const Home: React.FC = () => {
   const [data, setData] = useState(null);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
         console.log(response);
         return response.json();
      })
      .then(json => console.log(json))
      .catch(error => console.error(error));
      
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
   }, []);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
