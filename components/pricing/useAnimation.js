import anime from "animejs";
import { useRef, useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { InView, useInView } from "react-intersection-observer";
export const usePricingAnimation = () => {
  let container = useRef(null);
  let [timeline, setTimeline] = useState(null);
  let [tl2, setTl2] = useState(null);
  const { ref: demos, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    let tl = anime.timeline({
      easing: "linear",
      autoplay: false,
      duration: 500,
    });
    tl.add({
      targets: container.current,
      backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
    });
    let demotl = anime({
      targets: ["#com1", "#com2", "#com3", "#com4"],
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 1200,
      autoplay: false,

      easing: "easeInOutQuad",
      delay: anime.stagger(100),
    });
    tl.finished.then(() => {
      demotl.play();
    });
    setTl2(demotl);
    setTimeline(tl);
  }, []);
  useEffect(() => {
    if (InView) {
      tl2?.play();
    }
  }, [inView, tl2]);
  // detect if the user is scrolling down or up

  useScrollPosition(
    ({ prevPos, currPos }) => {
      let currentPos = -currPos.y / window.innerHeight + 0.5;
      if ((currentPos > 0) & (currentPos < 0.9)) {
        timeline?.seek(currentPos * 1000);
      }
    },
    [timeline],
    container
  );
  return [container, demos];
};
