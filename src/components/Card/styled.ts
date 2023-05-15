import styled from "styled-components";

interface Props {
  color?: string;
  background?: string;
  width?: string;
}

export const Container = styled.div`
  width: 360px;
  height: 460px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  margin-bottom: 2%;
  margin-top: 2em;

  @media (max-width: 644px) {
    margin-top: 4em;
    width: 320px;
  }

  footer {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 3rem;

    a {
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Raleway;
    font-style: Bold;
    font-size: 20px;
    line-height: 23px;
    line-height: 100%;
    padding-bottom: 7%;
    padding-top: 7%;
    padding-left: 5%;
  }

  p {
    font-family: Raleway;
    font-style: Regular;
    font-size: 14px;
    line-height: 16px;
    line-height: 100%;
    padding-bottom: 7%;
    padding-left: 5%;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ListInfor = styled.div`
  display: flex;
`;

export const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-left: 5%;
  margin-bottom: 4%;
  margin-top: 1%;
  li {
    color: ${({ color }) => (color ? color : "none")};
    background: ${({ background }) => (background ? background : "none")};
    width: ${({ width }) => (width ? width : "83px")};
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TumbnailContainer = styled.div`
  width: calc(1235px * 0.25);
  height: calc(685px * 0.25);
  display: inline-block;
  overflow: hidden;
  position: relative;
  margin-top: 5%;
  margin-left: 5%;

  @media (max-width: 420px) {
    width: calc(960px * 0.25);
    margin-left: 10%;
  }
`;

export const Tumbnail = styled.div`
  -ms-zoom: 0.25;
  -moz-transform: scale(0.25);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.25);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.25);
  -webkit-transform-origin: 0 0;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  iframe {
    width: 1235px;
    height: 685px;
    /* background-color: #5965e0; */
  }

  @media (max-width: 420px) {
    iframe {
      width: 960px;
    }
  }
`;
