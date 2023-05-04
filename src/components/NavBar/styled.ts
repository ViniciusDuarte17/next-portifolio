import styled  from "styled-components";
import Link from "next/link";

type Props = {
    screen: number,
    flexDirection?: string
}

export const Ul = styled.ul<Props>`
    list-style: none;
    display: ${({screen}) => (screen > 590 ? 'flex' : 'none')};
    flex-direction: ${({flexDirection}) => (flexDirection ? 'column' : 'row')};
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
