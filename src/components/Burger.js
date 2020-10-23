import React, { useState } from 'react'
import BurgerNavBar from './BurgerNavBar';
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  background-color: white;
  height: 2rem;
  position: fixed;
  top: 8px;
  right: 20px;
  z-index: 20;
  display: none;
  margin-bottom:10px;
  margin-top:10px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    @media (max-width: 800px) {
    }
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    width: 2rem;
    height: 0.25rem;
    background-color:#7B2CBF;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-top: 5px;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    
   
  }
`;

const BurgerItem = styled.div`

    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
`;


function Burger() {

    const [open, setOpen] = useState(false)

    function handleClick () {
      setOpen(!open);
    }
    return (
        <>
            <StyledBurger open={open}  onClick={() => setOpen(!open)} >

                <BurgerItem/>
                <BurgerItem/>
                <BurgerItem/>
                
            </StyledBurger>
            <BurgerNavBar open={open} handle={handleClick}/>
        </>

    )
}

export default Burger
