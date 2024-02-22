import React, { useEffect, useState } from "react";
import productosJSON from "../productos.json";
import ItemList from "./ItemList";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const categoryId = "3";

  useEffect(() => {
    const db = getFirestore();

    // Codigo para traer UN producto
    const productoRef = doc(db, "productos", "dTsWUQS9KHPZ8iBC0f3t")

    getDoc(productoRef).then((documento) => {
      if(documento.exists()) {
        console.log(documento.data(), documento.id)
      }
    });


    // Codigo para traer productos filtrados
    const productosRef = query(
      collection(db, "productos"),
      where("categoryId", "==", categoryId)
    );

    getDocs(productosRef).then((collection) => {
      const productos = collection.docs.map((doc) => {
        return doc.data();
      });


      setProducts(productos);
    });
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
