import React from "react";
import styles from "@/components/hero/Hero.module.scss";
import Image from "next/image";
export default function Hero() {
  // frame motion animation for hero

  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__content__title}>
          All Apple Originals
          <br className={styles.hero__content__title__break} /> Only on Apple TV
          +.
        </h1>
        <button className={styles.hero__content__cta}>Stream Now</button>
      </div>
      <div className={styles.hero__content__description}>
        Watch on the
        <span className={styles.hero__content__description__icon}>
          <Image
            src="/icons/appletv.png"
            width={32}
            height={32}
            alt="Apple TV"
            objectFit="cover"
          />
        </span>
        app
      </div>
    </div>
  );
}
