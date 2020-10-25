import React from 'react'
import styled from 'styled-components/macro';
import '../css/Terapias.css';
import TerapiasCard from '../components/TerapiasCard'
import Social from './Social';
import { useTranslation } from 'react-i18next';
const TerapiasContainer = styled.div`
    {
        
        h1{
            margin-left: 60px;
            font-family: 'Lobster',cursive;
            color: white;
        }

    }`

function Terapias() {
    const { t } = useTranslation();
    return (
        <TerapiasContainer className="terapias">
            <Social/>
            <div className="terapias__bannerContainer">
                <h1>{t('Terap_MisTerapias.1')}</h1>
            </div>
            <div className="terapias__cards">

                <TerapiasCard title={t('Terap_TerapiasAngelesTitle.1')}
                    textLess={t('Terap_TerapiaAngeles.1')}
                    textMore={t('Terap_TerapiaAngelesMore.1')}
                    imgurl="https://i.ibb.co/xFm1QsD/Whats-App-Image-2020-09-24-at-2-52-33-PM.png" 
                    id="1" />

                <TerapiasCard
                    title={t('Terap_MeditacionesTitle.1')}
                    textLess={t('Terap_Meditaciones.1')}
                    textMore={t('Terap_MeditacionesMore.1')}
                    imgurl="https://i.ibb.co/b5dHK0H/Whats-App-Image-2020-09-24-at-2-52-56-PM.png"
                    id="2" />
                
                <TerapiasCard title={t('Terap_ConstelacionesTitle.1')}
                    textLess={t('Terap_Constelaciones.1')}
                    textMore={t('Terap_ConstelacionesMore.1')}
                    imgurl="https://i.ibb.co/B3DfWXk/Whats-App-Image-2020-09-24-at-2-53-20-PM.png"
                    id="3"  />
                <TerapiasCard
                    title={t('Terap_TarotTitle.1')}
                    textLess={t('Terap_Tarot.1')}
                    textMore={t('Terap_TarotMore.1')}
                    imgurl="https://i.ibb.co/ncxF0z4/Whats-App-Image-2020-09-24-at-2-53-36-PM.png" 
                    id="4" />
            </div>
        </TerapiasContainer>
    )
}

export default Terapias
