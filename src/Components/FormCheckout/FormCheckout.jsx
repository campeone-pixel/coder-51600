import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.number()
    .min(2, "Too Short!")

    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormCheckout = ({ cart, totalCarrito, limpiarCarrito }) => {
  const [orderID, setOrderID] = useState(null);

  const handleSubmit = (values) => {
    const order = {
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
  };

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
    <div>
      <h1>Su compra:</h1>

      {cart.map((producto) => {
        return (
          <Card sx={{ display: "flex" }}>
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
          
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" placeholder="Nombre" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" placeholder="Apellido" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="phone" placeholder="phone" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <Field name="email" type="email" placeholder="Mail" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCheckout;
