import React from "react";
import styles from "@/components/pricing/Pricing.module.scss";
import PriceCard from "@/components/priceCard";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__commercial}>
        <p className={styles.pricing__commercial__text}>
          New Apple Originals every months
        </p>
        <p className={styles.pricing__commercial__text}>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles or
          sticks
        </p>
        <p className={styles.pricing__commercial__text}>
          Share Apple TV + with your family.
        </p>
      </div>
      <div className={styles.pricing__card}>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  );
}
