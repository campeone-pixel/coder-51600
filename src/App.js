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
import Logout from "./Components/Logout/Logout"     ;      

     

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Grid container>
          <UserAuthContextProvider>
            <CartContextProvider>
              <Grid item xs={12}>
                <Navbar />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                  minHeight: "85vh",
                  backgroundColor: "white",
                }}
              >
                <Routes>
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/details/:id"
                    element={<ItemDetailContainer />}
                  />
                  <Route path="/" element={<ItemListContainer />} />
                  <Route
                    path="/categorias/:categoria"
                    element={<ItemListContainer />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/logout" element={<Logout />} />
                  

                  <Route path="*" element={<h2>Not found</h2>} />
                </Routes>
              </Grid>

              <Grid item xs={12}>
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
