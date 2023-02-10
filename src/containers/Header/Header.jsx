import {useState} from 'react';
import CartWidget from '../../components/CartWidget/CartWidget';
import Navbar from '../../components/Navbar/Navbar';
import Brand from '../../components/Brand/Brand';
import './Header.css';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNavbar = () => setToggleMenu(!toggleMenu);

    const closeBackdrop = () => setToggleMenu(false);

    return  <header className="header">
                <Brand />
                <button className="burger" type="button" onClick={toggleNavbar}>
                    <span className="burger-content"></span>
                    <span className="burger-content"></span>
                    <span className="burger-content"></span>
                </button>
                <div className="desktop-navbar">
                    <Navbar />
                </div>
                <CartWidget />
                {
                    toggleMenu 
                    ? 
                    <div className={"mobile-navbar"} onClick={closeBackdrop}>
                        <Navbar /> 
                    </div>
                    :
                    null
                }      
            </header>
};

export default Header;
