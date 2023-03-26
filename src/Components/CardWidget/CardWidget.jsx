import { useContext } from 'react'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


export const CardWidget = () => {
  const {cantItemsCarrito} = useContext(CartContext)

  
  return (
    <div>
      

      <Link to="/cart">
        <BsCart3 color='red' size='30px'/>
        <span>{cantItemsCarrito()}</span>
      </Link>
     
    </div>
  )
}
 
