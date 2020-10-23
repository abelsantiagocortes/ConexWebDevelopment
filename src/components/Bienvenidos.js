import React from 'react'
import styled from 'styled-components/macro';
import Social from './Social';
import ExperienceCard from './ExperienceCard'



const BienvenidosContainer = styled.div`
    {
        background-image: url("https://i.ibb.co/J7CmxDd/Grupo-30.png") ;
        background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    }`
const BannerContainer = styled.div`
    {
        display:flex;
        align-items:center;
        background-image: url("https://kingdomwinds.com/wp-content/uploads/2020/09/william-farlow-IevaZPwq0mw-unsplash-e1600268236206.jpg") ;
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100% ;
        justify-content:center;
        vertical-align: middle;
        @media (max-width: 550px) {
            height: 55vw;
            background-size: 180% ;                
               
         }
        

    }`

const QuoteContainer = styled.div`
    {
        height: fit-content;
        background-color:white;
        opacity:0.7;
        align-items:center;
        text-align: center;
        padding:1vw;
        border-radius: 2vw;
        margin: 5%;


    }`

const Quote = styled.h1`
{
    z-index:2;
    font-size:3vw;
    margin-top: 2vw;
    margin-bottom:2vw;
    text-shadow:5px 5px 5px rgba(0,0,0,0.5);
    font-family: 'Sorts Mill Goudy';
    font-weight: 100 !important;

    @media (max-width: 550px) {
                font-size:5vw;
                
         }
    


}`

const BienvenidosInfoContainer = styled.div`
{
    display:flex;
    flex-direction:column;
    align-items:center;

}`


const BienvenidosTitulo = styled.h1`
{
    font-family: 'Lobster Two';
    color:#7B2CBF;
    margin-top:2%;
    font-size:3vw;
    @media (max-width: 550px) {
                font-size:6vw;
                
         }
 

}`
const BienvenidosInfo1 = styled.h1`
{
    text-align: center;
    font-size:1.5vw;
    margin-left: 10%;
    margin-right:10%;
    font-family: 'Sorts Mill Goudy';
    font-weight: 100 !important;
    @media (max-width: 550px) {
                font-size:4vw;
                
         }

}`

const BienvenidosInfo2 = styled.h1`
{
    font-size:2vw;
    margin-left: 10%;
    margin-right:10%;
    font-family: 'Sorts Mill Goudy';
    text-align: center;
    margin-top:5px;
    @media (max-width: 550px) {
                font-size:4vw;
                
         }

}`
const BienvenidosInfo3 = styled.h1`
{
    font-size:2vw;

    font-family: 'Sorts Mill Goudy';
    text-align: Left;
    margin-top:5%;
    margin-left: 15%;
    margin-right: auto;
    font-weight: bold;
    
    @media (max-width: 550px) {
                font-size:4vw;
                margin-top:10%;
                
         }

}`


const BienvenidosBotones = styled.div`
{
    display:flex;
    flex-direction:row;
    width:40%;
    justify-content:space-evenly;
    margin-top:2%;
    
    @media (max-width: 550px) {
             flex-direction:column;
             justify-content:space-between;  
             height:60px; 
         }

}`

const BotonSobreMi = styled.button`
{
    width: 40%;
    background-color: #7B2CBF;
    color: white;
    border-radius: 10px !important;
    border: 0px;
    font-size: 1.5vw;
    font-family: 'Sorts Mill Goudy';
    @media (max-width: 550px) {
            font-size: 4vw;
            width: 100%;
         }

}`

const BotonTerapias = styled.button`
{
    width: 40%;
    background-color: #7B2CBF;
    color: white;
    border-radius: 10px !important;
    border: 0px;
    font-size: 1.5vw;
    font-family: 'Sorts Mill Goudy';

    @media (max-width: 550px) {
             
             font-size: 4vw;
             width: 100%;
                
         }

}`

const VideoContainer = styled.div`

{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:50%;
    margin-top:3%;

    @media (max-width: 550px) {
             
        width:70%;
         }
    

    
}`

const VideoFrame = styled.div`

{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
 
    
}`

const Video = styled.iframe`

{
    
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
   
}`



function Bienvenidos() {
    return (
        <BienvenidosContainer>
            <BannerContainer>
                <QuoteContainer>
                    <Quote>La luz es nuestra virtud, la paciencia nuestro camino, y el amor nuestra religión.</Quote>
                </QuoteContainer>

            </BannerContainer>

            <BienvenidosInfoContainer>
                <BienvenidosTitulo>Bienvenidos</BienvenidosTitulo>
                <BienvenidosInfo1>Cada experiencia de nuestra vida, cada suceso y cada persona que nos vamos encontrando, tienen la hermosa misión de ayudarnos a crecer, aprender y evolucionar. Los ángeles están aquí para acompañarte en ese maravilloso proceso, creando un camino de comprensión y amor que te lleva a la transformación y la sanación.</BienvenidosInfo1>
                <BienvenidosInfo2>Gracias por llegar aquí.</BienvenidosInfo2>
                <BienvenidosBotones>
                    <BotonSobreMi>Sobre Mi</BotonSobreMi>
                    <BotonTerapias>Terapias</BotonTerapias>
                </BienvenidosBotones>
            </BienvenidosInfoContainer>

            <BienvenidosInfo3>Sobre Conexión y Consciencia...</BienvenidosInfo3>
            <VideoContainer>
                <VideoFrame>
                    <Video src="https://www.youtube.com/embed/cI4ryatVkKw" frameborder="0" allowfullscreen="" ></Video>
                </VideoFrame>
            </VideoContainer>
            <BienvenidosInfo3>Algunas Experiencias:</BienvenidosInfo3>
            <ExperienceCard>

            </ExperienceCard>

            <Social />

        </BienvenidosContainer>
    )
}

export default Bienvenidos
