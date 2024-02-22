import React from "react";

const Item = ({ product }) => {
  return (
    <li>
      <div className="product-card">
        <img
          src="placeholder-image.jpg"
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <div className="product-image">
            <img src={product.imageId} />
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="price-stock">
            <p className="product-price">${product.price}</p>
            <p className="product-stock">Stock: {product.stock}</p>
          </div>
          <p className="category-id">Category ID: {product.categoryId}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
