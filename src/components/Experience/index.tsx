import * as S from "./styled";


interface Props {
    screen: number;
}

export const Experience = ({screen}: Props) => {
  return (
    <S.Container>
      <S.SectionRow>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
          Programador
        </S.InformationSection>
        <S.InformationSection background="rgba(123, 74, 226, 0.1)">
          trabalhos
        </S.InformationSection>
        <S.InformationSection colorBorder={"rgba(123, 74, 226, 0.5)"}>
          Desiger Ui
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
