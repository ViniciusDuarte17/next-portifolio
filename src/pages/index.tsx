import type { NextPage } from "next";

import * as S from "../styles/Home";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <S.HomeMain>
      <Header />

      <S.ContainerSection>
        <S.ContentPresentation>
          <S.Information>
            <h4>👋 Saudações!</h4>

            <h1>
              Vinicius <br />
              Duarte
            </h1>
          </S.Information>

          <S.ContentTextFrontEnd>
            <h6>Front-end developer- UI designer</h6>
          </S.ContentTextFrontEnd>

          <S.ContentListIcons>
            <ul>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/In.svg"}
                    alt={"svg linkedin"}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/Shape.svg"}
                    alt={"svg GitHub"}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/twitter.svg"}
                    alt={"svg twitter2"}
                  />
                </Link>
              </li>
            </ul>
          </S.ContentListIcons>
        </S.ContentPresentation>
        <section>
          <S.FigureAvatar>
             <Image width={270} height={270} src="/avatar.png" alt="logo-profile" />
          </S.FigureAvatar>

          <S.FigureFigma>
            <Image width={90} height={90} src="/Group.svg" alt="figma" />
          </S.FigureFigma>

          <S.FigureTypeScript>
            <S.ImageTypeScript width={25} height={25} src="/TypeScript.svg"  alt="Logo typescript"/>
          </S.FigureTypeScript>
        </section>

        <section>section 3</section>
      </S.ContainerSection>
    </S.HomeMain>
  );
};

export default Home;
