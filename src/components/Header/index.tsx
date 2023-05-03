import Image from "next/image";


import * as S from "./styled";

function Header() {
  return (
    <S.ContainerHeader>
      <figure>
        <Image width={25} height={25} src="/Logo.png" alt="logo" />
      </figure>
      <nav>
        <S.Ul>
          <li>
            <S.CustomStyleLink href={"/"}>
              Home
            </S.CustomStyleLink>
          </li>

          <li>
            <S.CustomStyleLink href={"/Sobre mim"}>
              Sobre mim
            </S.CustomStyleLink>
          </li>

          <li>
            <S.CustomStyleLink href={"/Portfolio"}>
              Portfólio
            </S.CustomStyleLink>
          </li>

          <S.Li>
            <S.CustomStyleLink href={"/Contato"}>
              Contato
            </S.CustomStyleLink>
          </S.Li>
        </S.Ul>
      </nav>
    </S.ContainerHeader>
  );
}

export default Header;
