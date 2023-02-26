import { ProductCard } from "../ProductCard/ProductCard"
import './ProductList.css'

export const ProductList = () => {
  return (
    <div className="productList">
      		<ProductCard title="PRODUCTO 1"/>
					<ProductCard title="PRODUCTO 2"/>
					<ProductCard title="PRODUCTO 3"/>
					<ProductCard title="PRODUCTO 4"/>
					<ProductCard title="PRODUCTO 5"/>
    </div>
  )
}


