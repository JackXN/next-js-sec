import React, { useState } from "react";
import {Link} from 'react-scroll';
import styled from 'styled-components';
import Image from 'next/image';
import RedLogo from '../../assets/Logos/Logo.png';
import { styles } from "styled-system";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
        <LeftHeader>
      <Link to="/">
        <Image src={RedLogo} alt='Logo' className='header-logo'/>
      </Link>
      </LeftHeader>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Tools</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href=""> Blog</MenuLink>
        <MenuLink href="">Events</MenuLink>
        <MenuButton>
          <Link to="/login" className="nav-buttons">
            Login
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/discord" className="nav-buttons">
            Join Our Discord Server
          </Link>
        </MenuButton>
      </Menu>
    </Nav>
  );
}

export default Navbar;

const stylers = {
    headerLogo: {
        height: '20px',
        width: '20px',

    }
}



const LeftHeader = styled.div`
display:flex;
align-items:center;
justify-content: center;

`



export const Nav = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: none;

`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: none;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const Logo = styled.img`
padding: 2rem 0;
height 69px;
width: 69px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;


  @media (max-width: 1000px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }



`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  
  color: white;

  float:left;

@media(max-width: 750px) {
  height: 140px;
  transform: skew(-10deg) rotate(2deg);
  -webkit-transform: skew(-10deg) rotate(2deg);
  -moz-transform: skew(-10deg) rotate(2deg);
margin: 10px;
}

@media(min-width: 1500px) {

}

@media(min-width: 1800px) {
  font-size: 15px;
}


@media(min-width: 2000px) {
  
  font-size: 17px;
  
}



  &:hover {
    color: white;
`;

export const MenuButton = styled.a`
  border-radius: 15px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: transparent;
  border: 1px solid gray;
  color: white;
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 15px;
  border-radius: 5px;

  .nav-buttons {
    color: white;
    text-decoration: none;
  }

 .nav-buttons:hover {
    color: red;
  }
`;

