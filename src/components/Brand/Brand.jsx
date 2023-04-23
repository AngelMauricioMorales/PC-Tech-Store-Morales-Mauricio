import {Link} from 'react-router-dom';
import './Brand.css';

function Brand () {
    return  <h1 className="brand">
                <Link to="/" className="brand_link">
                    PC Tech Store
                </Link> 
            </h1>
};

export default Brand;
