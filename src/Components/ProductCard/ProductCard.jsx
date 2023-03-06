import "./ProductCard.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";


export const ProductCard = ({item,onAdd}) => {
	let [contador, setContador] = useState(1);
	
	let {	id,
		img,
		title ,
		description ,
		stock,
		price
		
		} = item

	const sumarCarrito  = () => {
		if(contador < stock)
		{setContador(contador + 1);}
	};

	const eliminarCarrito = () => {
		if(contador!==0){setContador(contador - 1)}
	};

	return <Card id={id} sx={{ maxWidth: 345 }}>
			<CardMedia component="img" sx={{ height: 140 }} image={img} title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>

				<h4> Precio: {price}</h4>
				<h4> Stock: {stock}</h4>
			</CardContent>
			<CardActions>
				<Stack spacing={2} direction="row">
				<Button variant="contained"  onClick={eliminarCarrito}>
						-
					</Button>
					<Typography  variant='p' style={{display:'flex',alignItems:'center',fontSize:"2em"}}>{contador}</Typography>
					<Button variant="contained" onClick={sumarCarrito}>
						+
					</Button>

					<Button variant="contained" color="secondary" onClick={()=>{onAdd(contador)}}>
						Agregar a carrito
					</Button>
					
				
				</Stack>
			</CardActions>
		</Card>
	
};
