import styled  from "styled-components";
import Image from "next/image";
import Link from "next/link";


export const HomeMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #090E16;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContentPresentation = styled.section`
    display: flex;
    flex-direction: column;
`

export const SectionToAvatar = styled.section`
    display: flex;
    flex-direction: column;
`

export const SectionContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: end;


    @media only screen and (max-width:660px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 20em;
        margin-bottom: 3%;
    }
`

export const ContainerSection = styled.section`
    width: 85%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 33%);
    margin-top: 2.25em;

    @media only screen and (max-width:928px) {
       
        grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (max-width:660px) {
     
        grid-template-columns: repeat(1, 100%);
        align-items: center;
        justify-content: center;

    }

    /* layout padrão */
    @media only screen and (min-width: 929px) {
        grid-template-columns: repeat(3, 33%);
    }

    // Mudando a ordem do html

    @media (max-width: 660px) {
        ${ContentPresentation} {
      order: 2;
     }
     ${SectionToAvatar} {
      order: 1;
     }
     ${SectionContact} {
      order: 3;
     }
    }

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

export const AvatarFigma = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: url(/AvatarAndIcons.png);
    background-size: cover;
    width: 20em;
    height: 20em;

`

export const ImageTypeScript = styled(Image)`
   position: absolute;
   top: 0.9em;
   left: 0.9em;
   margin: 0;
`

export const SpanButtonCV = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: rgba(123, 74, 226, 0.5);
`


// export const SectionContact = styled.section`
//     display: flex;
//     flex-direction: column;
//     align-items: end;


//     @media only screen and (max-width:660px) {
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         justify-content: space-between;
//         width: 20em;
//     }
// `

export const LinkToWhatsapp = styled(Link) `
    text-decoration: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: rgba(123, 74, 226, 0.5);
`

export const JoinImgToText = styled.div`
    display: flex;


`

export const JoinLogoWhatsLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(123, 74, 226, 0.5);
    border-radius: 16px;
    width: 196px;
    height: 44px;  
    gap: 8px;
`