import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext,  useState } from "react";
import Swal from "sweetalert2";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
const CartItem = ({ elemento }) => {
  const [contador, setContador] = useState(elemento.cantidad);
  const { actualizarCantItem } = useContext(CartContext);

  const sumarCarrito = () => {
    if (contador === elemento.stock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay mas stock!",
      });
      return;
    }

    if (contador < elemento.stock) {
      setContador(contador + 1);

      actualizarCantItem(elemento.id, contador);
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
      actualizarCantItem(elemento.id, contador);
    }
  };

  return (
    <Card  sx={{ display: "flex",gap:"1em" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          {elemento.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Precio: {elemento.price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Cantidad:{elemento.cantidad}
        </Typography>
        <ItemCount
          contador={contador}
          sumarCarrito={sumarCarrito}
          eliminarCarrito={eliminarCarrito}
        />
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={elemento.img}
        alt=""
      />
    </Card>
  );
};

export default CartItem;
