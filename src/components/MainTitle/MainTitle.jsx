import {Link} from 'react-router-dom';
import brandLogo from './images/brandLogo.png';
import './MainTitle.css';

function MainTitle () {
    return  <h1 className="mainTitle">
                <Link to="/" className="mainTitleLogo">
                    <img className="mainTitleLogoImg" src={brandLogo} alt="PC Tech Store" />
                </Link> 
            </h1>
};

export default MainTitle;
