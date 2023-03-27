import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../Context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";


const Cart = () => {
  const { cart, limpiarCarrito, totalCarrito, eliminarItem } =
    useContext(CartContext);

  const [quiereComprar, setQuiereComprar] = useState(false)



  if(quiereComprar){
    return(
      <div>
        <FormCheckout cart={cart} totalCarrito = {totalCarrito} limpiarCarrito = {limpiarCarrito}/>
      </div>
    )
  }

  const borrarCart = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito() ;
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
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
          <button onClick={borrarCart}>Limpiar carrito</button>
          <button onClick={()=>{setQuiereComprar(true)}}>Terminar la compra
          </button>
        </div>
      ): <h1> No tiene productos en el carrito</h1>}
    </div>
  );
};

export default Cart;    
