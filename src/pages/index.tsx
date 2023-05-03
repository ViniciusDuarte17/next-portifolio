import type { NextPage } from "next";

import * as S from "../styles/Home";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../components/Button";

const Home: NextPage = () => {


  return (
    <S.HomeMain>
      <Header />

      <S.ContainerSection>
        <S.ContentPresentation>
          {/* Seção 1 => Saudações */}
          <S.Information>
            <h4>👋 Saudações!</h4>

            <h1>
              Vinicius <br />
              Duarte
            </h1>
          </S.Information>

          <S.ContentTextFrontEnd>
            <h6>Full-stack developer- UI designer</h6>
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
     {/* Seção 2 => Avatar  */}
        <S.SectionToAvatar>
      
          <S.AvatarFigma>
            <br></br>
            <br></br>
            <Image width={250} height={250} src="/Avatar.png" alt="avatar profile" />
          </S.AvatarFigma>

        </S.SectionToAvatar>

        <S.SectionContact>
          {/* Seção 3 => Informações do CV e botão para falar comigo no whats */}
          <S.JoinImgToText>
            <CustomButton onClick={() => console.log('clicou')} >
              <S.SpanButtonCV>
                Baixar CV
              </S.SpanButtonCV>
            </CustomButton>

            <figure>
              <Image width={24} height={24} src="ArrowLineDown.svg" alt="icons download" />
            </figure>
          </S.JoinImgToText>

          <S.JoinLogoWhatsLink>
            <Image width={24} height={24} src="WhatsappLogo.svg" alt="icons download" />

            <S.LinkToWhatsapp href={'/'}>
              Vamos conversar
            </S.LinkToWhatsapp>
          </S.JoinLogoWhatsLink>
        </S.SectionContact>
      </S.ContainerSection>

    </S.HomeMain>
  );
};

export default Home;
