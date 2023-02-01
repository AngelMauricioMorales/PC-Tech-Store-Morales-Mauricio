import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return  <nav className="navbar">
                <ul className="navbarList">
                    <li className="navbarListItem">
                        <NavLink to="/category/cases" className="navbarLink">
                            GABINETES
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/peripherals" className="navbarLink">
                            PERIFERICOS
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/power-banks" className="navbarLink">
                            FUENTES
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/cpus" className="navbarLink">
                            PROCESADORES
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/gpus" className="navbarLink">
                            GRAFICOS
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/motherboards" className="navbarLink">
                            MOTHERBOARDS
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/storages" className="navbarLink">
                            ALMACENAMIENTO
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/cooling" className="navbarLink">
                            REFRIGERACION
                        </NavLink>
                    </li>
                </ul>
            </nav>
};

export default Navbar;
