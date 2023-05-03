import { ReactNode } from "react";
import * as S from "./styled";


interface Props {
    children: ReactNode,
    onClick: () => void
}

function CustomButton ({children, onClick}: Props) {

    return(
        <div>
            <S.Button onClick={ onClick }>
                {children}
            </S.Button>
        </div>
    )
}

export default CustomButton