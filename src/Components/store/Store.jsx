
import { Box } from "@mui/material";
import React from "react";

import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Store = () => {
	return (
		<div>
	

      <Box 		sx={{
					width: "100%",
					minHeight: "100vh",
					backgroundColor: "primary.dark",
				}}>
        <ItemListContainer />
      </Box>
		</div>
	);
};

export default Store;
