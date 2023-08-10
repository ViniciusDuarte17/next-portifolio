import styled from "styled-components";

interface Props {
    screen: number
}

export const ContentListIcons = styled.div<Props>`
  ul {
    list-style: none;
    display: ${({ screen }) => screen > 500 && "flex"};
    width: 8.25em;
    height: 2.25em;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25em;

    @media only screen and (max-width: 520px) {
      position: absolute;
      display: flex;
      width: 7.35em;
      top: 13%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  ul li {
    color: rgba(255, 255, 255, 0.5);
  }
`;