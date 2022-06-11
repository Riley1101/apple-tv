import React from "react";
import Collapsible from "react-collapsible";
import styles from "@/components/faq/Faq.module.scss";
type TriggerProps = {
  question: string;
};

const Trigger = (props: TriggerProps) => {
  return (
    <div className={styles.trigger}>
      <p>{props.question}</p>
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

interface CollapseProps {
  faq: {
    question: string;
    answer: string;
  };
}

let Collapse = ({ faq }: CollapseProps) => {
  return (
    <>
      <Collapsible
        trigger={<Trigger question={faq.question} />}
        key={faq.question}
      >
        <p>{faq.answer}</p>
      </Collapsible>
      <hr />
    </>
  );
};

const Faq = () => {
  let faqs = [
    {
      question: "What is apple tv plus",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "How can I watch it ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "What does it costs ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "Can I share with my family ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "Are there commercials ? Can I watch on demand ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "Do I need an Apple TV 4k ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
    {
      question: "Can I download to watch offline ?",
      answer:
        "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    },
  ];
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__header}>Questions? Answers.</h2>
      <div className={styles.faq__questions}>
        {faqs.map((faq) => {
          return <Collapse faq={faq} key={faq.answer} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
