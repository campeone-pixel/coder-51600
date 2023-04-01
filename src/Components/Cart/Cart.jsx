import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../Context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";


import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {  Button, CardActions, Container, Stack } from "@mui/material";

const Cart = () => {
  const { cart, limpiarCarrito, totalCarrito } =
    useContext(CartContext);

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
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        gap: "2em",
        padding:"2em",

        justifyContent: "center",
        alignItems: "flex-start",
      }}
     
    >
      <Stack sx={{gap:"1em"}}>
      {cart.map((elemento) => {
        return (
  

          <Card key={elemento.id} sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {elemento.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {elemento.price}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {elemento.description}
              </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={elemento.img}
                alt=""
              />
          </Card>
        );
      })}
      </Stack>

   
      {totalCarrito() > 0 ? (
      <Card sx={{ minWidth: 275,height:"110px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        El total del carrito es ${totalCarrito()}
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small" onClick={borrarCart}>Borrar Carrito</Button>
        <Button size="small"  onClick={() => {
            setQuiereComprar(true);
          }}>COMPRAR</Button>
      </CardActions>
    </Card>

      ) : (
        <h1> No tiene productos en el carrito</h1>
      )}
    </Container>
  );
};

export default Cart;
