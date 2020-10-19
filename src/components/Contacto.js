import React,{useState} from 'react'
import styled from 'styled-components/macro';
import '../css/Contacto.css';
import Social from './Social';

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

    
    const submitEmail = e => {
        e.preventDefault();
        console.log("Tengo",name,email,input)
    }

    return (
        <ContactoContainer className="contacto">
            <Social/>
            <div className="contacto__bannerContainer">
                <h1>Contacto</h1>
            </div>
            <h1>¿Alguna pregunta?</h1>
            <div className="contacto__form">
                <img src="https://i.ibb.co/TB0pSCH/mail.png" alt="mail" border="0" />
                <div className="contacto__formData">
                    <form action="">
                        <input onChange={(e) => setName(e.target.value)} required name="name" type="text" placeholder="Nombre completo" className="reg__containerInput" />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="¿Cuál es tu correo?" name="" id=""/>
                        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="10" cols="50" placeholder="Tus preguntas..." />
                        <input className="submitbutton" onSubmit={submitEmail} type="submit" value="Enviar"/>
                    </form>
                    <h2>Responderé a tu solicitud prontamente</h2>
                </div>
            </div>
        </ContactoContainer>
    )
}

export default Contacto
