import React from 'react'
import styled from 'styled-components/macro';
import Social from './Social';
const SobreMiContainer = styled.div`
    {
        display: flex;
        flex-direction: column;
        width:100%;
        background-image: url("https://i.ibb.co/J7CmxDd/Grupo-30.png") ;
        background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
        
    }`
const IntroContainer = styled.div`
{
    display: flex;
    
    justify-content: space-evenly;
    vertical-align:middle;
    @media (max-width: 1220px) {
        justify-content: flex-start;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        
    }
    
        h1{
            padding-top: 4em;
            font-family: 'Sorts Mill Goudy';
            font-size:2vw;
            margin: 0;
            font-weight: 100 !important;
            vertical-align:middle;
            @media (max-width: 1220px) {
                font-size:8vw;
                padding-top: 0;
               
         }
    
         }
            
         
        }
        h2{
            font-family: 'Sorts Mill Goudy';
            font-size:4vw;
            margin: 0;
            font-weight: 100 !important;
            vertical-align:middle;
            @media (max-width: 1220px) {
                
                font-size:16vw;
            }
        }
    

}`
const ProfileImg = styled.img`
{
        width:20vw;
        height: 20vw;
        border-radius: 50%;
       
        margin-top:50px;
        margin-left:4em;
        margin-right:1em;
        vertical-align:middle;
        @media (max-width: 1220px) {
        width:40vw;
        height: 40vw;
        margin-left:0;
        margin-right:0;

        
    }

}`

const NameContainer = styled.div`
{
    display: flex;
    flex-direction: row;
    width:40%;
    vertical-align:middle;
    align-items:center;
    @media (max-width: 1220px) {
        flex-direction: column;
        width:60%;
        
    }
  
    

}`
const QuoteContainer = styled.div`
{
    display: flex;  
    width: 500px;
    height:auto;
    position: relative;
    margin-right:1em;
    margin-top:10em;
    @media (max-width: 1220px) {
        display:none;
        
    }

}`

const QuoteImg = styled.img`
{

        position: absolute;
        width: 120px;
        height: 120px;
        z-index: 2;
        top:-80px;
        left:400px;

}`
const BoxBack = styled.div`
{
    width: 500px;
    height: 200px;
    position: absolute;
    border: 1px;
    border-style: solid;
    top:0%;
    left:0%;
    opacity: 0.4;

}`
const BoxTop = styled.div`
{
    z-index: 1;
    width: 500px;
    background-color:#6E00FF;  
    height: 200px;
    position: absolute;
    opacity: 0.4;
    top:5%;
    left:20px;
    align-items: center;
}`

const QuoteBox = styled.div`{
    width: 500px;
    vertical-align:middle;
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    z-index: 2;
    top:15%;
    left:35px;
    position: absolute;
    font-size: 2em;
}`

const FirstParagraph = styled.h1`{
    
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    font-size: 30px;
    margin-left:15%;
    margin-top:3em;
    margin-right:15%;
    font-weight: 100 !important;
    text-align: center;
    @media (max-width: 1220px) {
        margin-top:1em;
        font-size: 1.5em;
        
    }
}`
const AboutMeContainer = styled.div`{
    display: flex;
    flex-direction: column;
    margin-top:3em;
    justify-content: space-between;
    @media (max-width: 1220px) {
        margin-top:1em;
        
    }
    
}`
const AboutMeCont = styled.div`{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2%;
    @media (max-width: 1220px) {
        flex-direction: column;
        
    }
}`

const AboutMeInfo = styled.div`{

    width: 45%;
    background-color:#c599ff;  
    height: auto;
    vertical-align:middle;
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    align-items: center;
    font-size:2em;
    padding:1em;
    @media (max-width: 1220px) {
        width:70%;
        font-size:1em;
        
    }
}`
const AboutMeImg = styled.img`{
   width: auto;
   height: 22em;
   border-radius: 5%;
  
   @media (max-width: 1220px) {
        width:70%;
        margin-top:1em;
    margin-bottom:1em;
        
    }
}`
const AboutMeImg2 = styled.img`{
    width: 30em;
    height: 22em;
    border-radius: 5%;
    margin:0;
    @media (max-width: 1220px) {
       display:none;
       margin-top:1em;
       margin-bottom:1em;
       height: 16em;
    }
 }`
 const AboutMeImg3 = styled.img`{
    display:none;
    @media (max-width: 1220px) {
       display:block;
       flex-direction: flex-start;
        width: 100%;
        height: 16em;
        border-radius: 5%;
        margin:0;
        margin-top:1em;
        margin-bottom:1em;
        width:70%;
    }
 }`


const SecondParagraph = styled.h1`{
    
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    font-size: 30px;
    margin-left:12%;
    margin-top:1em;
    margin-right:10%;
    font-weight: 100 !important;
    @media (max-width: 1220px) {
        margin-top:0;
        font-size: 1.5em;
    }
    
}`

function SobreMi() {
    return (
        <SobreMiContainer>
            <Social/>
            <IntroContainer>

                <NameContainer>
                    <ProfileImg src="https://i.ibb.co/mh7h16k/Whats-App-Image-2020-10-16-at-12-50-47-PM.jpg" />
                    <div><h1>Mi nombre es </h1>
                        <h2>Yelitza</h2></div>
                    
                </NameContainer>
                <QuoteContainer>
                    <BoxBack></BoxBack>
                    <BoxTop></BoxTop>
                    <QuoteBox>…ayudar a otros a encontrarse con su ser y sanar su vida a través del contacto con ángeles y arcángeles.</QuoteBox>
                    <QuoteImg src="https://www.flaticon.com/svg/static/icons/svg/59/59149.svg"></QuoteImg>
                </QuoteContainer>
                
            </IntroContainer>
            <FirstParagraph>Siempre tuve inquietud por saber que había más allá del hombre y el mundo que conocemos y estaba en búsqueda constante de aquello que me hacía comprender y conocer más sobre la existencia humana. </FirstParagraph>
            <AboutMeContainer>
                <AboutMeCont>
                    <AboutMeInfo>Atendiendo sus mensajes, siguiendo su senda de amor incondicional y sobre todo aceptando su guía para sanarme, mi misión de vida me fue revelada: Ayudar a otros a encontrarse con su ser y sanar su vida a través del contacto con ángeles y arcángeles. </AboutMeInfo>
                    <AboutMeImg src="https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></AboutMeImg>
                </AboutMeCont>
                <AboutMeCont>
                    <AboutMeImg2 src="https://ambitonatural.com/wp-content/uploads/2020/06/Relationship-Challenges-%E2%80%93-Call-upon-Archangel-Chamuel-600x330.png"></AboutMeImg2>
                    <AboutMeInfo>Abrí mi consulta en el año 2005 y desde ese momento mi labor con estos maravillosos maestros no se ha detenido. Han sido mis guías, mis compañeros y mis maestros en este proceso de transformación personal.
                    
                    </AboutMeInfo>
                    <AboutMeImg3 src="https://ambitonatural.com/wp-content/uploads/2020/06/Relationship-Challenges-%E2%80%93-Call-upon-Archangel-Chamuel-600x330.png"></AboutMeImg3>

                </AboutMeCont>
            </AboutMeContainer>
            <SecondParagraph>Gracias a ellos hoy puedo invitarte a vivas la experiencia amorosa de contactarte con tus ángeles a través mío para transformar, sanar y equilibrar tu vida.
 </SecondParagraph>

        </SobreMiContainer>

    )
}

export default SobreMi
