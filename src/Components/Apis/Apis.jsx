import React, { useEffect, useState } from "react";

const Apis = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getData = fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((res) => setProducts(res))
			.catch((error) => console.log("error:", error));
	}, []);

	console.log(products)

	const createPost = fetch("https://fakestoreapi.com/products?limit=5", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			title: "test product",
			price: 13.5,
			description: "lorem ipsum set",
			image: "https://i.pravatar.cc",
			category: "electronic",
		}),
	}).then((res) => console.log(res));

	return <div>cargo el api</div>;
};

export default Apis;
