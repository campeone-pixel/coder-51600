import './ProductCard.css'

const ProductCard = ( {title='Sin titulo',price=0,isRed} ) => {

  return (
    <div>
      <h1 className={isRed === true? 'red':'blue'}>{title}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default ProductCard
