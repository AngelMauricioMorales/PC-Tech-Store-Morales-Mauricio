import linkedinIcon from './images/linkedin-icon.png';
import instagramIcon from './images/instagram-icon.jpg';
import twitterIcon from './images/twitter-icon.png';
import emailIcon from './images/email-icon.png';
import "./Footer.css";

function Footer() {
    return  <footer className="footer">
                <ul className="footerDataList">
                    <li className="footerDataListItem">
                        <span className="footerDataListItemSpan">Alumno</span>: Mauricio Ángel Morales
                    </li>
                    <li className="footerDataListItem">
                        <span className="footerDataListItemSpan">Profesor</span>: Federico Osandón
                    </li>
                    <li className="footerDataListItem">
                        <span className="footerDataListItemSpan">Comisión</span>: 34800
                    </li>
                    <li className="footerDataListItem">
                        <span className="footerDataListItemSpan">Escuela</span>: Coder House
                    </li>

                </ul>
                <ul className="footerContactsList">
                    <li className="footerContactsListItem">
                        <a className="footerContactListItemLink" href="https://www.linkedin.com/in/mauricio-angel-morales/">
                            <img src={linkedinIcon} alt="Icono de Linkedin"/>
                        </a>
                    </li>
                    <li className="footerContactsListItem">
                        <a className="footerContactListItemLink" href="https://www.instagram.com/22mauricio77/">
                            <img src={instagramIcon} alt="Icono de Instagram"/>
                        </a>
                    </li>
                    <li className="footerContactsListItem">
                        <a className="footerContactListItemLink" href="https://twitter.com/Maurici95949397">
                            <img src={twitterIcon} alt="Icono de Twitter"/>
                        </a>
                    </li>
                    <li className="footerContactsListItem">
                        <a className="footerContactListItemLink" href="mailto:mauricio_morales_angel@hotmail.com">
                            <img src={emailIcon} alt="Icono de mail"/>
                        </a>
                    </li>
                </ul>
            </footer>
}

export default Footer;
