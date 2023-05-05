import styled from "styled-components";

type Props = {
    background?: string;
    colorBorder?: string;
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 67.75vh;
    margin-top: 8%;
`

export const SectionRow = styled.section`
    width: 65%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 5%;
    
    @media only screen and (max-width:660px) {
        flex-direction: column;
        height: 100vh;
    }
`


export const InformationSection = styled.section<Props>`
    width: 246px;
    height: 100%;
    border: 1px solid ${ ({colorBorder} ) => (colorBorder? colorBorder : 'none')};
    border-radius: 16px;
    background: ${ ({background} ) => (background? background : 'none')};
`

export const DescriptionSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 110px;
    padding-left: 3%;
    padding-right: 3%;
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    margin-top: 2%;
`