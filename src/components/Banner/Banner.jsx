import banner from './images/banner.png';
import './Banner.css';

function Banner() {
    return  <section className="banner">
                <figure className="bannerContainer">
                    <img className="bannerContainerImg" src={banner} alt="Banner del sitio." />
                </figure>
            </section>
};

export default Banner;
