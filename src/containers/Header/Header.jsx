import {useMenuContext} from '../../contexts/MenuContext/MenuContext';
import CartWidget from '../../components/CartWidget/CartWidget';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';
import './Header.css';

function Header() {
    const {switchNavbar, switchMenu} = useMenuContext();

    return  <header className="header">
                <Title />
                <button className="burgerButton" type="button" onClick={switchNavbar}>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                    <span className="burgerButtonContent"></span>
                </button>
                <Navbar switchMenu={switchMenu} />
                <CartWidget />
            </header>
};

export default Header;
