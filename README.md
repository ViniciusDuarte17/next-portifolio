# next-portifolio


const [avatar, setAvatar] = useState<boolean>(false);
  const mediaQuery = "(max-width: 660px)";
  
  const handleMediaChange = (e: MediaQueryListEvent) => {
    setAvatar(e.matches);
  };
  
  useEffect(() => {
    const evertPositionAvatar = window.matchMedia(mediaQuery);
    setAvatar(evertPositionAvatar.matches);
    evertPositionAvatar.addEventListener("change", handleMediaChange);
  
    return () => evertPositionAvatar.removeEventListener("change", handleMediaChange);
  }, []);
  
  console.log(avatar);


// Efeito
  import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  isOpen?: boolean;
};

const HamburgerIcon = styled.div<Props>`
  width: 30px;
  height: 25px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color:  rgba(123, 74, 226, 1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: all 0.25s ease-out;
  }

  span:nth-child(1) {
    top: ${props => props.isOpen ? '10px' : '0px'};
    width: ${props => props.isOpen ? '0%' : '100%'};
    left: ${props => props.isOpen ? '50%' : '0'};
  }

  span:nth-child(2) {
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  }

  span:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
  }

  span:nth-child(4) {
    bottom: ${props => props.isOpen ? '10px' : '0px'};
    width: ${props => props.isOpen ? '0%' : '100%'};
    left: ${props => props.isOpen ? '50%' : '0'};
  }
`;

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerIcon isOpen={isOpen} onClick={toggleOpen}>
      
    </HamburgerIcon>
  );
};

export default Hamburger;