
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoria } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollections = collection(db, "productos");
    let consulta = undefined;

    if (categoria) {
      consulta = getDocs(
        query(itemsCollections, where("category", "==", categoria))
      );
    } else {
      consulta = getDocs(itemsCollections);
    }

    consulta.then((res) => {
      let productos = res.docs.map((producto) => {
        return {
          ...producto.data(),
          id: producto.id,
        };
      });
      setItems(productos);
    });
  }, [categoria]);

  return (
    <div>
  
          <ItemList items={items} />

    </div>
  );
};

export default ItemListContainer;
