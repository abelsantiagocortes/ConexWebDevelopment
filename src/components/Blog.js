import React from 'react'
import styled from 'styled-components/macro';
import '../css/Blog.css';
import BlogCard from './BlogCard';
import Social from './Social';
import Idiomas from './Idiomas';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { functions } from '../firebase';

const BlogContainer = styled.div`
    {
       
        h1{
            font-family: 'Lobster', cursive; 
        }

    }`

function Blog() {
    const { t } = useTranslation();
    const [form, setform] = useState(false)
    const subscribeform = (e) => {
        setform(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value

        if (email.length > 1) {
            var sendSubscriptionEmail = functions.httpsCallable('sendSubscriptionEmail');
            sendSubscriptionEmail({ email: email }).then(result => {
                alert(t('ContactAlert.1'))
                window.location.reload();
            }).catch(function (error) {
                console.error("Error send email");
            });
        } else {
            alert('Ingrese un correo');
        }

    };
    return (
        <BlogContainer className="blog">

            <Social />
            <Idiomas />

            <div className="blog__bannerContainer">
                <h1>Blog</h1>
            </div>
            <div className="blog__Content">
                <div className="blog__ContentWelcome">
                    <h1>{t('Welcomeblog.1')}</h1>
                    <p>{t('Welcomeblogtext.1')}</p>
                </div>

                <div className="blog__ContentBtns">

                    <button className="blog__ContentBtnsMore" >{t('MoreArt.1')}</button>
                    {!form &&
                        <button onClick={() => subscribeform()}> {t('Subscribe.1')}</button>
                    }

                </div>
                {form &&
                    <form className="blog__ContentForm" onSubmit={handleSubmit}>
                        <label type="email">{t('monthblog.1')}</label>
                        <input type="email" id="email" name="email" />
                        <input id="submit" type="submit" value={t('Send.1')}></input>
                    </form>
                }
                <h1>{t('MonthlyArticles.1')}</h1>
                
                <BlogCard
                    title="Un día llego un dolor"
                    date="9/6/2021"
                    content={
                        'Un día, sin esperarlo, recibí una visita que la verdad no me agradó mucho. Un dolor se presentó a mi puerta tocando fuerte, muy fuerte, realmente quería que yo escuchara y supiera que estaba ahí. Era tan grande, tan fuerte, tan imposible de ignorar, que me obligó a mirar, me forzó a ver aquello dentro de mí que me rehusé por años a tocar y a reconocer...'
                    }
                    author="Yelitza La-Rotta"
                    link="https://drive.google.com/file/d/1D2uY0nmGr0DSroNQyLaIUVv1KYBuKS13/view?usp=sharing"

                />
                <BlogCard
                    title="Nuestra primera misión en la vida: Sanar"
                    date="9/6/2021"
                    content={
                        'Todo mi proceso de autoconocimiento y sanación inició cuando tenía 25 años. En ese momento de mi vida, una situación muy dolorosa, me hizo ver que la única opción posible era estar conmigo, encargarme de mi y responsabilizarme de lo que me estaba sucediendo....'
                    }
                    author="Yelitza La-Rotta"
                    link="https://drive.google.com/file/d/1ghNR4H76-ruJk97hqZFD9RyabdwP8bCl/view?usp=sharing"

                />

                
                <h1>Entradas pasadas...</h1>
                <BlogCard
                    title="Cree en ti"
                    date="8/2/2021"
                    content={

                        'Desde que inicié mi contacto con los ángeles y comencé a trabajar como su canal, comencé a encontrarme con personas que descalificaban mi trabajo. Hace 15 años,cuando inicié, yo me encontraba llena de dudas, de miedos y de incertidumbres; mi vida dio un vuelco cuando se hizo evidente que haría mi misión de vida transmitiendo sus mensajes...'

                    }
                    author="Yelitza La-Rotta"
                    link="https://drive.google.com/file/d/1hyXC8ZwtMAJb801L-gWo5WecP86rYYyd/view?usp=sharing"

                />

                <BlogCard
                    title="Volver al Centro"
                    date="8/2/2021"
                    content={
                        'Las situaciones difíciles hacen parte de la vida de todos. A veces, unas son más complicadas, difíciles y dolorosas que otras, pero indudablemente, son esas, las más fuertes las que nos llevan a las transformaciones más grandes...'
                    }
                    author="Yelitza La-Rotta"
                    link="https://drive.google.com/file/d/18kjbjdhZTfwH3RCkqeHfG-diitdUMBpq/view?usp=sharing"

                />
                

            </div>
        </BlogContainer>
    )
}

export default Blog
