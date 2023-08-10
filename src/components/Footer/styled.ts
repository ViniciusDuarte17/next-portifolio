import styled from "styled-components";


export const ContainerFooter = styled.footer`
    width: 100%;
    height: 4em;
    background: rgba(123, 74, 226, 0.1);

    @media (max-width: 590px) {
        height: 6em;
    }
`

export const GmailStyled = styled.div`

`

export const NetworkStyled = styled.div`

`

export const Direction = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-around;
 
    @media (max-width: 590px) {
        width: 100%;
        height: 5.3em;
        flex-direction: column;
        justify-content: space-between;
        ${GmailStyled} {
            order: 2;
        }
        ${NetworkStyled} {
            order: 1;
        }
}
`