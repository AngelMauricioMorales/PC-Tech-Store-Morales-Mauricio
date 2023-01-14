import {useState} from 'react';
import CartWidget from '../../components/CartWidget/CartWidget';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';
import './Header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const switchNavbar = () => {
        !showMenu ? setShowMenu(true) : setShowMenu(false);
    }

    return  <header className="header">
                <Title />
                <button className="burgerButton" type="button" onClick={switchNavbar}>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                </button>
                <Navbar menu={showMenu} />
                <CartWidget />
            </header>
};

export default Header;
