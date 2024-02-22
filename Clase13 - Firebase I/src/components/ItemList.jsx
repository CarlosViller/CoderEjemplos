import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
