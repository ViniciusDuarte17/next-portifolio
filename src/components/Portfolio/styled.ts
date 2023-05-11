import styled from "styled-components";

import { motion } from "framer-motion";

interface Props {
  width?: string;
  colorBorder?: string;
  background?: string;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  min-height: 200px;
`;

export const SectionDirectionRow = styled.section<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : "0")};

  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 184px;
  height: 60px;
  border: 1px solid ${({ colorBorder }) => (colorBorder ? colorBorder : "none")};
  background: ${({ background }) => (background ? background : "none")};
  border-radius: 16px;
  margin-top: 10%;

  span {
    font-family: Raleway;
    font-style: SemiBold;
    font-size: 20px;
    line-height: 23px;
    line-height: 100%;
    color: rgba(123, 74, 226, 0.5);

    @media (max-width: 514px) {
      font-size: 14px;
      line-height: 16px;
      line-height: 100%;
    }
  }

  @media (max-width: 514px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 116px;
    height: 40px;
  }
`;

export const SectionPortfolio = styled.section`
  width: 50%;
  height: 129px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;
    height: 45px;
    font-family: Raleway;
    font-style: Bold;
    font-size: 20px;
    line-height: 23px;
    line-height: 100%;
    background-color: rgba(123, 74, 226, 0.1);
    color: rgba(123, 74, 226, 1);
    border-radius: 16px;

    @media (max-width: 538px) {
      width: 103px;
      height: 32px;
      font-size: 14px;
      line-height: 16px;
      line-height: 100%;
    }
  }

  h1 {
    margin-top: 3%;
    font-family: Raleway;
    font-style: ExtraBold;
    font-size: 48px;
    line-height: 56px;
    line-height: 100%;

    @media (max-width: 538px) {
      font-family: Raleway;
      font-style: ExtraBold;
      font-size: 24px;
      line-height: 28px;
      line-height: 100%;
    }
  }
`;

export const SectionIcon = styled.section`
  display: flex;
  gap: 16px;

  @media (max-width: 538px) {
    width: 22.2em;
    position: absolute;
    display: flex;
    margin-left: -20px;
    margin-top: 5em;
  }
`;


export const Projects = styled.section`
   display: grid;
   grid-template-columns:  1fr 1fr  1fr;

   @media (max-width: 1120px) {
    grid-template-columns:  1fr 1fr;
   }

   @media (max-width: 864px) {
    grid-template-columns: 1fr; 
   }
`

// Estilização para corresel

export const ContainerCarousel = styled.div`
    max-width: 300px;
`
export const Carousel = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
`
export const InnerCarousel = styled(motion.div)`
    display: flex;
`

export const CarouselItem = styled(motion.div)`
    min-height: 300px;
    min-width: 350px;
    padding:14px;
`
