import React from "react";
import Collapsible from "react-collapsible";
import styles from "@/components/faq/Faq.module.scss";
type Props = {};

const Trigger = () => {
  return (
    <div className={styles.trigger}>
      <p>What is apple tv plus</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};
const Faq = (props: Props) => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__header}>Questions? Answers.</h2>
      <div className={styles.faq__questions}>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
        <Collapsible trigger={<Trigger />}>
          <p>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

export default Faq;
