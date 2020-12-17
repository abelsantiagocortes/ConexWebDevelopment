import React from 'react'
import styled from 'styled-components/macro';
import '../css/Blog.css';
import BlogCard from './BlogCard';
import Social from './Social';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
        const val = document.getElementById("email").value

        if (val.length > 1) {
            alert('Correo enviado' + val);
            setform(false)
        } else {
            alert('Ingrese un correo');
        }

    };
    return (
        <BlogContainer className="blog">

            <Social />

            <div className="blog__bannerContainer">
                <h1>Blog</h1>
            </div>
            <div className="blog__Content">
                <div className="blog__ContentWelcome">
                    <h1>{t('Welcomeblog.1')}</h1>
                    <p>Cada palabra que los ángeles nos transmiten llega a nosotros como un regalo de
                    sabiduría y aprendizaje. Disfruta la lectura y toma para tu vida
                    aquello que resuene en tu corazón.</p>
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

                <BlogCard
                    title="Cree en ti (Artículo del mes)"
                    date="23/11/2020"
                    content={
                        <div> 
                            Desde que inicié mi contacto con los ángeles y comencé a trabajar como su canal,
                            comencé a encontrarme con personas que descalificaban mi trabajo. Hace 15 años,
                            cuando inicié, yo me encontraba llena de dudas, de miedos y de incertidumbres; mi
                            vida dio un vuelco cuando se hizo evidente que haría mi misión de vida transmitiendo
                        sus mensajes.<br />

                        Dejé la que hasta ese momento había sido mi ocupación profesional (psicóloga), con
                        la que mi ego se sentía seguro, y me daba una identidad aceptada por la sociedad en
                        la que vivía. Cuando comenzaron las críticas a mi trabajo, mi cabeza no paraba de
                        pensar, de decirme que estaba por un camino equivocado, que volviera a lo anterior y
                        dejara de creer en tonterías.<br />
                        Mi ego se sentía ofendido, lastimado, descalificado, desaprobado, reprochado y claro,
                        la sensación de malestar ante la crítica era bastante incómoda. Un día, en medio de
                        tanta tribulación mental, me senté a meditar y me contacté con mis amados maestros
                        angélicos y pregunte por el tema.<br />
                        Su respuesta fue contundente, cree en ti misma, confía en tu intuición, todo lo que se
                        hace desde el corazón y con la intención pura del alma es el camino, cualquiera que
                        sea ese camino. ¿Qué es lo que te provocan estos comentarios?, ¿dónde sientes ese
                        malestar?, ¿qué te recuerda?, ¿con que aspecto no resuelto de tu vida te conecta?
                        A medida que pasaron los días, comencé a comprender de donde venia el malestar.
                        No provenía de las palabras de los demás, venia realmente del recuerdo, hasta ese
                        momento inconsciente, de las descalificaciones que llevaba dentro muy dentro de mí
                        y que me hicieron en el pasado lejano, sentir incapaz, poco merecedora, inútil, a
                        veces mala, etc., etc. No podría decir que lo solucioné solo con saberlo, realmente es
                        un proceso que me ha tomado algún tiempo, pero la claridad de esa información me
                        indicó la dirección en la cual debía trabajar.<br />
                        Hoy los ángeles te dicen lo mismo, cree en ti mismo, en tu intuición, en las señales y
                        mensajes de tu corazón, no de tu cabeza. Cuando alguien te descalifica, observa tus
                        pensamientos y emociones, observa de donde proviene tu enojo o tu miedo o tu
                        incomodidad con estas palabras. Observa de qué se protege o defiende tu ego. No
                        tienes que responderle ni demostrarle a nadie afuera que lo haces bien, que esa es tu
                        vocación, que sirves para eso que elegiste o que lo que haces vale la pena.
                        Es a ti mismo a quien debes convencer. Convéncete a través de la conexión con tu
                        ser interior y de la conciencia total de tu ser. Identifica en qué momento alguien o
                        alguna situación en el pasado lejano (infancia o adolescencia) te hizo sentir que no
                        eras bueno para algo, identifica quién o qué te hizo sentir inadecuado e incapaz y tal
                        vez, poco merecedor; trabaja en perdonarlo, en perdonarte y libéralo. No será un
                        proceso automático, tendrá que pasar algún tiempo para que esa herida se cure y se
                        cierre. Usa todos los recursos que puedas; si es necesario toma terapia, porque
                        puede ayudarte y guiarte en el camino a sanar. Investiga y practica con afirmaciones
                        que te hagan sentir valorado, inspirado, capaz, inteligente, creativo y sobre todo
                        merecedor. Sana las heridas de tu niño interior y de tu adolescente, ellos necesitan de
                        tu atención y cuidado e integrándolos a tu ser adulto, la información de tu inconsciente
                        se actualiza y puedes alcanzar de manera mas sencilla tus metas y objetivos. En
                        resumen, abre tu corazón a sanar. Ese es el principal mensaje de la incomodidad que
                        nos provoca la crítica externa, que realmente es el reflejo de nuestra crítica interior. Tu
                        maestro interior te irá guiando hacia las herramientas y caminos que serán los
                        mejores para ti en el proceso.<br />
                        Tendrás que ir como un niño pequeño arriesgándote y dando pasos, unos más
                        pequeños y otros más grandes, te equivocarás, te sentirás a veces muy incomódo,
                        pero es la única forma en que esos fantasmas del pasado desaparecerán. Invoca a
                        tus maestros y guías angélicos para que te acompañen en este camino y te llenen
                        paz-ciencia y amor por tu ser.<br />
                        Una de mis mejores amigas, uno de mis ángeles terrenales, me dijo alguna vez unas
                        palabras muy sabias y sencillas para que avanzara solucionando mi pasado. Esas
                        palabras fueron: Tranquila, adelante, NO PASA NADA. Esas sencillas palabras me
                        dieron una paz enorme, sentí a mis maestros junto a mí, hablándome…. Pide la
                        ayuda ellos porque siempre están allí.<br />
                        Sigue tus sueños, traza tu camino y enfrenta todos tus miedos. Despierta tu luz
                        interior y libérate de patrones de pensamiento acerca de ti y del mundo que ya no
                        necesitas.<br />
                        </div>
                    }
                    author="Yelitza La-Rotta"

                />
                <h1>Entradas pasadas...</h1>
                <BlogCard
                     title="Cree en ti (Artículo del mes)"
                     date="23/11/2020"
                     content={
                         <div> 
                             
                         </div>
                     }
                     author="Yelitza La-Rotta"
                />
                <BlogCard />
                <BlogCard />
            </div>
        </BlogContainer>
    )
}

export default Blog
