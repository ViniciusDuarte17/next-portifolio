import styled from "styled-components";


export const ContainerHeader = styled.header`
    /* position: fixed; */
    width: 85%;
    height: 48px;
    background-color: rgba(123, 74, 226, 0.1);
    border-radius: 8px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    margin-top: 1.5rem;
`

export const PositionButton = styled.div`
    position: absolute;
    right: 12%;
`

export const NavBarMobile = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   align-items: end;
   padding-top: 5%;
   padding-right: 3%;
   width: 15rem;
   height: 52vh;
   right: 6vh;
   top:11.01vh;
   border-radius: 10%;
   z-index: 300;

  background: linear-gradient(to bottom,#000, rgba(123, 74, 226, 0.0), rgba(123, 74, 226, 0.1));
`