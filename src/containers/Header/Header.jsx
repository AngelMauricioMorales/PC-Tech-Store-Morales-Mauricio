import {useState} from 'react';
import CartWidget from '../../components/CartWidget/CartWidget';
import Navbar from '../../components/Navbar/Navbar';
import MainTitle from '../../components/MainTitle/MainTitle';
import './Header.css';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNavbar = () => setToggleMenu(!toggleMenu);

    const closeBackdrop = () => setToggleMenu(false);

    return  <header className="header">
                <MainTitle />
                <button className="burgerButton" type="button" onClick={toggleNavbar}>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                </button>
                <CartWidget />
                {
                    toggleMenu 
                    ? 
                    <div className="backdrop" onClick={closeBackdrop}>
                        <Navbar /> 
                    </div>
                    :
                    null
                }      
            </header>
};

export default Header;
