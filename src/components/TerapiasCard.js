import React,{useState} from 'react'
import '../css/TerapiasCard.css';

function TerapiasCard({title,textLess,textMore,imgurl,id}) {
    const [btnText, setBtnText] = useState('Ver Más');
    const [text, setTexts] = useState(textLess);
    const nameId="terapiacard"
    const idTer= nameId.concat(id);
    const handleClick = () =>{
        if(btnText==='Ver Más'){
            document.getElementById(idTer).style.height = "800px"
            setTexts(textMore)
            setBtnText('Ver Menos')
        }else{
            document.getElementById(idTer).style.height = "500px"
            setTexts(textLess)
            setBtnText('Ver Más')
        }
       
    }
    return (
        <div className="terapiascard" id={idTer}>
            <h1>{title}</h1>
            <img src={imgurl} 
            alt="timage" 
            border="0"></img>
            <p id="idtext">{text}</p>
            <button onClick={handleClick}>{btnText}</button>
        </div>
    )
}

export default TerapiasCard
