import React from "react";
import Image from "next/image";
import styles from "@/components/searchModal/SearchModal.module.scss";
type Props = {
  setSearch: any;
};

const SearchModal = (props: Props) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <Image alt="Search" src={"/icons/search.svg"} width={18} height={18} />
        <input type="text" placeholder="Search apple.com" />
        <button onClick={() => props.setSearch(false)}>Close</button>
      </div>
      <div className={styles.search__result}>
        <p>QUICK LINKS</p>
        <ul className={styles.search__list}>
          <li className={styles.search__list__item}>
            Visiting an Apple Store FAQ
          </li>
          <li className={styles.search__list__item}>AirPods</li>
          <li className={styles.search__list__item}>AirTag</li>
          <li className={styles.search__list__item}>Gift Card</li>
          <li className={styles.search__list__item}>AppleCare + </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
