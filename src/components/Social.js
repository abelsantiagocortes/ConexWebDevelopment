import React from 'react'
import '../css/Social.css';

function Social() {
    return (
        <div className='social'>
            <button onClick={() =>window.open('https://wa.me/5215529018021?text=Bienvenido%20a%20Conexión%20y%20Consciencia,%20Terapia%20con%20Ángeles,%20en%20que%20puedo%20ayudarte?',"_blank")} className="whatsapp"><img alt="" src='https://i.ibb.co/7g13zC5/whatsapp.png'/></button>
            <button onClick={() =>window.open('https://www.facebook.com/conexionyconsciencia',"_blank")}  className="facebook"><img alt="" src='https://i.ibb.co/dcxGzMw/facebook.png'/></button>
            <button onClick={() =>window.open('https://www.instagram.com/myconexion/',"_blank")}  className="twitter"><img alt="" src='https://i.ibb.co/pfn4cc7/Grupo-22.png'/></button>
            <button onClick={() =>window.open('https://www.youtube.com/channel/UCFLEejhLRAtVn7yty5LPFCg',"_blank")} className="google"><img alt="" src='https://i.ibb.co/yXnTjDT/youtube.png'/></button>
        </div>
    )
}

export default Social
