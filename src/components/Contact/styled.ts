import styled  from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface Props {
    color: string;
    opacity?: number
}


export const Container = styled.section`
    width: 60%;
    min-height: 20vh;
    margin-bottom: 10%;
    margin-top: 3%;
 
    h2{
        width: 7.50em;
        height: 1.95em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(123, 74, 226, 0.1);
        margin-top: 2%;
        border-radius: 16px;
        color: #7B4AE2;
    }
    @media (max-width: 790px) {
        width: 75%;
    }
`

export const StyledContact = styled.div`
    display: flex;
    justify-content: center;
       
    h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;
        color: #ffffff;
        margin-top: 3%;


        @media (max-width: 790px) {
            font-size: 36px;
            line-height: 45px;
            font-weight: 600;
            margin-bottom: 5%;
        }

        @media (max-width: 415px) {
            font-size: 25px;
            line-height: 45px;
            font-weight: 600;
            margin-bottom: 3%;
            margin-top: 3%;
        }


    }   
`

export const ContentContact = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleRowContact = styled.div`
    width: 60%;
    height: 12em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    margin-bottom: 2%;

    @media (max-width: 790px) {
        display: flex;
        flex-direction: column;
    }
`

export const DisplayColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3%;
    margin-top: 3%;
`

export const EmailStyle = styled.span<Props>`
    color:${color => color.color};
    opacity:${opacity => opacity.opacity}; 
`

export const ButtonImageCopy = styled(Image)`
    cursor: pointer;
    padding-top: 2%;
`

export const LinkTop = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const SpanTop = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: rgba(123, 74, 226, 0.5);
`

export const DirectionEmail = styled.div`
    
       @media (max-width: 790px) {
        width: 18em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`