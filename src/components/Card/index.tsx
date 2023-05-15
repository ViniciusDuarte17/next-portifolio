import * as S from "./styled";

import { GithubLogo, GlobeHemisphereWest } from "phosphor-react";

export const Card = () => {
  return (
    <S.Container>
      <S.Description>
        <h2>LabeFood</h2>

        <p>
          Este projeto foi desenvolvido como parte do bootcamp ministrado pela
          Labenu
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
          <iframe src="https://the-movie-eight.vercel.app/"></iframe>
        </S.Tumbnail>
      </S.TumbnailContainer>
      <footer>
          <a href="">
            <GithubLogo size={32} weight="fill" />  
          </a>
          <a href="">
            <GlobeHemisphereWest size={32} weight="fill" />
          </a>
        </footer>
    </S.Container>
  );
};
