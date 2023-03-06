import { useEffect, useState } from "react";
import { products } from "../../productMock";
import { ItemList } from "../ItemList/ItemList"

const ItemListContainer = (  ) => {

  const [items, setItems] = useState([]);

	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
			resolve(products);
		});

		productList
			.then((resolve) => {
				setItems(resolve);
       
			})
			.catch((e) => {});
	}, []);

	const onAdd = (cantidad) => {
		console.log(`se agrego al carrito ${cantidad} elementos`);
	};

  return (
    <div >
      <ItemList   items={items} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer