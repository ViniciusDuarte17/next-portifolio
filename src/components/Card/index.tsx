import * as S from "./styled";

import { GithubLogo, GlobeHemisphereWest } from "phosphor-react";


interface Props {
  title: string;
  description: string;
  linkProject: string;
  linkGitHub: string;
}

export const Card = ({title, description,linkProject,linkGitHub}: Props) => {
  
  return (
    <S.Container>
      <S.Description>
        <h2>{title}</h2>

        <p>
         {description}
        </p>
      </S.Description>

      <S.ListInfor>
        <S.Ul
          background="rgba(74, 226, 144, 0.3)"
          color={"rgba(74, 226, 144, 1)"}
        >
          <li>Online</li>
        </S.Ul>
        <S.Ul
          width="106px"
          background=" rgba(123, 74, 226, 0.1) "
          color={"rgba(123, 74, 226, 1)"}
        >
          <li>Typescript</li>
        </S.Ul>
      </S.ListInfor>

      <S.TumbnailContainer>
        <S.Tumbnail>
          <iframe src={linkProject}></iframe>
        </S.Tumbnail>
      </S.TumbnailContainer>
      <footer>
          <a href={linkGitHub} target="_blank">
            <GithubLogo size={32} weight="fill" />  
          </a>
          <a href={linkProject} target="_blank">
            <GlobeHemisphereWest size={32} weight="fill" />
          </a>
        </footer>
    </S.Container>
  );
};
