import styled from "styled-components";

import Image from "next/image";

export const Container = styled.div`
  width: 94%;
  min-height: 498px;
  display: flex;

  @media (max-width: 814px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  section {
    margin: auto;
  }

  @media (max-width: 814px) {
    width: 98%;
  }
`;

export const Img = styled(Image)`
  border-radius: 100%;

  @media (max-width: 814px) {
    width: 200px;
    height: 200px;
  }
`;

export const SectionDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 3%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 45px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    color: #7b4ae2;
    margin-left: 10%;

    @media (max-width: 814px) {
      margin-left: 4%;
    }
  }

  h1 {
    height: 114px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    margin-left: 10%;

    @media (max-width: 814px) {
      margin-left: 4%;
    }
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27.5px;
    color: rgba(255, 255, 255, 0.5);
    transform: rotate(-0.03deg);
    margin-left: 10%;
    

    @media (max-width: 814px) {
      width: 95%;
      margin-left: 4%;
      padding-bottom: 5%;
    }
  }
`;
