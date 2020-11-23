import React,{useState} from 'react'
import '../css/TerapiasCard.css';
import { useTranslation } from 'react-i18next';

function TerapiasCard({title,textLess,textMore,imgurl,id}) {
    const { t } = useTranslation();
    const [btnText, setBtnText] = useState(t('ViewMore.1'));

    const [text, setTexts] = useState(textLess);

    const nameId="terapiacard"
    const idTer= nameId.concat(id);
    const handleClick = () =>{

        if(btnText===t('ViewMore.1')){
            setTexts(textMore)
            setBtnText(t('ViewLess.1'))
        }else{
            setTexts(textLess)
            setBtnText(t('ViewMore.1'))
        }
       
    }

    return (
        <div className="terapiascard" id={idTer}>
            <h1 >{title}</h1>
            <img src={imgurl} 
            alt="timage" 
            border="0"></img>
            <p id="idtext">{text}</p>
            <button onClick={handleClick}>{btnText}</button>
        </div>
    )
}

export default TerapiasCard
