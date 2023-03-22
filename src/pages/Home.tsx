import React from "react";
import Card from "../component/Card";
import data from "../data";
import { ProductType } from "../types/ProductTpye";

const Home = () => {
  return (
    <div>
      {data.map((product: ProductType, index: number) => (
        <Card product={product}/>
      ))}
    </div>
  );
};

export default Home;
