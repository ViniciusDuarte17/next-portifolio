import React from "react";
import * as S from "./styled";
import Image from "next/image";
import * as SHome from "../../styles/Home";


interface Props {
  screen: number;
}

export const Contact = ({ screen }: Props) => {
  return (
    <S.Container>
      <S.StyledContact>
        <h2>Contatos!</h2>
      </S.StyledContact>

      <S.StyledContact>
        <h1>Vamos conversar!</h1>
      </S.StyledContact>

      <S.ContentContact>
        <S.StyleRowContact>
      
           <SHome.JoinLogoWhatsLink  style={{marginTop: "5%"}}>
            <Image width={24} height={24} src="WhatsappLogo.svg" alt="icons download" />

            <SHome.LinkToWhatsapp href={'/'}>
              Vamos conversar
            </SHome.LinkToWhatsapp>
          </SHome.JoinLogoWhatsLink>
          <div>
            <S.DisplayColumn>
              <div style={{paddingBottom: '7px'}}>
                <Image
                  width={32}
                  height={32}
                  src={"/Envio.svg"}
                  alt={"svg enviar email"}
                />
              </div>
              <div>
                <S.EmailStyle color="#7B4AE2">E-mail:</S.EmailStyle>
                
              </div>
            </S.DisplayColumn>

            <S.EmailStyle color="#FFFFFF" opacity={0.5}>
              vinicius.benduarte14@gmail.com
            </S.EmailStyle>
            <S.DisplayColumn>
              <S.ButtonImageCopy
                width={32}
                height={32}
                src={"/CopySimple.svg"}
                alt={"Copiar email"}
              />
            </S.DisplayColumn>
          </div>
        </S.StyleRowContact>
      </S.ContentContact>
      <div>
        <S.LinkTop href={"/"}>
            <S.SpanTop>Voltar ao topo!</S.SpanTop>
            
            <Image src={"ArrowUp.svg"} width={26} height={24} alt={"flexa de voltar ao topo"} />
        </S.LinkTop>
      </div>
    </S.Container>
  );
};
