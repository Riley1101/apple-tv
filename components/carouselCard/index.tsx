import React from "react";
import Image from "next/image";
import styles from "@/components/carouselCard/CarouselCard.module.scss";
export default function CarouselCard() {
  return (
    <article className={styles.card}>
      <div className={styles.card__modal}>
        <h4 className={styles.card__modal__title}>Coming 6.14</h4>
        <p className={styles.card__modal__description}>CHA CHA Real Smooth</p>
      </div>
      <figure className={styles.card__image}>
        <Image
          src="/images/nature.jpg"
          alt="carousel card"
          layout="fill"
          objectFit="cover"
        />
      </figure>
      <figcaption className={styles.card__caption}>
        <div className={styles.card__caption__wrapper}>
          <h3 className={styles.card__caption__category}>Comedy</h3>
          <p className={styles.card__caption__description}>
            She is about to change her future
          </p>
        </div>

        <button className={styles.card__caption__cta}>
          Stream Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.card__caption__cta__icon}
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
      </figcaption>
    </article>
  );
}
