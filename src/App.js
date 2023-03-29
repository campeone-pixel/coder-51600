import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";


import Cart from "./Components/Cart/Cart";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";


import CartContextProvider from "./Components/Context/CartContext";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

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

            <Grid item xs={12}>
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/details/:id" element={<ItemDetailContainer />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categorias/:categoria" element={<ItemListContainer />} />
                
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
