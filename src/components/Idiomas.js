import React from 'react'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

function Idiomas() {
    const { i18n } = useTranslation();
    const history = useHistory();

    function changeLanguage(lang) {
        history.push("/");

        i18n.changeLanguage(lang);
        console.log(lang)
    }

    const LangDiv = styled.div`

{
    display: flex;
    flex-direction:column;
    justify-content:space-between;

    position: fixed;
    top: 60%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -0.1%;
    padding-top: .5rem;

    padding-bottom: .5rem;
    z-index: 999;
    background-color: #ECD6FF;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    border: 1px solid #7B2CBF;
    box-shadow: -3px 3px  #707070;
   
}`
const LangImg = styled.img`

{
    width: 25px;
    margin-left:6px;
    margin-right:6px;
    margin-bottom: 1rem;
    margin-top: 1rem;

    cursor: pointer;
    :hover {
        transform: scale(1.1);
    }
    transition: all 0.3s ease;

}`
/*const LangText = styled.h5`

{
    text-align:center;
    font-size: small;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
        transform: scale(1.1);
    }
}`*/
    return (
        <LangDiv>
            <div onClick={() => changeLanguage('en')} className="footer__languajepickerEn">
                <LangImg alt="" src='https://i.ibb.co/p4BLGMp/english-language.png' />
            </div>
            <div onClick={() => changeLanguage('sp')} className="footer__languajepickerEn">
                <LangImg alt="" src='https://i.ibb.co/8Dc1WGP/spanish-language.png' />
            </div>

        </LangDiv>)
}

export default Idiomas
