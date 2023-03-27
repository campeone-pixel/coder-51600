import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existe = (id) => {
    return cart.some((elemento) => {
      return elemento.id === id;
    });
  };

  // agregar
  const agregarAlCarrito = (producto) => {
    if (existe(producto.id)) {
      const nuevoCarrito = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            cantidad: producto.cantidad,
          };
        } else {
          console.log(elemento);
          return elemento;
        }
      });

      setCart(nuevoCarrito);
    } else {
      setCart([...cart, producto]);
    }
  };

  // eliminar
  const limpiarCarrito = () => {
    setCart([]);
  };

  // contar
  const cantItemsCarrito = () => {
    const total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.cantidad;
    }, 0);
    return total;
  };
  // total del precio del carrito
  const totalCarrito = () => {
    const total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.cantidad;
    }, 0);
    return total;
  };

  const eliminarItem = (id) => {
    const nuevoCarrito = cart.filter((elemento) => {
      return elemento.id !== id;
    });

    setCart(nuevoCarrito);
  };

  const data = {
    cart,
    setCart,
    limpiarCarrito,
    agregarAlCarrito,
    cantItemsCarrito,
    totalCarrito,
    eliminarItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
