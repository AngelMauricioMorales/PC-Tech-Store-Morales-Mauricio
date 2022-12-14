import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar ({menu}) {
    return  <nav className={menu ? "showNavbar" : "hideNavbar"}>
                <ul className="navbarList">
                    <li className="navbarListItem">
                        <NavLink to="/category/cases" className="navbarLink">
                            GABINETES
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/peripherals" className="navbarLink">
                            PERIFÉRICOS
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
                            GRÁFICOS
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/motherboards" className="navbarLink">
                            PLACAS BASE
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/storages" className="navbarLink">
                            ALMACENAMIENTO
                        </NavLink>
                    </li>
                    <li className="navbarListItem">
                        <NavLink to="/category/cooling" className="navbarLink">
                            REFRIGERACIÓN
                        </NavLink>
                    </li>
                </ul>
            </nav>
};

export default Navbar;
