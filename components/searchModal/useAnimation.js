import anime from "animejs";
import { useRef, useEffect, useState } from "react";

export const useModalAnimation = () => {
  const input = useRef(null);
  const result = useRef(null);
  useEffect(() => {
    let tl = anime.timeline({
      easing: "easeInOutQuad",
      loop: false,
    });
    tl.add({
      duration: 500,
      delay: 100,
      targets: input.current,
      opacity: [0, 1],
      translateX: [40, 0],
    });
    tl.add({
      duration: 400,
      targets: result.current.children,
      opacity: [0, 1],
      translateX: [30, 0],
    });
  }, []);
  return [input, result];
};
