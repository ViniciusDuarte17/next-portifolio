import type { NextPage } from "next";
import * as S from "../styles/Home";
import Header from "../components/Header";
import Image from "next/image";
import CustomButton from "../components/Button";
import { useEffect, useState } from "react";
import { Experience } from "../components/Experience";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SocialNetwork } from "../components/SocialNetwork";
import { saveAs } from 'file-saver';
// import CV from '../assets/ViniciusDuarte.pdf'

const Home: NextPage = () => {
  const [screen, setScreen] = useState<number>(0)

  function handleResize(entries: ResizeObserverEntry[]) {
    for (let entry of entries) {
      const cr = entry.contentRect;
      setScreen(cr.width);
    }
  }

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.body);
    return () => {
      observer.unobserve(document.body);
    };
  }, []);

  const onGetCv = () => {

    fetch('CV').then((response) => {
      response.blob().then((blob) => {
        saveAs(blob, "cvViniciusDuarte.pdf");
      });
    });
  };

  return (
    <S.HomeMain>
      <Header screen={screen} />

      <S.ContainerSection id="Home">
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

          <SocialNetwork screen={screen} />

        </S.ContentPresentation>
     {/* Seção 2 => Avatar  */}
        <S.SectionToAvatar>
      
          <S.AvatarFigma>
            <br></br>
            <br></br>
            <Image width={250} height={250} src="/avatar.png" alt="avatar profile" />
          </S.AvatarFigma>

        </S.SectionToAvatar>

        <S.SectionContact>
          {/* Seção 3 => Informações do CV e botão para falar comigo no whats */}
          <S.JoinImgToText>
            <CustomButton onClick={() => onGetCv()} >
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

            <S.LinkToWhatsapp href={'https://contate.me/dev-vinicius'} target="_blank">
              Vamos conversar
            </S.LinkToWhatsapp>
          </S.JoinLogoWhatsLink>
        </S.SectionContact>
      </S.ContainerSection>

      <Experience screen={screen}/>

      <About screen={screen}/>

      <Portfolio screen={screen} />

      <Contact />

      <Footer screen={screen}/>
      
    </S.HomeMain>
  );
};

export default Home;
