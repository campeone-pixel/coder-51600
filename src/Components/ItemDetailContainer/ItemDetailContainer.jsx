
import { getDoc, collection, doc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";

import { CartContext } from "../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  
  const { agregarAlCarrito, cart } = useContext(CartContext);
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  let [contador, setContador] = useState(1);

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProducto({
        ...res.data(),
        id: res.id,
      });
    });

    const existeProductoCarrito = cart.some((elemento) => {
      return elemento.id === producto.id;
    });

    const productoEnCarrito = cart.filter((elemento) => {
      return elemento.id === producto.id;
    });

    if (existeProductoCarrito) {
      setContador(productoEnCarrito[0].cantidad);
    }
  }, [cart, id, producto.id]);

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
      <ItemDetail
      producto = {producto}
      eliminarCarrito = {eliminarCarrito}
      sumarCarrito = {sumarCarrito}
      contador = {contador}
      onAdd = {onAdd}
      />

      
    </div>
  );
};

export default ItemDetailContainer;
