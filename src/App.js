import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./Components/Context/UserAuthContext";

import Cart from "./Components/Cart/Cart";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import CartContextProvider from "./Components/Context/CartContext";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Grid container
        sx={{display:"flex",flexDirection:"column", minHeight:"100vh"}}>
          <UserAuthContextProvider>
            <CartContextProvider>
              <Grid item xs={12} >
                <Navbar />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  minHeight:"90vh",
                  flexGrow: "1",
                  padding:"2em",
                  backgroundColor:"#EFF9F0"
                }}
              >
                <Routes>
                  <Route element={<RequireAuth />}>
                    <Route path="/carrito" element={<Cart />} />
                  </Route>
                  <Route
                    path="/detalles/:id"
                    element={<ItemDetailContainer />}
                  />
                  <Route path="/" element={<ItemListContainer />} />
                  <Route
                    path="/categorias/:categoria"
                    element={<ItemListContainer />}
                  />
                  <Route path="/inicio" element={<Login />} />
                  <Route path="/registro" element={<Signup />} />

                  <Route path="*" element={<h2>Not found</h2>} />
                </Routes>
              </Grid>

              <Grid item xs={12} sx={{minHeight:"10vh"}}>
                <Footer />
              </Grid>
            </CartContextProvider>
          </UserAuthContextProvider>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
