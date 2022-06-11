import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toggle } from "@/state/slices/menuSlices";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/state/store";
import styles from "@/components/header/Header.module.scss";
import SearchModal from "@/components/searchModal";

const Modal = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={styles.header__modal}>
      <div className={styles.header__top}>
        <button
          className={styles.header__top__hamburger}
          onClick={() => dispatch(toggle())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#999"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link href="/">
          <Image alt="Apple" src={"/icons/apple.svg"} width={18} height={18} />
        </Link>
        <nav className={styles.header__top__navigation}>
          <ul className={styles.header__top__navigation__list}>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/store">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Store
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/mac">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Mac
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/ipad">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  iPad
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/iphone">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  iPhone
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/watch">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Watch
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/airpods">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Aripods
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/tvandhome">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  TV &#38; Home
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/onlyonapple">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Only on Apple
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/accessories">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Accessories
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/support">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Support
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/search">
                <Image
                  alt="Search"
                  src={"/icons/search.svg"}
                  width={18}
                  height={18}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <Image alt="Apple" src={"/icons/cart.svg"} width={18} height={18} />
        </Link>
      </div>
      <div className={styles.header__modal__search}>
        <div className={styles.header__modal__search__bar}>
          <Image
            alt="Search"
            src={"/icons/search.svg"}
            width={18}
            height={18}
          />
          <input type="text" placeholder="Search apple.com" />
        </div>
        <button className={styles.header__modal__cancel}>Cancel</button>
      </div>
      <ul className={styles.header__modal__navigation}>
        <li className={styles.header__modal__navigation__item}>Store</li>
        <li className={styles.header__modal__navigation__item}>Mac</li>
        <li className={styles.header__modal__navigation__item}>iPad</li>
        <li className={styles.header__modal__navigation__item}>iPhone</li>
        <li className={styles.header__modal__navigation__item}>Watch</li>
        <li className={styles.header__modal__navigation__item}>AirPods</li>
        <li className={styles.header__modal__navigation__item}>
          TV &#38; Home
        </li>
        <li className={styles.header__modal__navigation__item}>
          Only On Apple
        </li>
        <li className={styles.header__modal__navigation__item}>Accessories</li>
        <li className={styles.header__modal__navigation__item}>Supports</li>
      </ul>
    </div>
  );
};
function Header() {
  const { open: isOpen } = useSelector((state: RootState) => state.menu);
  const [search, setSearch] = React.useState(false);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <div className={styles.header__top}>
        <button
          className={styles.header__top__hamburger}
          onClick={() => dispatch(toggle())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="transparent"
            viewBox="0 0 24 24"
            stroke="#999"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
        <Link href="/">
          <Image alt="Apple" src={"/icons/apple.svg"} width={18} height={18} />
        </Link>
        <nav className={styles.header__top__navigation}>
          {search && <SearchModal setSearch={setSearch} />}
          <ul className={styles.header__top__navigation__list}>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/store">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Store
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/mac">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Mac
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/ipad">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  iPad
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/iphone">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  iPhone
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/watch">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Watch
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/airpods">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Aripods
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/tvandhome">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  TV &#38; Home
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/onlyonapple">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Only on Apple
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/accessories">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Accessories
                </span>
              </Link>
            </li>
            <li className={styles.header__top__navigation__list__item}>
              <Link href="/support">
                <span
                  className={styles.header__top__navigation__list__item__link}
                >
                  Support
                </span>
              </Link>
            </li>
            <li
              className={styles.header__top__navigation__list__item}
              onClick={() => setSearch(true)}
            >
              <Image
                alt="Search"
                src={"/icons/search.svg"}
                width={18}
                height={18}
              />
            </li>
          </ul>
        </nav>
        <Link href="/">
          <Image alt="Apple" src={"/icons/cart.svg"} width={18} height={18} />
        </Link>
      </div>
      <header className={styles.header__banner}>
        {isOpen && <Modal />}
        <Link href="/">
          <span className={styles.header__banner__title}>Apple TV +</span>
        </Link>
        <button className={styles.header__banner__button}>Stream now</button>
      </header>
      <div className={styles.header__announcement}>
        <p className={styles.header__announcement__text}>
          Friday Night Baseball, now streaming on Apple TV+.
          <Link href="/more">
            <span className={styles.header__announcement__link}>
              Learn more
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Header;
