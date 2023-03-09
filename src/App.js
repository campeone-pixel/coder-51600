import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./Components/store/Store";
import Details from "./Components/Details/Details";
import Index from "./Components/Index/Index";
import Cart from "./Components/Cart/Cart";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

function App() {
	return (
		<BrowserRouter>
			<Box>
				<Grid container>
					<Grid item xs={12}>
						<Navbar />
					</Grid>

					<Grid item xs={12}>
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/details/:id" element={<Details />} />
							<Route path="/store" element={<Store />} />
							<Route path="/categorias/:categoria" element={<Store />} />
							<Route path="*" element={<h2>Not found</h2>}/>
							<Route path="/about" element={<h2>Estoy en el about</h2>} ></Route>
						</Routes>
					</Grid>

					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>
			</Box>
		</BrowserRouter>
	);
}

export default App;
