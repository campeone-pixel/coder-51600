import { useFormik } from "formik";

import * as yup from "yup";
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useUserAuth } from "../Context/UserAuthContext";

const SignupSchema = yup.object({
  firstName: yup
    .string("Ingrese su nombre")
    .min(5, "Minimo de 16 numeros")
    .required("Requerido"),
  lastName: yup
    .string("Ingrese su apellido")
    .min(5, "Minimo de 16 numeros")
    .required("Password is required"),
  phone: yup
    .string("Ingrese su telefono")
    .min(9, "Minimo de 16 numeros")
    .required("Requerido"),
  cardName: yup
    .string("Ingrese el nombre de duenio de la tarjeta")
    .min(5, "Minimo de 10 numeros")
    .required("Requerido"),
  cardNumber: yup
    .number("Ingrese el numero de la tarjeta")
    .min(16, "Minimo de 16 numeros")

    .required("Requerido"),
  cardExp: yup
    .number("Ingrese vencimiento")
    .min(4, "Minimo 4")

    .required("Requerido"),
  cvv: yup
    .number("Ingrese el cvv")
    .min(3, "Minimo de 3 numeros")

    .required("Requerido"),
});

const FormCheckout = ({ cart, totalCarrito, limpiarCarrito }) => {
  const [orderID, setOrderID] = useState(null);
  const { showUser } = useUserAuth();

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    cardName: "",
    cardNumber: 0,
    cardExp: 0,
    cvv: 0,
  };

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const order = {
        user: { mail: showUser().currentUser.email, ...values },
        cart: cart,
        total: totalCarrito(),
      };

      const colRef = collection(db, "orders");

      addDoc(colRef, order)
        .then((res) => {
          setOrderID(res.id);
          limpiarCarrito();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      cart.forEach((producto) => {
        let refDoc = doc(db, "productos", producto.id);
        updateDoc(refDoc, { stock: producto.stock - producto.cantidad });
      });
    },
  });

  if (orderID) {
    return (
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Pago realizado
          </Typography>

          <Typography variant="h5" gutterBottom>
            Gracias por tu compra.
          </Typography>
          <Typography variant="subtitle1">
            El numero de tu orden de compra es # {orderID}. Te enviamos un mail
            con el detalle de la compra, y te avisaremos cuando tu compra fue
            enviada.
          </Typography>

          <Link to="/">
            <Button>Volver a la Tienda</Button>
          </Link>
        </Paper>
      </Container>
    );
  }

  return (
    <Grid
      container
      sx={{
        padding: "4em",
        gap: "1em",
      }}
    >
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Articulos
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", gap: "2em" }}
      >
        {cart.map((producto) => {
          return (
            <Card key={producto.id} sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={producto.img}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {producto.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Cantidad: {producto.cantidad}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          );
        })}

        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Total compra: {totalCarrito()}
              </Typography>
              <Typography component="div" variant="h5">
                Usuario: {showUser().currentUser.email}
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
      </Grid>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="div" variant="h5">
              Datos personales
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="firstName"
              fullWidth
              placeholder="Nombre"
              variant="standard"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="lastName"
              label="Apellido"
              placeholder="Apellido"
              variant="standard"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="phone"
              fullWidth
              label="Telefono"
              placeholder="Telefono"
              variant="standard"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Metodo de pagos
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cardName"
              id="cardName"
              fullWidth
              label="Nombre en la tarjeta"
              autoComplete="cc-name"
              variant="standard"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              error={formik.touched.cardName && Boolean(formik.errors.cardName)}
              helperText={formik.touched.cardName && formik.errors.cardName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cardNumber"
              id="cardNumber"
              fullWidth
              label="Numero de la tarjeta"
              autoComplete="cc-number"
              variant="standard"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cardExp"
              id="expDate"
              fullWidth
              label="Fecha de vencimiento"
              autoComplete="cc-exp"
              variant="standard"
              value={formik.values.cardExp}
              onChange={formik.handleChange}
              error={formik.touched.cardExp && Boolean(formik.errors.cardExp)}
              helperText={formik.touched.cardExp && formik.errors.cardExp}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cvv"
              id="cvv"
              label="CVV"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit">Comprar</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default FormCheckout;
