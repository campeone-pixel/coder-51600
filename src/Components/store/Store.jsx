import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

import SyncLoader from "react-spinners/SyncLoader";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Store = () => {
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
      {items.length > 0 ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "white",
          }}
        >
          <Dropdown />
          <ItemListContainer items={items} />
        </Box>
      ) : (
        <SyncLoader
          color={"red"}
          // loading={loading}
          // cssOverride={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default Store;
