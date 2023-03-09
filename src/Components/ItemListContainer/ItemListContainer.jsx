
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = ({ items }) => {


	return (
		<div>
			<ItemList items={items} />
		</div>
	);
};

export default ItemListContainer;
