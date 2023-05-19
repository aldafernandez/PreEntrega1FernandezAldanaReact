import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to="/">
                <h3>Patucas- Pet Shop Online</h3>
            </link>
            <div className="Categorias">
                <NavLink to={'/categoria/accesorios'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={'/categoria/estetica'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Estetica e higiene</NavLink>
                <NavLink to={'/categoria/ofertas'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Ofertas del mes</NavLink>
                <NavLink to={'/categoria/contacto'} className={({inActive}) => inActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;