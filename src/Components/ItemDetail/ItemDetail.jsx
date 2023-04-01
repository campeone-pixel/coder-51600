import {
  Button,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import { useUserAuth } from "../Context/UserAuthContext";
import Login from "../Login/Login";

const ItemDetail = ({
  producto,
  eliminarCarrito,
  sumarCarrito,
  contador,
  onAdd,
}) => {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const [auth, setAuth] = useState(false);
  const { showUser } = useUserAuth();
  const estaLogeado = (contador) => {
    auth ? onAdd(contador) : setMostrarLogin(true);
  };
  useEffect(() => {
    showUser().currentUser !== null && setAuth(true);
  }, [auth, showUser]);

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {mostrarLogin ? (
        <div>
          <Typography>
            Inicie sesion para agregar un producto al carrito
          </Typography>
          <Login />
        </div>
      ) : (
        <Stack>
          <CardMedia
            component="img"
            sx={{ height: 240 }}
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
              onClick={() => estaLogeado(contador)}
            >
              Agregar a carrito
            </Button>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default ItemDetail;
