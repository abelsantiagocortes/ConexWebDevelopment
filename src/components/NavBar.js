import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Burger from './Burger';


const StyledNavBar = styled.nav`
    {
        background-color: white;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 100;
        justify-content: space-between;
        height: 80px;
        width: 100%;
        font-family: 'Lobster Two', regular;
        font-size: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }`
const NavLinks = styled.nav`
{
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    margin-right: 10px;
    align-items: center;
    text-decoration: none;
    font-family: 'Lobster', cursive;
    color:#707070;
    h1 { font-family: 'Lobster Two', cursive; }
    Link{
        text-decoration: none;
    }

    @media only screen and (max-width: 1000px) {
 {
        display: none;

    }

}
   
}`

const NavLogo= styled.img`
{
    width: 130px;
    object-fit: contain;
    margin: 5x;
    margin-right: 20px;
    padding-left: 25px;
    
}`

const LinkLogo= styled(Link)`
{
    display: flex;
    margin-right: 20px;
    align-items: center;
    text-decoration: none;
    color: #7B2CBF;
}`

const NavLink= styled(Link)`
{
    text-decoration: none;
    color:#707070;
    &.active {
    color: #7B2CBF;
  }
}`

function NavBar() {
    return (
        <StyledNavBar>
            <LinkLogo to="/bienvenidos">
                <NavLogo />
                <h1>Conexión y Consciencia</h1>
            </LinkLogo>
            <NavLinks>
                <NavLink to="/"  >
                    <h1>Bienvenidos</h1>
                </NavLink>
                <NavLink to="/sobremi"  >
                    <h1>Sobre Mí</h1>
                </NavLink>
                <NavLink to="/terapias"   >
                    <h1>Terapias</h1>
                </NavLink>
                <NavLink to="/blog" >
                    <h1>Blog</h1>
                </NavLink>
                <NavLink to="/contacto" >
                    <h1>Contacto</h1>
                </NavLink>
            </NavLinks>
            <Burger/>

        </StyledNavBar>
    )
}

export default NavBar
