import anime from "animejs";
import { useRef, useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export const useCarouselAnimation = () => {
  let container: any = useRef(null);
  let [animation, setAnimation] = <any>useState(null);
  let [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    let anim: any = anime({
      targets: ".big .slick-list .slick-slide ",
      scale: [1.9, 1],
      autoplay: false,
      duration: 400,
      easing: "linear",
    });
    setAnimation(anim);
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      let currentPos = -currPos.y / window.innerHeight + 0.5;
      if (currentPos > 0 && currentPos < 0.9) {
        let tmp = currentPos * 1000;
        setScrollPosition(tmp);
        animation?.seek(tmp);
      }
    },
    [animation],
    container
  );
  return [container, scrollPosition];
};
