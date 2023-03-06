import React from "react";

import { ProductCard } from "../ProductCard/ProductCard";

export const ItemList = ({ items, onAdd }) => {
	return (
		<div style={{minHeight:'100vh', display:'flex', flexDirection:'row',gap:'2em',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
			{items.map((item) => {
				return <ProductCard key={item.id} item={item} onAdd={onAdd} />;
			})}
		</div>
	);
};
