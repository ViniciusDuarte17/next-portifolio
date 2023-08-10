import { SocialNetwork } from "../SocialNetwork";
import * as S from "./styled";

interface Props {
  screen: number;
}

export const Footer = ({ screen }: Props) => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    
  return (
    <S.ContainerFooter>
      <S.Direction>
        <S.GmailStyled>
          <p>Copyright © Vinicius Duarte · {anoAtual}</p>
        </S.GmailStyled>
        <div>
            <SocialNetwork screen={screen}/>
        </div>
      </S.Direction>
    </S.ContainerFooter>
  );
};
