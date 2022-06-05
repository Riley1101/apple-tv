import React from "react";
import Collapsible from "react-collapsible";
import styles from "@/components/faq/Faq.module.scss";
type Props = {};

const Faq = (props: Props) => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__header}>Questions? Answers.</h2>
      <div className={styles.faq__questions}>
        <Collapsible trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

export default Faq;
