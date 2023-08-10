import Image from "next/image"
import Link from "next/link"
import * as S from "./styled";

interface Props {
    screen: number;
  }

export const SocialNetwork = ({ screen }: Props) => {

    return(
        <S.ContentListIcons screen={screen}>
             <ul>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/In.svg"}
                    alt={"svg linkedin"}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/Shape.svg"}
                    alt={"svg GitHub"}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    width={32}
                    height={32}
                    src={"/twitter.svg"}
                    alt={"svg twitter2"}
                  />
                </Link>
              </li>
            </ul>
        </S.ContentListIcons>
    )
}