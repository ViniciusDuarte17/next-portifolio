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
              👋 Olá! Meu nome é Vinicius Duarte Passo, e sou um profissional de
              programação apaixonado e dedicado. Prazer!
            </p>
            <p>
              👨‍💻 Com experiência em JavaScript, TypeScript, React, Vue.js,
              Node.js, MySQL e MongoDB. Posso oferecer soluções inovadoras e
              eficazes para o seu projeto. Como desenvolvedor, acredito que a
              melhor maneira de criar aplicativos e sistemas é colocando os
              usuários em primeiro lugar.
            </p>
            <p>
              🎓 Por isso, sempre busco entender as necessidades do público-alvo
              e criar interfaces de usuário intuitivas e fáceis de usar. Além
              disso, sou um entusiasta de tecnologia e estou sempre procurando
              aprender mais sobre novas ferramentas e tendências em programação.
              Estou constantemente me atualizando para garantir que meus
              projetos estejam sempre na vanguarda do mercado.
            </p>
            <p>
              💡 Se você procura um profissional experiente, apaixonado e
              atualizado em programação, não hesite em entrar em contato comigo.
              Vamos criar algo incrível juntos!
            </p>
          </>
        ) : (
          <p>
            Olá! Meu nome é Vinicius Duarte Passo, e sou um profissional de
            programação apaixonado e dedicado. Com experiência em JavaScript,
            TypeScript, React, Vue.js, Node.js, MySQL e MongoDB. Posso oferecer
            soluções inovadoras e eficazes para o seu projeto. Como
            desenvolvedor, acredito que a melhor maneira de criar aplicativos e
            sistemas é colocando os usuários em primeiro lugar. Por isso, sempre
            busco entender as necessidades do público-alvo e criar interfaces de
            usuário intuitivas e fáceis de usar. Além disso, sou um entusiasta
            de tecnologia e estou sempre procurando aprender mais sobre novas
            ferramentas e tendências em programação. Estou constantemente me
            atualizando para garantir que meus projetos estejam sempre na
            vanguarda do mercado. Se você procura um profissional experiente,
            apaixonado e atualizado em programação, não hesite em entrar em
            contato comigo. Vamos criar algo incrível juntos!
          </p>
        )}
        <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
      </S.SectionDescription>
    </S.Container>
  );
};
