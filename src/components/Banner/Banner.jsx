import banner from './images/banner.mp4';
import './Banner.css';

function Banner() {
    return  <section className="banner-section">
                <video className="banner-section_video" autoPlay muted loop>
                    <source src={banner} type="video/mp4" />
                </video>
                <div className="banner_container">
                    <p className="banner-container_text">PC Tech Store</p>
                </div>
            </section>
};

export default Banner;
