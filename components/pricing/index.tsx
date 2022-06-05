import React from "react";
import styles from "@/components/pricing/Pricing.module.scss";
import PriceCard from "@/components/priceCard";
import { motion, useMotionValue } from "framer-motion";

export default function Pricing() {
  const x = useMotionValue(0);
  return (
    <motion.section
      className={styles.pricing}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      whileInView={{ backgroundColor: "rgba(0,0,0,1)" }}
      transition={{ duration: 1 }}
    >
      <div className={styles.pricing__commercial}>
        <motion.p
          className={styles.pricing__commercial__text}
          initial={{ y: 50, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          New Apple Originals every months
        </motion.p>
        <motion.p
          className={styles.pricing__commercial__text}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Stream on the Apple TV app on Apple devices, smart TVs, consoles or
          sticks
        </motion.p>
        <motion.p
          className={styles.pricing__commercial__text}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Share Apple TV + with your family.
        </motion.p>
      </div>
      <div className={styles.pricing__card}>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </motion.section>
  );
}
