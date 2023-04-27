import {NavLink} from 'react-router-dom';
import Brand from '../Brand/Brand';
import './Navbar.css';

function Navbar () {
    return  <nav className="navbar">
                <ul className="navbar_list">
                    <h1>
                        <Brand />
                    </h1>
                    <li className="navbar-list_item">
                        <NavLink to="/category/cases" className="navbar-list-item_link">
                            GABINETES
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/peripherals" className="navbar-list-item_link">
                            PERIFERICOS
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/power-banks" className="navbar-list-item_link">
                            FUENTES
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/cpus" className="navbar-list-item_link">
                            PROCESADORES
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/gpus" className="navbar-list-item_link">
                            GRAFICOS
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/motherboards" className="navbar-list-item_link">
                            MOTHERBOARDS
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/storages" className="navbar-list-item_link">
                            ALMACENAMIENTO
                        </NavLink>
                    </li>
                    <li className="navbar-list_item">
                        <NavLink to="/category/cooling" className="navbar-list-item_link">
                            REFRIGERACION
                        </NavLink>
                    </li>
                </ul>
            </nav>
};

export default Navbar;
