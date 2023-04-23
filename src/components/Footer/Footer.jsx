import linkedinIcon from './images/linkedin-icon.png';
import instagramIcon from './images/instagram-icon.png';
import twitterIcon from './images/twitter-icon.png';
import emailIcon from './images/email-icon.png';
import "./Footer.css";

function Footer() {
    return  <footer className="footer">
                <h3 className="footer-brand">
                    PC Tech Store
                </h3>
                <table className="footer_info-table">
                    <tr className="footer_info-table_row_header">
                        <th className="footer_info-table-row_title" colSpan={2}>Info</th>
                    </tr>
                    <tr className="footer_info-table_row">
                        <td className="footer_info-table-row_division1">Alumno:</td><td className="footer_info-table-row_division2">Mauricio Morales</td>
                    </tr>
                    <tr className="footer_info-table_row">
                        <td className="footer_info-table-row_division1">Profesor:</td><td className="footer_info-table-row_division2">Federico Osandon</td>
                    </tr>
                    <tr className="footer_info-table_row">
                        <td className="footer_info-table-row_division1">Comision:</td><td className="footer_info-table-row_division2">34800</td>
                    </tr>
                    <tr className="footer_info-table_row">
                        <td className="footer_info-table-row_division1">Escuela:</td><td className="footer_info-table-row_division2">Coder House</td>
                    </tr>
                </table>
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
