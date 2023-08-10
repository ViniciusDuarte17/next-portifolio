import { SocialNetwork } from "../SocialNetwork";
import * as S from "./styled";

interface Props {
  screen: number;
}

export const Footer = ({ screen }: Props) => {
  return (
    <S.ContainerFooter>
      <S.Direction>
        <S.GmailStyled>
          <p>testealgumacoisa@gmail.com</p>
        </S.GmailStyled>
        <div>
            <SocialNetwork screen={screen}/>
        </div>
      </S.Direction>
    </S.ContainerFooter>
  );
};
