import linkedinIcon from './images/linkedin-icon.png';
import instagramIcon from './images/instagram-icon.png';
import twitterIcon from './images/twitter-icon.png';
import emailIcon from './images/email-icon.png';
import "./Footer.css";

function Footer() {
    return  <footer className="footer">
                <div className="footer_data-list-container">
                    <h4 className="footer_data-list_title">Info</h4>
                    <ul className="footer_data-list">
                        <li className="footer-data-list_item">
                            <span>Alumno</span>: Mauricio Ángel Morales
                        </li>
                        <li className="footer-data-list_item">
                            <span>Profesor</span>: Federico Osandón
                        </li>
                        <li className="footer-data-list_item">
                            <span>Comision</span>: 34800
                        </li>
                        <li className="footer-data-list_item">
                            <span>Escuela</span>: Coder House
                        </li>
                    </ul>
                </div>
                <div className="footer_contact-list-container">
                    <h4 className="footer_contacts-list_title">Contacto</h4>
                    <ul className="footer_contacts-list">
                        <li className="footer-contacts-list_item">
                            <a  className="footer-contact-list-item_link" 
                                href="https://www.linkedin.com/in/mauricio-angel-morales/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="Icono de Linkedin"/>
                            </a>
                        </li>
                        <li className="footer-contacts-list_item">
                            <a  className="footer-contact-list-item_link" 
                                href="https://www.instagram.com/22mauricio77/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Icono de Instagram"/>
                            </a>
                        </li>
                        <li className="footer-contacts-list_item">
                            <a  className="footer-contact-list-item_link" 
                                href="https://twitter.com/Maurici95949397" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={twitterIcon} alt="Icono de Twitter"/>
                            </a>
                        </li>
                        <li className="footer-contacts-list_item">
                            <a  className="footer-contact-list-item_link" 
                                href="mailto:mauricio_morales_angel@hotmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={emailIcon} alt="Icono de mail"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
}

export default Footer;
