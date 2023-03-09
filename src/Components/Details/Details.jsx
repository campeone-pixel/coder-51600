import {
	Button,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";

const Details = () => {
	const { id } = useParams();
	console.log(id);
	// const [items, setItems] = useState([]);

	// useEffect(() => {
	// 	const productList = new Promise((resolve, reject) => {
	// 		resolve(products);
	// 	});

	// 	productList
	// 		.then((resolve) => {
	// 			setItems(resolve);

	// 		})
	// 		.catch((e) => {});
	// }, []);

	const {
		id: id_single,
		img,
		title,
		description,
		stock,
		price,
	} = products.find((product) => product.id === Number(id));

	let [contador, setContador] = useState(1);

	const onAdd = (cantidad) => {
		console.log(`se agrego al carrito ${cantidad} elementos`);
	};

	const sumarCarrito = () => {
		if (contador < stock) {
			setContador(contador + 1);
		}
	};

	const eliminarCarrito = () => {
		if (contador !== 0) {
			setContador(contador - 1);
		}
	};

	return (
		<div>
			<h1>{title}</h1>
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

			<Stack direction="row">
				<Button variant="contained" onClick={eliminarCarrito}>
					-
				</Button>
				<Typography
					variant="p"
					style={{ display: "flex", alignItems: "center", fontSize: "2em" }}
				>
					{contador}
				</Typography>
				<Button variant="contained" onClick={sumarCarrito}>
					+
				</Button>

				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						onAdd(contador);
					}}
				>
					Agregar a carrito
				</Button>
			</Stack>
		</div>
	);
};

export default Details;
