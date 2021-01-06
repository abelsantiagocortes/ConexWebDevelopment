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
        border: 2px solid rgba(0,0,0,.225);
    
        
    }`

const CarouselCardBody = styled(Card.Body)`
    {
        display:flex;
        flex-direction:row;
        vertical-align:middle;
  align-items : center;
        margin-bottom:4em;
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
    margin-bottom:6em;
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
                        <StyledCarouselText>Asistir a una sesión con Yelitza podría describirla como mágica e increíble;
                        la primera vez que fui me encontraba buscando miles de respuestas y con un dolor profundo.
                        Ese momento fue increíble, se me entregaron regalos tan maravillosos de sanación en forma
                        de mensajes, que me permitieron entender y avanzar. Personas como ella con un gran don y una
                        gran responsabilidad vinieron a este mundo a ayudar y a permitir a otros descubrir sus propios
                             dones  o caminos...pero sobre todo a sanar. Adriana, Colombia.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <StyledCarouselText>Mi vida me invitaba a un cambio, lo tenía todo pero sentía que mi vida se iba sin sentido. Todo se fue al piso y al
                        empezar a conocerme, tuve la bendición de tener la guía amorosa, precisa
                        y respetuosa de los ángeles. Ellos me ayudaron a comprender y a pasar por esos momentos fuertes.
                        Me ayudaron a sanar física y emocionalmente, y además tuve el regalo de poder servir, ayudar y aprender de ellos.
                        Yelitza ha sido un canal amoroso y respetuoso. Los ángeles me guían y me acompañan siempre y pude ser consciente
                        de ello, mi vida cambió. Soy un ser feliz sigo aprendiendo y compartiendo lo que me han enseñado. Gracias Yeli por
                        tantos momentos maravillosos. Donaldo, México.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>

            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                        <StyledCarouselText>Para mí ha sido una excelente terapia, sientes la conexión con tus ángeles guardianes los cuales te guían,
                        te orientan y te ayudan a superar las diferentes dificultades en las que te encuentres. Te enseñan a amarte tal y como eres
                              y a conectarte contigo misma. Super recomendada y agradecida por esta maravillosa experiencia. Luisa, Colombia.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <StyledCarouselText>Gracias a Yelitza he tenido una experiencia única y maravillosa.  Ha sido el vínculo perfecto para alcanzar mi conexión con los ángeles para recibir mensajes y consejos llenos de amor que siguen impactando positivamente mi vida. He recomendado a Yelitza a muchas personas y familiares y todos han encontrado en ella un canal para la armonía y el crecimiento espiritual. Hubiera deseado haber tenido esta guìa y apoyo emocional desde hace mucho. Gracias a Dios llegó a mi vida. Diana, Australia.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <StyledCarouselText>A Yeli la conozco hace más de 9 años y para mí, las terapias con Yeli me han ayudado no solo en el plano físico sino también en el emocional, mental y espiritual. Es darte cuenta que cuando entramos en contacto con lo que verdaderamente somos empezamos a sanarnos y a entender que todo está relacionado y conectado en el proceso de la vida. Recomiendo 100% las terapias con Yeli. Laura, Colombia.  </StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>
            <CarouselItem>
                <CarouselCard>
                    <CarouselCardBody>
                        <CarouselImg src="https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <StyledCarouselText>La vida es maravillosa, y dentro de esas maravillas te presenta en el camino personas especiales, que con su experiencia de vida y su misión en el mundo ayudan a otros. Una de esas personas es Yelitza, que por medio de su terapia con la canalización de ángeles, maestros y seres de luz, me han ayudado en mi proceso de desarrollo espiritual, conexión con mi niña interna y guía para algunos aspectos de mi vida, incluida la familia. La terapia se lleva a cabo de una manera muy armoniosa, respetuosa y amorosa, realmente te toca el alma, sabes que realmente son seres de luz por todas las sensaciones de alta vibración que sientes durante la sesión, vibraciones de amor y armonía que luego van haciendo eco en tu vida diaria y en tu entorno. Nelly, Colombia.</StyledCarouselText>

                    </CarouselCardBody>
                </CarouselCard>

            </CarouselItem>

        </StyledCarousel>
    )
}

export default ExperienceCard
