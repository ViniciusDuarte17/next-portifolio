import { Card } from "../Card";

import project from "../../data/projects.json";

import * as S from "./styled";

import Image from "next/image";
import { MobileProject } from "./MobileProject";

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
            <Image
              width={screen > 514 ? 45 : 27}
              height={screen > 514 ? 40 : 24}
              src="DesignIcon.svg"
              alt="icon"
            />
            <span>Ui Design</span>
          </S.ContentDiv>
          <br />
          <S.ContentDiv background="rgba(123, 74, 226, 0.1)">
            <Image
              width={screen > 514 ? 45 : 27}
              height={screen > 514 ? 40 : 24}
              src="DesignIcon.svg"
              alt="icon"
            />
            <span>Design</span>
          </S.ContentDiv>
          <S.ContentDiv colorBorder={"rgba(123, 74, 226, 0.5)"}>
            <Image
              width={screen > 514 ? 45 : 27}
              height={screen > 514 ? 40 : 24}
              src="DesignIcon.svg"
              alt="icon"
            />
            <span>Ui Design</span>
          </S.ContentDiv>
        </S.SectionIcon>
      </S.SectionDirectionRow>

      <S.Projects>
        {screen > 620 ? (
          <>
            {project.map((projec) => (
              <>
                <Card
                  key={projec.id}
                  title={projec.title}
                  description={projec.descripiton}
                  linkProject={projec.iframeUrl}
                  linkGitHub={projec.gitHubUrl}
                />
              </>
            ))}
          </>
        ) : (
          <MobileProject />
        )}
      </S.Projects>
    </S.Container>
  );
};
