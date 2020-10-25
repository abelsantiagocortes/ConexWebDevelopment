import React from 'react'
import styled from 'styled-components/macro';
import Social from './Social';
import ExperienceCard from './ExperienceCard'
import { useTranslation } from 'react-i18next';


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
    margin-top: 2%;
    margin-bottom:2%;
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
             justify-content:space-evenly;  
             height:200px; 
         }

}`

const BotonSobreMi = styled.button`
{
    width: 30%;
    background-color: #7B2CBF;
    color: white;
    padding: 20px;
    border-radius: 10px !important;
    border: 0px;
    font-size: medium;
    @media (max-width: 550px) {
            font-size: 4vw;
            width: 100%;
         }

}`

const BotonTerapias = styled.button`
{
    width: 30%;
    background-color: #7B2CBF;
    color: white;
    padding: 20px;
    border-radius: 10px !important;
    border: 0px;
    font-size: medium;

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
    const { t } = useTranslation();
    return (
        <BienvenidosContainer>
            <BannerContainer>
                <QuoteContainer>
                    <Quote>{t('Bien_Quote.1')}</Quote>
                </QuoteContainer>

            </BannerContainer>

            <BienvenidosInfoContainer>
                <BienvenidosTitulo>{t('Bien_Title.1')}</BienvenidosTitulo>
                <BienvenidosInfo1>{t('Bien_Info1.1')}</BienvenidosInfo1>
                <BienvenidosInfo2>{t('Bien_Info2.1')}</BienvenidosInfo2>
                <BienvenidosBotones>
                    <BotonSobreMi>{t('Bien_SobreMi.1')}</BotonSobreMi>
                    <BotonTerapias>{t('Bien_Terapias.1')}</BotonTerapias>
                </BienvenidosBotones>
            </BienvenidosInfoContainer>

            <BienvenidosInfo3>{t('Bien_Info3.1')}</BienvenidosInfo3>
            <VideoContainer>
                <VideoFrame>
                    <Video src="https://www.youtube.com/embed/cI4ryatVkKw" frameborder="0" allowfullscreen="" ></Video>
                </VideoFrame>
            </VideoContainer>
            <BienvenidosInfo3>{t('Bien_Info3_2.1')}</BienvenidosInfo3>
            <ExperienceCard>

            </ExperienceCard>

            <Social />

        </BienvenidosContainer>
    )
}

export default Bienvenidos
