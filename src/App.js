import { Footer } from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer title={'Hola como estas?'}/>
			<ProductCard title="titulo 1" price="200" isRed={true} />
			<ProductCard title="titulo 2" price="300" isRed={false} />
			<ProductCard title="titulo 3" price="400" isRed={true} />
			<Footer />
		</div>
	);
}

export default App;
