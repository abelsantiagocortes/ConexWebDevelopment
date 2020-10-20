import React, { useState } from 'react'
import styled from 'styled-components/macro';
import '../css/Contacto.css';
import Social from './Social';
import { useTranslation } from 'react-i18next';

const ContactoContainer = styled.div`
    {
       
        h1{
            font-family: 'Lobster', cursive; 
        }

    }`

function Contacto() {

    const [input, setInput] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { t } = useTranslation();


    const submitEmail = e => {
        e.preventDefault();
        console.log("Tengo", name, email, input)
    }
    

    return (
        <ContactoContainer className="contacto">
            <Social />
            <div className="contacto__bannerContainer">
                <h1>{t('Contact.1')}</h1>
            </div>
            <h1>{t('ContactQuestion.1')}</h1>
            <div className="contacto__form">
                <img src="https://i.ibb.co/TB0pSCH/mail.png" alt="mail" border="0" />
                <div className="contacto__formData">
                    <form action="">
                        <input onChange={(e) => setName(e.target.value)} required name="name" type="text" placeholder={t('Name.1')} className="reg__containerInput" />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={t('Email.1')} name="" id="" />
                        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="10" cols="50" placeholder={t('Yourquestions.1')} />
                        <input className="submitbutton" onSubmit={submitEmail} type="submit" value={t('Sendbtn.1')}/>
                    </form>
                    <h2>{t('When.1')}</h2>
                </div>
            </div>
        </ContactoContainer>
    )




}

export default Contacto
