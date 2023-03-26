import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, limpiarCarrito, totalCarrito, eliminarItem } =
    useContext(CartContext);

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div>
            <h1>{elemento.title}</h1>
            <h2>{elemento.price}</h2>
            <h3>{elemento.cantidad}</h3>
            <button onClick={() => eliminarItem(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      {totalCarrito() > 0? (
        <div>
          <h1>El total del carrito es ${totalCarrito()}</h1>
          <button onClick={limpiarCarrito}>Limpiar carrito</button>
        </div>
      ): <h1> No tiene productos en el carrito</h1>}
    </div>
  );
};

export default Cart;    
