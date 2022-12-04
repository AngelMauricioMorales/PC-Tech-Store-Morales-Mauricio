import brandLogo from './images/brandLogo.png';
import './Title.css';

function Title () {
    return  <h1>
                <figure>
                    <img src={brandLogo} alt="PC Tech Store" />
                </figure> 
            </h1>
};

export default Title;
