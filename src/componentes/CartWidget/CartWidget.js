import { useContext } from 'react'
import carrito from './assets/cart.png'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={carrito} alt="cart-widget" height={30}/> 
            { totalQuantity }   
        </Link>
      
    )
}
export default CartWidget

