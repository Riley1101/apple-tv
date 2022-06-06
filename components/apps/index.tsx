import React from "react";
import Image from "next/image";
import styles from "@/components/apps/Apps.module.scss";
type Props = {};

const Apps = (props: Props) => {
  return (
    <>
      <div className={styles.apps}>
        <div className={styles.one}>
          <div className={styles.apps__content}>
            <div className={styles.apps__meta}>
              <Image
                alt="Apps"
                src="/icons/apple_dark.svg"
                width={20}
                height={20}
                objectFit="contain"
              />
              One
            </div>
            <h2 className={styles.apps__title}>
              Bundle App TV + with up to five other great services. And enjoy
              more for less
            </h2>
            <button className={styles.apps__button}>Try Apple One Free*</button>
            <a className={styles.apps__link}>Learn More {">"} </a>
          </div>
          <div className={styles.apps__image}>
            <Image
              alt="Apps"
              src="/icons/apps.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.apps__content}>
            <h2 className={styles.apps__title}>
              The Apple Music Student Plan comes with Apple TV+ for free.
            </h2>
            <button className={styles.two__button}>Try Apple Music Free</button>
          </div>
          <div className={styles.apps__image}>
            <Image
              alt="Apps"
              src="/icons/appleMusic.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className={styles.apps_alt}>
        <div className={styles.apps_alt__one}>
          <div className={styles.apps_alt__img}>
            <Image
              alt="Apps"
              src="/icons/apple_fourk.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className={styles.apps_alt__description}>
            A higher defination of TV
          </h2>
          <div className={styles.apps_alt__cta}>
            <button>Buy</button>
            <a>Learn More {">"} </a>
          </div>
          <div className={styles.apps_alt__img__alt}>
            <Image
              alt="Apps"
              src="/icons/tv_and_remote.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.apps_alt__one}>
          <div className={styles.apps_alt__img}>
            <Image
              alt="Apps"
              src="/icons/airplay.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className={styles.apps_alt__description}>
            Bring Apple TV + to a screen near you
          </h2>
          <div className={styles.apps_alt__cta}>
            <a>Learn More {">"} </a>
          </div>
          <div className={styles.apps_alt__img__alt}>
            <Image
              alt="Apps"
              src="/icons/apple_music.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
