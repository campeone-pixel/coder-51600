import {
  Button,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { getDoc, collection, doc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";

import { CartContext } from "../Context/CartContext";

const Details = () => {
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProducto({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  let [contador, setContador] = useState(1);

  const onAdd = (cantidad) => {
    const productoMasCant = { ...producto, cantidad: cantidad };

    agregarAlCarrito(productoMasCant);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto fue agreagado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const sumarCarrito = () => {
    if (contador === producto.stock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay mas stock!",
      });
      return;
    }

    if (contador < producto.stock) {
      setContador(contador + 1);
    }
  };

  const eliminarCarrito = () => {
    if (contador === 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes comprar 0!",
      });
      return;
    }
    if (contador !== 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>{producto.title}</h1>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={producto.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.description}
        </Typography>

        <h4> Precio: {producto.price}</h4>
        <h4> Stock: {producto.stock}</h4>
      </CardContent>

      <Stack direction="row">
        <Button variant="contained" onClick={eliminarCarrito}>
          -
        </Button>
        <Typography
          variant="p"
          style={{ display: "flex", alignItems: "center", fontSize: "2em" }}
        >
          {contador}
        </Typography>
        <Button variant="contained" onClick={sumarCarrito}>
          +
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onAdd(contador);
          }}
        >
          Agregar a carrito
        </Button>
      </Stack>
    </div>
  );
};

export default Details;
