import Image from "next/image";

import * as S from "./styled";
import { NavBar } from "../NavBar";
import CustomButton from "../Button";
import { useState } from "react";

type Props = {
  screen: number;
};

function Header({ screen }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.ContainerHeader>
      <figure>
        <Image width={25} height={25} src="/Logo.png" alt="logo" />
      </figure>

      {screen < 591 && (
        <S.PositionButton>
          <CustomButton onClick={() => setOpen(!open)}>
            <span>
              {open ? (
                <Image
                  width={34}
                  height={34}
                  src={"/MenuFechar.svg"}
                  alt="menu para abrir"
                />
              ) : (
                <Image
                  width={34}
                  height={34}
                  src={"/menu3.svg"}
                  alt="menu para abrir"
                />
              )}
            </span>
          </CustomButton>
        </S.PositionButton>
      )}
      <NavBar screen={screen} />
      {open && screen < 591 ?
       <S.NavBarMobile>
         <NavBar screen={screen * 3} flexDirection={'column'}/>
       </S.NavBarMobile> : 
       null}
    </S.ContainerHeader>
  );
}

export default Header;
