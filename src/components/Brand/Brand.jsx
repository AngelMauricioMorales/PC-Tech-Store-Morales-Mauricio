import {Link} from 'react-router-dom';
import './Brand.css';

function Brand () {
    return  <div className="brand">
                <Link to="/" className="brand_link">
                    PC Tech Store
                </Link> 
            </div>
};

export default Brand;
