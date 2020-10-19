import React from 'react'
import styled from 'styled-components/macro';
import '../css/Terapias.css';
import TerapiasCard from '../components/TerapiasCard'
import Social from './Social';
const TerapiasContainer = styled.div`
    {
        
        h1{
            margin-left: 60px;
            font-family: 'Lobster',cursive;
            color: white;
        }

    }`

function Terapias() {
    return (
        <TerapiasContainer className="terapias">
            <Social/>
            <div className="terapias__bannerContainer">
                <h1>Mis Terapias</h1>
            </div>
            <div className="terapias__cards">

                <TerapiasCard title="Terapia con Angeles"
                    textLess="La terapia con ángeles es una herramienta de sanación, 
                donde a través del contacto y los mensajes de ángeles 
                y arcángeles podrás comprender el propósito de todas las
                experiencias de vida que atraviesas y has atravesado a lo 
                largo de tu existencia..."
                    textMore="La terapia con ángeles es una herramienta de sanación,
                donde a través del contacto y los mensajes de ángeles y arcángeles
                podrás comprender el propósito de todas las experiencias de vida que
                atraviesas y has atravesado a lo largo de tu existencia. De la misma 
                forma, los ángeles y arcángeles traen a tu vida la posibilidad
                de conocerte y transformarte a través de sus consejos y palabras, 
                siempre rodeadas del más infinito amor universal. La presencia y 
                el contacto con estos maravillosos seres son una experiencia de paz,
                armonía y bienestar para todo tu ser."
                    imgurl="https://i.ibb.co/xFm1QsD/Whats-App-Image-2020-09-24-at-2-52-33-PM.png" 
                    id="1" />

                <TerapiasCard
                    title="Meditaciones sanadoras"
                    textLess="A través de la canalización de ángeles y arcángeles te 
                 acompaño a realizar meditaciones enfocadas a sanar temas particulares. ..."
                    textMore="Las Constelaciones familiares con una herramienta terapéutica que
                  te permite mirar, comprender y sanar la situación que deseas tratar, a través 
                  de su representación inconsciente. Te permite conocer y comprender
                   patrones familiares y ancestrales ocultos, de manera que haciéndolos conscientes,
                    tienes la posibilidad de tomar caminos alternos y creativos para ti y tu experiencia de vida."
                    imgurl="https://i.ibb.co/b5dHK0H/Whats-App-Image-2020-09-24-at-2-52-56-PM.png"
                    id="2" />
                
                <TerapiasCard title="Constelaciones familiares"
                    textLess="Las Constelaciones familiares con una herramienta terapéutica
                 que te permite mirar, comprender y sanar la situación que deseas tratar,
                  a través de su representación inconsciente..."
                    textMore="A través de la canalización de ángeles y arcángeles te acompaño a 
                  realizar meditaciones enfocadas a sanar temas particulares. Los maestros angélicos 
                  nos llevan a través de meditaciones personalizadas y enfocadas a tus necesidades de 
                  sanación y liberación emocional, entrando en frecuencias sutiles que te permiten 
                  conectarte y comunicarte con tu ser interior."
                    imgurl="https://i.ibb.co/B3DfWXk/Whats-App-Image-2020-09-24-at-2-53-20-PM.png"
                    id="3"  />
                <TerapiasCard
                    title="Tarot terapeutico"
                    textLess="Herramienta sanadora donde a través del uso del tarot puedes 
                 conectarte con tus contenidos inconscientes 
                 y traerlos de vuelta para su reconocimiento y trabajo con tu ser. ..."
                    textMore="Herramienta sanadora donde a través del uso del tarot puedes conectarte 
                 con tus contenidos inconscientes y traerlos de vuelta para su reconocimiento y
                  trabajo con tu ser. Ver mas… El tarot a través de sus cartas permite identificar
                   distintos arquetipos, a través de los cuales los patrones, las creencias y las
                    heridas inconscientes se revelan para permitirte llevar a cabo un proceso 
                    terapéutico sanador y de despertar de consciencia. El tarot con su simbolismo 
                    te permite reconocer tu enorme capacidad transformadora y te brinda la oportunidad 
                    de aplicarla a tu realidad diaria."
                    imgurl="https://i.ibb.co/ncxF0z4/Whats-App-Image-2020-09-24-at-2-53-36-PM.png" 
                    id="4" />
            </div>
        </TerapiasContainer>
    )
}

export default Terapias
