import React from "react";
import Image from "next/image";
import styles from "@/components/commercial/Commercial.module.scss";
type Props = {};

const Commercial = (props: Props) => {
  return (
    <section className={styles.commercial}>
      <div className={styles.commercial__intro}>
        <div className={styles.commercial__logo}>
          <Image
            src="/icons/appletv.png"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>

        <h2 className={styles.commercial__intro__title}>
          Watch Apple TV + anywhere on the Apple TV app
        </h2>
        <p className={styles.commercial__intro__description}>
          Find the Apple TV app on your favourite Apple devices. <br /> Or watch
          Apple TV+ online at
          <span className={styles.commercial__intro__description__link}>
            tv.apple.com
          </span>
        </p>
      </div>
      <div className={styles.product}>
        <div className={styles.product__items}>
          <Image
            src="/icons/tv.jpg"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>Apple TV</p>
        </div>
        <div className={styles.product__items}>
          <Image
            src="/icons/iphone.jpg"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>iPhone</p>
        </div>
        <div className={styles.product__items}>
          <Image
            src="/icons/ipad.jpg"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>iPad</p>
        </div>
        <div className={styles.product__items}>
          <Image
            src="/icons/imac.jpg"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>Mac</p>
        </div>
        <div className={styles.product__items}>
          <Image
            src="/icons/applecast.jpg"
            width={40}
            height={40}
            alt="Apple TV"
            objectFit="contain"
          ></Image>
          <p>AirPlay</p>
        </div>
      </div>
      <div className={styles.commercial__mid}>
        <h2 className={styles.commercial__mid__title}>
          See it on your smart TV <br /> or streaming device
        </h2>
        <span className={styles.commercial__mid__link}>
          Set up your device &gt;
        </span>
        <span className={styles.commercial__mid__link}>
          Explore compatible devices &gt;
        </span>
      </div>
      <div className={styles.companies}>
        <div className={styles.companies__items}>
          <Image
            src="/icons/samsung.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/lg.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/vuzui.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/sony.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/xfinity.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/roku.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/firetv.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/googletv.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/playstation.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
        <div className={styles.companies__items}>
          <Image
            src="/icons/xbox.jpg"
            layout="fill"
            objectFit="contain"
            alt="Apple TV"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
