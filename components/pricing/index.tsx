import React, { useEffect } from "react";
import styles from "@/components/pricing/Pricing.module.scss";
import PriceCard from "@/components/priceCard";
import { usePricingAnimation } from "@/components/pricing/useAnimation";
export default function Pricing() {
  const [container, demo] = usePricingAnimation();
  return (
    <section className={styles.pricing} ref={container}>
      <div className={styles.pricing__commercial} ref={demo}>
        <p className={styles.pricing__commercial__text} id="com1">
          New Apple Originals every months
        </p>
        <p className={styles.pricing__commercial__text} id="com2">
          Stream on the Apple TV app on Apple devices, smart TVs, consoles or
          sticks
        </p>
        <p className={styles.pricing__commercial__text} id="com3">
          Share Apple TV + with your family.
        </p>
      </div>
      <div className={styles.pricing__card} id="com4">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  );
}
