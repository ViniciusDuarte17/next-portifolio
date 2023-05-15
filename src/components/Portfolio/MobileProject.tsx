import project from "../../data/projects.json";
import { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import { Card } from "../Card";

export const MobileProject = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <S.ContainerCarousel>
        <S.Carousel ref={carousel} whileTap={{ cursor: "grabbing" }}>
          <S.InnerCarousel
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            {project.map((projec) => (
              <S.CarouselItem key={projec.id}>
                <Card
                  key={projec.id}
                  title={projec.title}
                  description={projec.descripiton}
                  linkProject={projec.iframeUrl}
                  linkGitHub={projec.gitHubUrl}
                />
              </S.CarouselItem>
            ))}
          </S.InnerCarousel>
        </S.Carousel>
      </S.ContainerCarousel>
    </>
  );
};
