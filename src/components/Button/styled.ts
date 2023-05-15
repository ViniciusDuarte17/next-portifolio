import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  border?: string;
}

export const Button = styled.button<Props>`
  width: ${({ width }) => (width ? width : "none")};
  height: ${({ height }) => (height ? height : "none")};
  color: ${({ color }) => (color ? color : "none")};
  border: ${({ border }) => (border ? border : "none")};
  background: ${({ background }) => (background ? background : "none")};
  padding: 0;
  cursor: pointer;
  color: rgba(123, 74, 226, 0.5);

  span {
    color: ${({ color }) => (color ? color : "none")};
    font-family: Raleway;
    font-style: Bold;
    font-size: 16px;
    line-height: 19px;
    line-height: 100%;
  }
`;
