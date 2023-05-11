import * as S from "./styled";

export const Card = () => {
  return (
    <S.Container>
        <h2>title</h2>

        <p>Descrição</p>

        <div>
            <button>
                online
            </button>
            <button>
                typescript
            </button>
        </div>

        <div>
            <iframe src="https://ifood-gold.vercel.app" >
                conteudo
            </iframe>
        </div>
    </S.Container>
  );
};
