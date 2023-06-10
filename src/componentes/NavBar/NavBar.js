import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Patucas- Pet Shop Online</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={'/categoria/accesorios'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={'/categoria/estetica'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Estetica e higiene</NavLink>
                <NavLink to={'/categoria/ofertas'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Ofertas del mes</NavLink>
            
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;