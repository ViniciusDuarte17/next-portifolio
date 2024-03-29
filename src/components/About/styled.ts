import styled from "styled-components";

import Image from "next/image";

export const Container = styled.div`
  width: 85%;
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
  margin-top: -15em;
  @media (max-width: 814px) {
    margin-top: 0em;
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
    line-height: 100%;
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    color: #7b4ae2;
    margin-top: 5%;
    margin-left: 20%;

    @media (max-width: 814px) {
      margin-left: 4%;
     
    }
    @media (max-width: 514px) {
      width: 113px;
      height: 32px;
      font-size: 14px;
      line-height: 16px;
      line-height: 100%;
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
    margin-left: 20%;

    @media (max-width: 814px) {
      margin-left: 4%;
    }

    @media (max-width: 514px) {
      height: 55px;
      font-size: 24px;
      line-height: 28px;
      line-height: 100%;
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
    margin-left: 20%;
    

    @media (max-width: 814px) {
      width: 95%;
      margin-left: 4%;
      padding-bottom: 5%;
    }

    @media (max-width: 514px) {
      font-family: Raleway;
      font-style: Regular;
      font-size: 14px;
      line-height: 25px;
      line-height: 152%;
    }
  }
`;
