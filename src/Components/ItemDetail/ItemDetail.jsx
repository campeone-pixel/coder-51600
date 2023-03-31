import {
  Button,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const ItemDetail = ({
  producto,
  eliminarCarrito,
  sumarCarrito,
  contador,
  onAdd,
}) => {
  return (
    <Container
      sx={{
       height:"100%",
       display:"flex",
       alignItems:"center"
      }}
    >
      <Stack
    
      >
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
            onClick={() => onAdd(contador)}
          >
            Agregar a carrito
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ItemDetail;
