import logo from '../../imagenes/logogamepoint.jpg'
import carrito from '../../imagenes/carrito-de-compras.png'
import './NavBar.css'

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
            <img className='carrito' src={carrito} alt="" />
        </header>
    )

}

export default NavBar