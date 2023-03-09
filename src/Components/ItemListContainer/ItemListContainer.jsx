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



  return (
    <div >
      <ItemList   items={items} />
    </div>
  )
}

export default ItemListContainer