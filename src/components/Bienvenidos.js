import React from 'react'
import styled from 'styled-components/macro';

const BienvenidosContainer = styled.div`
    {
       
        h1{
            font-family: 'Lobster', cursive; 
        }

    }`


function Bienvenidos() {
    return (
        <BienvenidosContainer>
            <h1>Bienvenidos</h1>
        </BienvenidosContainer>
    )
}

export default Bienvenidos
