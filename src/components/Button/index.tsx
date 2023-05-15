import { ReactNode } from "react";
import * as S from "./styled";

interface Props {
  children: ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
}

function CustomButton({
  children,
  onClick,
  width,
  height,
  background,
  color,
}: Props) {
  return (
    <div>
      <S.Button
        color={color}
        background={background}
        height={height}
        width={width}
        onClick={onClick}
      >
        <span>{children}</span>
      </S.Button>
    </div>
  );
}

export default CustomButton;
