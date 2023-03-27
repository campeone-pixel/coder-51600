import "./ProductCard.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export const ProductCard = ({ item, onAdd }) => {
	

	let { id, img, title, description, stock, price } = item;



	return (
		<Card id={id} sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				sx={{ height: 140 }}
				image={img}
				title="green iguana"
			/>
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
		
					<Link to={`/details/${id}`}>
						<Button
							direction="row"
							columns={12}
							variant="contained"
							color="primary"
							
							
						>
							VER DETALLE
						</Button>
					</Link>
				</Stack>
			</CardActions>
		</Card>
	);
};
