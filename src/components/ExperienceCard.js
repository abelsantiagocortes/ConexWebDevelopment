import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import styled from 'styled-components/macro';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'


const StyledCarousel = styled(Carousel)`
    {
        margin-top:10px;
    }`
const CarouselCard = styled(Card)`
    {
        height:25%;
        margin-left:15%;
        margin-right:15%;
        

        
    }`

const CarouselCardBody = styled(Card.Body)`
    {
        display:flex;
        flex-direction:row;
        vertical-align:middle;
        
        @media (max-width: 550px) {
             
             flex-direction:column;
                
         }
        
    }`

const CarouselImg = styled.img`
    {
        width:15vw;
        height: 15vw;
        border-radius: 50%;
        object-fit: cover;
        @media (max-width: 550px) {
             
            width:30vw;
            height: 30vw;
            margin-left: auto;
            margin-right: auto;
                
         }

        
    }`




const StyledCarouselText = styled(Card.Text)`
{
    
    font-family: 'Sorts Mill Goudy';
    text-align: left;
    font-size:1.5vw;
    margin-left: 5%;
    margin-right:10%;
    margin-top:5%;
    font-family: 'Sorts Mill Goudy';
    font-weight: 100 !important;
    @media (max-width: 550px) {
             
            font-size:4vw;
            margin-top:10%;
                 
          }

    
}`
function ExperienceCard() {
    return (
        <StyledCarousel>
            <CarouselItem>
                <CarouselCard >
                    <CarouselCardBody>
                    <CarouselImg src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                        <StyledCarouselText>Los ángeles no conocen de enfermedad, dolor, dinero, apegos, etc. Ellos son energía y reconocen la energía, por eso nos inspiran para afrontar una situación.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                    <CarouselImg src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <StyledCarouselText>La sanación integral es parte de ir a la raíz de la situación, debemos recordar que todas las enfermedades físicas están conectadas a diversas emociones. </StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="" />
                        <StyledCarouselText> Que el universo, la vida, los ángeles, y los espíritus de la naturaleza los protejan. Amor vital para cada uno de ustedes.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>

        </StyledCarousel>
    )
}

export default ExperienceCard
