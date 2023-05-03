import styled from "styled-components";
import Image from "next/image";


export const HomeMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #090E16;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerSection = styled.section`
    width: 85%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 33%);
    margin-top: 2.25em;

    /* @media only screen and (max-width: 770px) {
        grid-template-columns: 1fr;
    } */

    /* layout padrão */
    /* @media only screen and (min-width: 771px) {
        grid-template-columns: repeat(3, 33%);
    } */
  
`

export const ContentPresentation = styled.section`
    display: flex;
    flex-direction: column;
`

export const Information = styled.div`
    padding-top: 10%;
    padding-bottom: 4%;

    h4{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        margin-bottom: 4%;
        width: 160px;
        height: 45px;
        border-radius: 18px;
        background-color: rgba(123, 74, 226, 0.1);
        color:#7B4AE2;
        font-family: Raleway;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
    }

    h1 {
        font-family: Raleway;
        font-weight: 800; 
        font-size: 3.25em;
        line-height: 1.25em;
    }

`

export const ContentTextFrontEnd = styled.div`

    h6{
        display: flex;
        align-items: center;
        font-family: Raleway;
        font-style: Regular;
        font-size: 1.25em;
        line-height: 1.43em;
        line-height: 100%;
        color:rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 2.31em;
    }
    
`

export const ContentListIcons = styled.div`
    ul{
       list-style: none;
       display: flex;
       width: 8.25em;
       height: 2.25em;
       justify-content: space-between;
       align-items: center;
       margin-top: 1.25em;
    }

    ul li {
        color:rgba(255, 255, 255, 0.5);
    }
`

export const FigureAvatar = styled.figure`
    position: absolute;
    background: rgba(123, 74, 226, 0.33);
    top: 7em;
    border-radius: 999px;
    width: 265px;
    height: 260px;
`
export const FigureFigma = styled.figure`
   position: absolute;
   top: 17.4em;
`


export const ImageTypeScript = styled(Image)`
   position: absolute;
   top: 0.9em;
   left: 0.9em;
   margin: 0;
`

export const FigureTypeScript = styled.figure`
    position: absolute;
    right: 43vw;
    top: 15em;
    background: #090E16;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 100%;
`