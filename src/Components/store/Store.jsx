
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { products } from "../../productMock";


import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Store = () => {
	const  {categoria} = useParams()

	const [items, setItems] = useState([]);
	
	
	
	
	useEffect(() => {
		const item_categoria = products.filter((item) => {
			return item.categoria === categoria;
		});
		const productList = new Promise((resolve, reject) => {
			resolve(categoria ? item_categoria:products);
		});

		productList
			.then((resolve) => {
				setItems(resolve);
			})
			.catch((e) => {});
	}, [categoria]);


	
	return (
		<div>
			
		

      <Box 		sx={{
					width: "100%",
					minHeight: "100vh",
					backgroundColor: "white",
				}}>
				<Dropdown/>
        <ItemListContainer items = {items} />
      </Box>
		</div>
	);
};

export default Store;
