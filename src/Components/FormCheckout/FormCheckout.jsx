import {  useFormik } from "formik";

import * as yup from 'yup';
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useUserAuth } from "../Context/UserAuthContext";

const SignupSchema = yup.object({
  firstName: yup
    .string('Enter your email')
  
    .required('Email is required'),
    lastName: yup
    .string('Enter your password')
    
    .required('Password is required'),
    phone: yup
    .string('Enter your password')
   
    .required('Password is required'),
    cardName: yup
    .string('Enter your password')
   
    .required('Password is required'),
    cardNumber: yup
    .number('Enter your password')
    
    .required('Password is required'),
    cardExp: yup
    .number('Enter your password')
   
    .required('Password is required'),
    cvv: yup
    .number('Enter your password')
    
    .required('Password is required'),
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
        mail:showUser().currentUser.email,
        user: values,
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
      <div>
        <h1>La compra fue realizada con exito</h1>
        <h3>El numero de ID de su compra es: {orderID}</h3>
        <Link to="/">
          <button>Volver al Ecommerce</button>
        </Link>
      </div>
    );
  }

  return (
    <Grid
      container
      sx={{
        padding: "4em",
      }}
    >
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Articulos
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
              label="Name on card"
              autoComplete="cc-name"
              variant="standard"
              value={formik.values.cardName}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cardNumber"
              id="cardNumber"
              fullWidth
              label="Card number"
              autoComplete="cc-number"
              variant="standard"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cardExp"
              id="expDate"
              fullWidth
              label="Expiry date"
              autoComplete="cc-exp"
              variant="standard"
              value={formik.values.cardExp}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cvv"
              id="cvv"
              label="CVV"
              fullWidth
              helperText="Last three digits on signature strip"
              autoComplete="cc-csc"
              variant="standard"
              value={formik.values.cvv}
              onChange={formik.handleChange}
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
