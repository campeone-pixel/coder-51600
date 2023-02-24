
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Navbar } from "../Navbar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ProductCard from "../ProductCard/ProductCard";
import {Footer} from '../Footer/Footer'



export const Main = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				backgroundColor: "primary.dark",
			}}
		>
			<Grid container >
				<Grid item xs={12}>
					<Navbar />
				</Grid>

				<Grid item xs={12}>
					<ItemListContainer title={"Hola como estas?"} />
				</Grid>

				<Grid item xs={12}>
					<ProductCard title="titulo 1" price="200" isRed={true} />
					<ProductCard title="titulo 2" price="300" isRed={false} />
					<ProductCard title="titulo 3" price="400" isRed={true} />
				</Grid>

				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		</Box>
	);
};
