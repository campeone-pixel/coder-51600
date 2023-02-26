import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButttonCard() {
  return (
    <Stack spacing={2} direction="row">
     
      <Button variant="outlined">Agregar a carrito</Button>
      <Button variant="contained">Comprar</Button>
    </Stack>
  );
}


