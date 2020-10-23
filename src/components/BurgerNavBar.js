import React    from 'react'
import styled from 'styled-components'; 
import { Link } from 'react-router-dom';


const BurgerNavBar = styled.div`
  display : none;
  @media (max-width: 800px) {
    font-family: 'Lobster Two';
    text-decoration: none;
    display:block;
    visibility: visible;
    list-style: none;
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open}) => (open) ? 'translateX(10%)' : 'translateX(120%)'};
    top: 50px;
    right: 0;
    height: 100vh;
    width: 170px;
    padding-top: 2rem;
    -webkit-box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    margin-top:30px;
    h1 {
      
      padding: 20px 5px;
      font-family: 'Lobster Two';
      font-size: 5vw;
      color: #707070; 
      text-align: center;
      margin-right:5px;
    }
    hr{
        background-color:  #707070;
        margin-left:20px;
        margin-right:30px;
        
    }
    Link{ 
        color: #7B2CBF; 
        }

    img{
        opacity:80%;
        height: 220px;
        margin-top:20px;
    }

  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


const RightNavBar = ({ open , handle }) => {

    return (
        <BurgerNavBar open={open}  onClick={handle} >
            <StyledLink to="/sobremi" >
                <h1>Sobre Mí</h1>
            </StyledLink>
            <hr />
            <StyledLink to="/Terapias" >
                <h1>Terapias</h1>
            </StyledLink>
            <hr />
            <StyledLink to="/blog"  >
                <h1>Blog</h1>
            </StyledLink>
            <hr />
            <StyledLink to="/contacto"  >
                <h1>Contacto</h1>
            </StyledLink>
            <hr />
           

            <img src="https://shandranewcom.com/wp-content/uploads/2018/01/purple-mandala-top.png?_t=1516663413" alt="Logo" border="0" />


        </BurgerNavBar>


    )
}

export default RightNavBar
