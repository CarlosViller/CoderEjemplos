import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productosJson from "../productos.json";

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) {
        resolve(productosJson);
      }else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.categoria === categoryId
        })

        resolve(productosFiltrados)
      }

    }, 2000);
  });
}

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyncMock(categoryId).then((res) => setProductos(res));
  }, [categoryId]);

  return (
    <main>
      <section className="item-list-container">
        {productos.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </section>
    </main>
  );
}
