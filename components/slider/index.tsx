import React from "react";
import Image from "next/image";
import styles from "@/components/slider/Slider.module.scss";
import Slider from "react-slick";
type Props = {};

const Card = () => {
  return (
    <article className={styles.card}>
      <Image src="/images/nature.jpg" alt="Nature" layout="fill"></Image>
      <div className={styles.card__backdrop}>
        <button className={styles.card__cta}>
          Stream Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.card__cta__icon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default function AutoSlider({}: Props) {
  const slider1 = React.useRef<any>();
  const slider2 = React.useRef<any>();
  const [state, setState] = React.useState("play");
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    centerMode: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 4,
    autoplay: true,
    initialSlide: 3,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  let handlePlay = (state: string) => {
    if (state === "play") {
      setState("play");

      slider1.current.slickPlay();
      slider2.current.slickPlay();
    } else {
      setState("pause");
      slider1.current.slickPause();
      slider2.current.slickPause();
    }
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings1} ref={slider1}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
      <Slider {...settings2} ref={slider2}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
      <div className={styles.slider__more}>
        <button className={styles.slider__more__cta}>
          See full lineup
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.slider__more__cta__icon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className={styles.play__pause}
          onClick={() =>
            state === "play" ? handlePlay("pause") : handlePlay("play")
          }
        >
          {state === "play" ? (
            <svg
              className={styles.play__pause__icon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.play__pause__icon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
