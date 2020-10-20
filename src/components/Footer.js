import React from 'react'
import '../css/Footer.css'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const NavLogo = styled.img`
{
    width: 100px;
    object-fit: contain;
    
    
}`
function Footer() {
    const { t, i18n } = useTranslation();
    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        console.log(lang)
    }
    return (
        <div className="footer">
            <div className="footer__logoLang">
                <NavLogo />
                <h3>Conexión y Consciencia</h3>
                <div className="footer__languajepicker">
                    <div onClick={() => changeLanguage('en')} className="footer__languajepickerEn">
                        <h5  >English</h5>
                        <img src='https://i.ibb.co/p4BLGMp/english-language.png' />
                    </div>
                    <div onClick={() => changeLanguage('es')} className="footer__languajepickerEn">
                        <h5>Español</h5>
                        <img src='https://i.ibb.co/8Dc1WGP/spanish-language.png' />
                    </div>

                </div>
            </div>

            <div className="footer__socialLinks">
                <a href="https://www.facebook.com" className="facebook"><img src='https://i.ibb.co/MNMxD7M/facebook.png' /></a>
                <a href="https://www.instagram.com" className="youtube"><img src='https://i.ibb.co/dWTdwMS/Grupo-25.png' /></a>
                <a href="https://www.youtube.com" className="instagram"><img src='https://i.ibb.co/1MrLW7G/Grupo-16.png' /></a>
            </div>


        </div>
    )
}

export default Footer

