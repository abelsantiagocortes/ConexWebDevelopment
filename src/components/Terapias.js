import React from 'react'
import styled from 'styled-components/macro';
import '../css/Terapias.css';
import TerapiasCard from '../components/TerapiasCard'
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
            <div className="terapias__bannerContainer">
                <h1>Mis Terapias</h1>
            </div>
            <div className="terapias__cards">
                <TerapiasCard/>
                <TerapiasCard/>
                <TerapiasCard/>
                <TerapiasCard/>

            </div>
        </TerapiasContainer>
    )
}

export default Terapias
