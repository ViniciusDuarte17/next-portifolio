
import * as S from "./styled";

import Image from "next/image";

interface Props {
  screen: number;
}

export const Portfolio = ({ screen }: Props) => {

  return (
    <S.Container>
      <S.SectionDirectionRow width="100%">
        <S.SectionPortfolio>
          <p>🔗 Portfólio</p>
          {screen > 570 ? (
            <h1>Trabalhos e projetos</h1>
          ) : (
            <h1>
              Trabalhos
              <br /> e projetos
            </h1>
          )}
        </S.SectionPortfolio>

        <S.SectionIcon>
          <S.ContentDiv colorBorder={"rgba(123, 74, 226, 0.5)"}>
            <Image width={45} height={40} src="DesignIcon.svg" alt="icon" />
            <span>Ui Design</span>
          </S.ContentDiv>
          <br />
          <S.ContentDiv background="rgba(123, 74, 226, 0.1)">
            <Image width={45} height={40} src="DesignIcon.svg" alt="icon" />
            <span>Design</span>
          </S.ContentDiv>
          <S.ContentDiv colorBorder={"rgba(123, 74, 226, 0.5)"}>
            <Image width={45} height={40} src="DesignIcon.svg" alt="icon" />
            <span>Ui Design</span>
          </S.ContentDiv>
        </S.SectionIcon>
      </S.SectionDirectionRow>
    </S.Container>
  );
};
