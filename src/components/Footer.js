import React from 'react'
import '../css/Footer.css'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { useHistory } from "react-router-dom";
import '../css/Social.css';

const NavLogo = styled.img`
{
    width: 100px;
    object-fit: contain;
    margin: 4vh;
    
}`

const WaImg = styled.img`
{
    width: 40px;
    border-radius: 20px ;
    
}`
function Footer() {
    const { i18n } = useTranslation();
    const history = useHistory();

    function changeLanguage(lang) {
        history.push("/");

        i18n.changeLanguage(lang);

    }
    return (
        <div className="footer">
            <div className="footer__logoLang">
                <NavLogo src="https://i.ibb.co/pLJSqqs/whitelogo.png" />
                <h3>Conexión y Consciencia</h3>
                <div className="footer__languajepicker">
                    <div onClick={() => changeLanguage('en')} className="footer__languajepickerEn">
                        <h5  >English</h5>
                        <img alt="" src='https://i.ibb.co/p4BLGMp/english-language.png' />
                    </div>
                    <div onClick={() => changeLanguage('sp')} className="footer__languajepickerEn">
                        <h5>Español</h5>
                        <img alt="" src='https://i.ibb.co/8Dc1WGP/spanish-language.png' />
                    </div>

                </div>
            </div>

            <div className="footer__socialLinks">
                <button onClick={() => window.open('https://wa.me/5215529018021?text=Bienvenido%20a%20Conexión%20y%20Consciencia,%20Terapia%20con%20Ángeles,%20en%20que%20puedo%20ayudarte?', "_blank")} className="whatsapp"><WaImg alt="" src='https://i.ibb.co/7g13zC5/whatsapp.png' /></button>
                <button onClick={() => window.open('https://www.facebook.com/conexionyconsciencia', "_blank")} className="facebook"><img alt="" src='https://i.ibb.co/MNMxD7M/facebook.png' /></button>
                <button onClick={() => window.open('https://www.youtube.com/channel/UCFLEejhLRAtVn7yty5LPFCg', "_blank")} className="instagram"><img alt="" src='https://i.ibb.co/dWTdwMS/Grupo-25.png' /></button>
                <button onClick={() => window.open('https://www.instagram.com/myconexion/', "_blank")} className="google"><img alt="" src='https://i.ibb.co/1MrLW7G/Grupo-16.png' /></button>

            </div>


        </div>
    )
}

export default Footer

