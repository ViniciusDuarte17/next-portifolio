import Link from "next/link";
import styled from "styled-components";


export const ContainerHeader = styled.header`
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


export const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
`

export const Li = styled.li`
    margin-right: 32px;
`

export const CustomStyleLink = styled(Link)`
    text-decoration: none;
    color:#fff;
    opacity: 50%;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0;

    &:focus, :hover {
        color:#7B4AE2;
        opacity: 75%;
    }
`