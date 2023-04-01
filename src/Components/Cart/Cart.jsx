import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";

import Swal from "sweetalert2";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Button, CardActions, Stack } from "@mui/material";

import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, limpiarCarrito, totalCarrito,actualizarCantItem } = useContext(CartContext);

  const [quiereComprar, setQuiereComprar] = useState(false);

  if (quiereComprar) {
    return (
      <div>
        <FormCheckout
          cart={cart}
          totalCarrito={totalCarrito}
          limpiarCarrito={limpiarCarrito}
        />
      </div>
    );
  }

  const borrarCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        
        justifyItems: "flex-start",
       gap:"2em"
      }}
    >
      <Stack sx={{ gap: "1em" }}>
        {cart.map((elemento) => {
          return <CartItem key={elemento.id} elemento={elemento} actualizarCantItem = {actualizarCantItem} />;
        })}
      </Stack>

      {totalCarrito() > 0 ? (
        <Card sx={{ height: "200px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              El total del carrito es ${totalCarrito()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={borrarCart}>
              Borrar Carrito
            </Button>
            <Button
              size="small"
              onClick={() => {
                setQuiereComprar(true);
              }}
            >
              COMPRAR
            </Button>
          </CardActions>
        </Card>
      ) : (
        <h1> No tiene productos en el carrito</h1>
      )}
    </Stack>
  );
};

export default Cart;
