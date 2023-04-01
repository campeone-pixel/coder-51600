import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const ItemCount = ({ eliminarCarrito, sumarCarrito, contador }) => {

  
  return (
    <Stack spacing={2} direction="row">
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
    </Stack>
  );
};

export default ItemCount;
