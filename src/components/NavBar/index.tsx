import * as S from "./styled";

type Props = {
  screen: number;
  flexDirection?: string;
};

export const NavBar = ({ screen, flexDirection }: Props) => {
  return (
    <nav>
      <S.Ul screen={screen} flexDirection={flexDirection}>
        <li>
          <S.CustomStyleLink href={"#Home"}>Home</S.CustomStyleLink>
        </li>

        <li>
          <S.CustomStyleLink href={"#About"}>Sobre mim</S.CustomStyleLink>
        </li>

        <li>
          <S.CustomStyleLink href={"#Portfolio"}>Portfólio</S.CustomStyleLink>
        </li>

        <S.Li>
          <S.CustomStyleLink href={"#Contact"}>Contato</S.CustomStyleLink>
        </S.Li>
      </S.Ul>
    </nav>
  );
};
