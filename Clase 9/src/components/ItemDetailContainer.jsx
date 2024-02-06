import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState();

  if(!producto)  return null

  return (
    <main className="item-detail">
      <h1 style={{ textTransform: "capitalize" }}>
        {producto.name}
      </h1>
      <section style={{ display: "flex" }}>
        <section className="pokemon-info">
          <p>Description: {producto.description}</p>
          <p>Stock: {producto.stock}</p>
          <p>Price: {producto.price}</p>
          <p>Category: {producto.category}</p>
        </section>
      </section>
    </main>
  );
}
