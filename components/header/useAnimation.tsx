import anime from "animejs";
import { useRef, useEffect, useState } from "react";
export const useBannerAnimation = () => {
  const element = useRef(null);
  useEffect(() => {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 800,
    });
    tl.add({
      targets: element.current,
      scaleY: 0,
      backgroundColor: "hsl(209, 100%, 58%)",
    });
    tl.add({
      targets: element.current,
      scaleY: 1,
      backgroundColor: "hsl(209, 100%, 58%)",
    });
    tl.add({
      targets: element.current,
      backgroundColor: "#1a1a1a",
    });
  }, []);
  return element;
};

export const useNavigationAnimation = () => {
  const [animation, setAnimation] = useState(null);

  const element = useRef(null);
  let icon = useRef(null);
  useEffect(() => {
    let targets = element?.current?.children;
    // reverse the target
    targets = Array.from(targets).reverse();
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 400,
      loop: false,
      autoplay: false,
      delay: anime.stagger(50),
    });
    tl.add({
      targets: targets,
      scale: 0,
    });
    setAnimation(tl);
  }, []);
  return [animation, element, icon];
};
