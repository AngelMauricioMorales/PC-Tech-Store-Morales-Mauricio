import {NavLink} from 'react-router-dom';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import Title from '../Title/Title';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar () {
    const {amountQuantity} = useCartContext();

    return  <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/" className="NavLink">
                            <Title />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/cases" className="NavLink">
                            Gabinetes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/peripherals" className="NavLink">
                            Periféricos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/power-banks" className="NavLink">
                            Fuentes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/cpus" className="NavLink">
                            Procesadores
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/gpus" className="NavLink">
                            Gráficos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/motherboards" className="NavLink">
                            Placas Base
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/storages" className="NavLink">
                            Almacenamiento
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/cooling" className="NavLink">
                            Refrigeración
                        </NavLink>
                    </li>
                    <li className="NavLinkCart">
                        <NavLink to="/cart" className="NavLink">
                            <CartWidget />
                        </NavLink>
                        <span className="cartQuantity">{amountQuantity() !== 0 && amountQuantity()}</span>
                    </li>
                </ul>
            </nav>
};

export default Navbar;
