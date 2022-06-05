import React from "react";
import CarouselCard from "@/components/carouselCard";
import Slider from "react-slick";
import styles from "@/components/carousel/Carousel.module.scss";
type Props = {};
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrow__left} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrow__right} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

const Carousel = (props: Props) => {
  const [padding, setPadding] = React.useState("20px");
  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setPadding("60px");
    } else {
      setPadding("300px");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setPadding("60px");
      } else {
        setPadding("300px");
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  var settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: padding,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>
    </div>
  );
};

export default Carousel;
