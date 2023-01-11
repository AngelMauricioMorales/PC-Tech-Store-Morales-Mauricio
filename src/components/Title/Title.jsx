import {Link} from 'react-router-dom';
import brandLogo from './images/brandLogo.png';
import './Title.css';

function Title () {
    return  <h1 className="mainTitle">
                <Link to="/" className="mainTitleLogo">
                    <img className="mainTitleLogoImg" src={brandLogo} alt="PC Tech Store" />
                </Link> 
            </h1>
};

export default Title;
