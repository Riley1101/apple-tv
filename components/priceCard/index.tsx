import React from "react";
import styles from "@/components/priceCard/PriceCard.module.scss";
import { motion } from "framer-motion";
type Props = {};

export default function PriceCard({}: Props) {
  return (
    <motion.article
      className={styles.card}
      initial={{ y: 100, opacity: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className={styles.card__meta}>Buy an Apple device</span>
      <h2 className={styles.card__price}>3 months free</h2>
      <p className={styles.card__description}>
        Apple TV+ is included for 3 months when you purchase an Apple device and
        redeem the offer within 90 days.1
      </p>
      <button className={styles.card__cta}>Check eligibility</button>
    </motion.article>
  );
}
