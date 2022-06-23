import logo from '../../imagenes/logogamepoint.jpg'
import carrito from '../../imagenes/carrito-de-compras.png'
import './NavBar.css'
import { AiOutlineShoppingCart } from "react-icons/ai";




const NavBar = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h1>GamePoint</h1>
            <nav>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Nosotros</a>
            </nav>
            <AiOutlineShoppingCart size="9em" color="blue"></AiOutlineShoppingCart>


        </header>
    )

}

export default NavBar