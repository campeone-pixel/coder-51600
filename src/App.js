
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";




import { Navbar } from "./Components/Navbar/Navbar";
import {Footer} from './Components/Footer/Footer'

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";





function App() {
	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "100vh",
				backgroundColor: "primary.dark",
			}}
		>
			<Grid container >
				<Grid item xs={12}>
					<Navbar />
				</Grid>



				<Grid  item xs={12}>
					<ItemListContainer/>
					
					
				</Grid>

				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		</Box>
	);
};


export default App;






