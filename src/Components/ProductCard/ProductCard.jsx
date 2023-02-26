import "./ProductCard.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import ButttonCard from "../ButtonCard/ButtonCard";

export const ProductCard = ( {image = "https://res.cloudinary.com/djowr4szv/image/upload/v1677269935/cld-sample-5.jpg", title='ARTICULO', description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi dicta dolor similique Ea molestiae tempora sunt odit, nam officia', price} ) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image={image}
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>

        <h4> {price }</h4>
			</CardContent>
			<CardActions>
			
				<ButttonCard/>
			</CardActions>
		</Card>

    
	);
};
