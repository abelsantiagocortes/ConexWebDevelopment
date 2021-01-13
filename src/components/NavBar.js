import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import { useTranslation } from 'react-i18next';
import "../css/Navbar.css"


const StyledNavBar = styled.nav`
    {
        background-color: white;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 100;
        justify-content: space-between;
        height: 90px;
        width: 100%;
        font-family: 'Lobster Two', regular;
        font-size: 1vw;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       
    }`
const NavLinks = styled.nav`
{

    display: flex;
    width: 70%;
    justify-content: space-evenly;
    margin-right: 10px;
    align-items: center;
    text-decoration: none !important;;
    font-size: 1vw;
    font-family: 'Lobster', cursive;
    color:#707070;
    h1 { 
        font-size: 1.5vw;
        text-decoration: none !important;;
        font-family: 'Lobster Two', cursive; }
    Link{
        text-decoration: none !important;;
        
    }

    @media only screen and (max-width: 800px) {
 {
        display: none;

    }

}
   
}`

const NavLogo = styled.img`
{
    width: 180px;
    object-fit: contain;
    margin: 5x;
    margin-right: 20px;
    padding-left: 25px;
    
}`

const LinkLogo = styled(Link)`
{
    display: flex;
    margin-right: 20px;
    align-items: center;
    color: #7B2CBF;
    width:60%;
    :hover{
        text-decoration: none !important;
        color: #7B2CBF;

    }
    h1 { 
        font-size: 2vw;
        text-decoration: none !important;;
        font-family: 'Lobster Two', cursive; }
    @media only screen and (max-width: 800px) {
    {
        h1 { 
        font-size: 4vw; }
    
        width:80%;
    }
    }
    @media only screen and (max-width: 350px) {
        {
            h1 { 
                display:none;
             }
        
        }
    }
   
}`



function NavBar({ active }) {
    const {t} = useTranslation();
    let linkClassWelcome = "navbar-login__link";
    let linkClassMisAboutMe = "navbar-login__link";
    let linkClassTerap = "navbar-login__link";
    let linkClassBlog = "navbar-login__link";
    let linkClassContact = "navbar-login__link";

    switch (active) {
        case "welcome":
            linkClassWelcome = "navbar-login__linkActive"
            break;
        case "aboutme":
            linkClassMisAboutMe = "navbar-login__linkActive"
            break;
        case "terap":
            linkClassTerap = "navbar-login__linkActive"
            break;
        case "blog":
            linkClassBlog = "navbar-login__linkActive"
            break;
        case "contact":
            linkClassContact = "navbar-login__linkActive"
            break;
        default:
            break;
    }
    return (
        <StyledNavBar>
            <LinkLogo to="/bienvenidos">
                <NavLogo src="https://i.ibb.co/8sZFms8/Logo-Conex.png" alt="Logo-Conex" border="0" />
                <h1>Conexión y Consciencia</h1>
            </LinkLogo>
            <NavLinks>
                <Link to="/" className={linkClassWelcome} >
                    <h1>{t('nav_bienvenidos.1')}</h1>
                </Link>
                <Link to="/sobremi" className={ linkClassMisAboutMe} >
                    <h1>{t('nav_aboutme.1')}</h1>
                </Link>
                <Link to="/terapias" className={linkClassTerap }  >
                    <h1>{t('nav_therapies.1')}</h1>

                </Link>
                <Link to="/blog" className={linkClassBlog }>
                    <h1>Blog</h1>
                </Link>
                <Link to="/contacto" className={linkClassContact }>
                    <h1>{t('Contact.1')}</h1>
                </Link>
            </NavLinks>
            <Burger />

        </StyledNavBar>
    )
}

export default NavBar
