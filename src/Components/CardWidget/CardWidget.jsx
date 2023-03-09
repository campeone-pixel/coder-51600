import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CardWidget = () => {
  return (
    <div>
      

      <Link to="/cart">
        <BsCart3 color='red' size='30px'/>
      </Link>
     
    </div>
  )
}

