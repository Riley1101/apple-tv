import anime from "animejs";
import { useRef, useEffect } from "react";

export const useHeroAnimation = () => {
  const h1 = useRef(null);
  const btn = useRef(null);
  const desc = useRef(null);
  useEffect(() => {
    let tl = anime.timeline({
      easing: "linear",
      loop: false,
      duration: 800,
    });
    tl.add({
      delay: 100,
      targets: h1.current,
      opacity: [0, 1],
      translateY: [40, 0],
    });
    tl.add({
      targets: [btn.current, desc.current],
      opacity: [0, 1],
      translateY: [40, 0],
    });
  }, []);
  return [h1, btn, desc];
};
