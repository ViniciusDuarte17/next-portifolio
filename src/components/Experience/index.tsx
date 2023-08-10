import Image from "next/image";
import * as S from "./styled";

interface Props {
  screen: number;
}

export const Experience = ({ screen }: Props) => {
  return (
    <S.Container>
      <S.SectionRow>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
          <S.ProfessionalInformation>
            <Image width={72} height={64} src={"CodeIcon.svg"} alt="icon" />
            <p>2 anos estudando</p>
            <h2>Programação</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
        <S.InformationSection background="rgba(123, 74, 226, 0.1)">
          <S.ProfessionalInformation>
            <Image width={72} height={64} src={"ProjectsIcon.svg"} alt="icon" />
            <p>3 meses como</p>
            <h2>Front-end CLT</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
          <S.ProfessionalInformation>
            <Image width={72} height={64} src={"DesignIcon.svg"} alt="icon" />
            <p>+ 6 meses de</p>
            <h2>Freelance</h2>
          </S.ProfessionalInformation>
        </S.InformationSection>
      </S.SectionRow>

      {screen > 660 && (
        <S.DescriptionSection>
          <div>
            <span>Desenvolvedor</span>
            <h3>Full-stack</h3>
          </div>
          <div>
            <span>Dezenas de projetos e</span>
            <h3>Experiências</h3>
          </div>
          <div>
            <span>Designer Freelancer e</span>
            <h3>UI · UX</h3>
          </div>
        </S.DescriptionSection>
      )}
    </S.Container>
  );
};
