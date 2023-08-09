import * as S from "./styled";

type Props = {
  screen: number;
};

export const About = ({ screen }: Props) => {
  return (
    <S.Container>
      <section>
        <S.Img width={320} height={320} src={"/vinicius.png"} alt="logo" />
      </section>

      <S.SectionDescription id="About">
        <span>🧐 Sobre mim</span>

        <h1>
          Vinicius Duarte <br />
          Passos
        </h1>

        {screen > 814 ? (
          <>
            <p>
              👋 Olá! Meu nome é Vinicius Duarte Passo, e sou desenvolvedor
              web full-stack.
            </p>
            <p>
              👨‍💻 Atuamente estou trabalhando como desenvolvedor
                  front-end na Ng7 consultoria!
            </p>
            <p>
              🎓 Sou formado no Labenu, onde concluí um programa de mais de 1000 horas de experiência
              prática em desenvolvimento Full-stack. Durante o curso, adquiri habilidades em HTML, CSS,
              JavaScript, React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS,
              Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.
            </p>
            <p>
              💡 Tenho um interesse constante em aprender coisas novas!
            </p>
          </>
        ) : (
          <p>
             Olá! Sou Vinicius Duarte Passo, desenvolvedor web full-stack atualmente trabalhando como 
             desenvolvedor front-end na Ng7 Consultoria. Concluí um programa abrangente de desenvolvimento
              Full-stack na Labenu, com mais de 1000 horas de experiência prática. Adquiri habilidades 
              em HTML, CSS, JavaScript, React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest,
               Node.JS, Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase, Testes unitários e UI Design.
                Estou sempre em busca de novos conhecimentos e aprendizados!
          </p>
        )}
        <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
      </S.SectionDescription>
    </S.Container>
  );
};
