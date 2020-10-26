import React from 'react'
import styled from 'styled-components/macro';
import Social from './Social';
import { useTranslation } from 'react-i18next';
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
    @media (max-width: 550px) {
        justify-content: flex-start;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        
    }
    
        h1{
            padding-top: 4em;
            font-family: 'Lobster Two';
            font-size:2.5vw;
            margin: 0;
            font-weight: 100 !important;
            vertical-align:middle;
            @media (max-width: 1220px) {
                font-size:4vw;
                padding-top: 0;
               
         }
         @media (max-width: 550px) {
                font-size:6vw;
                padding-top: 0;
               
         }
    
         }
            
         
        }
        h2{
            font-family: 'Lobster Two';
            font-size:6vw;
            margin: 0;
            font-weight: 100 !important;
            vertical-align:middle;
            @media (max-width: 1220px) {
                
                font-size:8vw;
            }
            @media (max-width: 550px) {
                font-size:12vw;
                padding-top: 0;
               
         }
        }
    

}`
const ProfileImg = styled.img`
{
        width:20vw;
        height: 20vw;
        border-radius: 50%;
        object-fit: cover;
       
        margin-top:50px;
        margin-left:4em;
        margin-right:1em;
        vertical-align:middle;
        @media (max-width: 1220px) {
        width:30vw;
        height: 30vw;
        margin-left:0;
        margin-right:0;

        
    }
    @media (max-width: 550px) {
        width:50vw;
        height: 50vw;
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
    width: 40%;
    height:auto;
    position: relative;
    top:50%;
    margin-right:40px;
    
    @media (max-width: 550px) {
        display:none
        
    }

}`

const QuoteImg = styled.img`
{

        position: absolute;
        width: 30%;
        height: 30%;
        z-index: 2;
        top:20%;
        left:80%;
        @media (max-width: 1220px) {
            width: 20%;
        height: 20%;
        top:26%;
        
    }
        

}`
const BoxBack = styled.div`
{
    width: 100%;
    height: 75%;
    position: absolute;
    border: 1px;
    border-style: solid;
    top:0%;
    left:0%;
    opacity: 0.4;

}`
const BoxTop = styled.div`
{

    width: 100%;
    height: fit-content;
    background-color:#c599ff;  
    position: absolute;
    vertical-align:middle;
    font-size:2vw;
    top:40%;
    z-index: 2;
    align-items: center;
    padding:4%;
    h3{
        font-family: 'Sorts Mill Goudy';
        font-color:black;
        font-size:2vw;
    }
    @media (max-width: 1220px) {
       
        h3{
       
        font-size:3vw;
    }
       
   }
}`

const QuoteBox = styled.div`{
    width: 90%;
    vertical-align:middle;
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    z-index: 2;
    top:15%;
    left:35px;
    position: absolute;
    font-size: 2vw;
    @media (max-width: 1220px) {
       
        font-size: 3vw;
        
    }
}`

const FirstParagraph = styled.h1`{
    
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    font-size: 2vw;
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

    width: 65%;
    background-color:#c599ff;  
    height: auto;
    vertical-align:middle;
    font-family: 'Sorts Mill Goudy';
    font-color:black;
    align-items: center;
    font-size:2vw;
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
    text-align:center;
    font-color:black;
    font-size: 2vw;
    margin-left:12%;
    margin-top:1em;
    margin-right:10%;
    font-weight: 100 !important;
    @media (max-width: 1220px) {
        
        font-size: 1.5em;
    }
    
}`

function SobreMi() {
    const { t } = useTranslation();
    return (
        <SobreMiContainer>
            <Social/>
            <IntroContainer>

                <NameContainer>
                    <ProfileImg src="https://i.ibb.co/mh7h16k/Whats-App-Image-2020-10-16-at-12-50-47-PM.jpg" />
                    <div><h1>{t('Sobre_MyName.1')} </h1>
                        <h2>Yelitza</h2></div>
                    
                </NameContainer>
                <QuoteContainer>
                    
                    <BoxTop>
                    <h3>{t('Sobre_Quote.1')}</h3></BoxTop>
                    
                    <QuoteImg src="https://www.flaticon.com/svg/static/icons/svg/59/59149.svg"></QuoteImg>
                </QuoteContainer>
                
            </IntroContainer>
            <FirstParagraph>{t('Sobre_FirstP.1')} </FirstParagraph>
            <AboutMeContainer>
                <AboutMeCont>
                    <AboutMeInfo>{t('Sobre_About1.1')} </AboutMeInfo>
                </AboutMeCont>
                <AboutMeCont>
                    <AboutMeInfo>
                    {t('Sobre_About2.1')}
                    </AboutMeInfo>

                </AboutMeCont>
            </AboutMeContainer>
            <SecondParagraph>{t('Sobre_SecondP.1')}
 </SecondParagraph>

        </SobreMiContainer>

    )
}

export default SobreMi
