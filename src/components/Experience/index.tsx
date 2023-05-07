import Image from "next/image";
import * as S from "./styled";


interface Props {
    screen: number;
}

export const Experience = ({screen}: Props) => {
  return (
    <S.Container>
      <S.SectionRow>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
          <S.ProfessionalInformation>
            <Image width={72} height={64} src={"CodeIcon.svg"} alt="icon"/>
            <p>3 anos como</p>
            <h2>Programador</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
        <S.InformationSection background="rgba(123, 74, 226, 0.1)">
        <S.ProfessionalInformation>
            <Image width={72} height={64} src={"ProjectsIcon.svg"} alt="icon"/>
            <p>7 anos como</p>
            <h2>Trabalhos</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
        <S.ProfessionalInformation>
            <Image width={72} height={64} src={"DesignIcon.svg"} alt="icon"/>
            <p>4 anos como</p>
            <h2>Designer</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
      </S.SectionRow>

      {
        screen > 660 && <S.DescriptionSection>
        <div>
          <span>texto1</span>
          <p>Descrição1</p>
        </div>
        <div>
          <span>texto2</span>
          <p>Descrição2</p>
        </div>
        <div>
          <span>texto3</span>
          <p>Descrição3</p>
        </div>
      </S.DescriptionSection>
      }
    </S.Container>
  );
};
