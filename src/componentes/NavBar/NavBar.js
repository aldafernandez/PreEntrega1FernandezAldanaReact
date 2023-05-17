import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Patucas- Pet Shop Online</h3>
            <div>
                <button>Accesorios</button>
                <button>Estetica e higiene</button>
                <button>Ofertas del mes</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;