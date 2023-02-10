import {Link} from 'react-router-dom';
import brandLogo from './images/brandLogo.png';
import './Brand.css';

function Brand () {
    return  <h1 className="brand">
                <Link to="/" className="brand_link">
                    <img className="brand_logo" src={brandLogo} alt="PC Tech Store" />
                </Link> 
            </h1>
};

export default Brand;
