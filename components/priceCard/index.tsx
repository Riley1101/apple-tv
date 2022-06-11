import React from "react";
import styles from "@/components/priceCard/PriceCard.module.scss";
type Props = {};

export default function PriceCard({}: Props) {
  return (
    <article className={styles.card}>
      <span className={styles.card__meta}>Buy an Apple device</span>
      <h2 className={styles.card__price}>3 months free</h2>
      <p className={styles.card__description}>
        Apple TV+ is included for 3 months when you purchase an Apple device and
        redeem the offer within 90 days.1
      </p>
      <button className={styles.card__cta}>Check eligibility</button>
    </article>
  );
}
