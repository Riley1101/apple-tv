import React from "react";
import styles from "@/components/footer/Footer.module.scss";

let services = [
  {
    title: "Shop and Learn",
    products: [
      "Store",
      "iPad",
      "iPhone",
      "Watch",
      "Music",
      "TV",
      "iPod",
      "TV",
      "Accessories",
      "Gifts",
    ],
  },
  {
    title: "Services",
    products: [
      "Apple Music",
      "Apple TV",
      "Apple Fitness+",
      "Apple News",
      "Apple Arcade",
      "iCloud ",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
    ],
  },

  {
    title: "Apple Store",
    products: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
      "Financing",
      "Trade In",
      "AppleCare+",
    ],
  },
  {
    title: "For Education",
    products: ["Apple and Education", "Shop for K-12", "Shop for college"],
  },
  {
    title: "For Health Care",
    products: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    title: "For Goverment",
    products: ["Shop for goverment", "Shop for Veterans and Military"],
  },
  {
    title: "Apple Values",
    products: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equality and Justic",
      "Supplier Responsibility",
    ],
  },
];

interface ServiceProps {
  service: {
    title: string;
    products: string[];
  };
}
const Service = (Props: ServiceProps) => {
  const { service } = Props;
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
    let onResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <ul className={styles.services__list}>
      <li
        className={styles.services__list__item}
        onClick={() => setIsOpen(!isOpen)}
      >
        {service.title}
      </li>
      {isOpen && (
        <>
          {service.products.map((product, index) => (
            <li key={product} className={styles.services__list__item}>
              {product}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__rules}>
        <p>
          * The Apple One free trial includes only services that you are not
          currently using through a free trial or a subscription. Plan
          automatically renews after trial until cancelled. Restrictions and
          other terms apply.
        </p>
        <ul>
          <li>
            $4.99/month after free trial. Only one offer per Apple ID and only
            one offer per family if you’re part of a Family Sharing group,
            regardless of the number of devices you or your family purchases.
            This offer is not available if you or your Family have previously
            accepted an Apple TV+ one year free offer. Offer good for 3 months
            after eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other terms apply.
          </li>
          <li>
            One subscription per Family Sharing group. Plan automatically renews
            until cancelled.
          </li>
          <li>
            Limited-time offer; offer may end at any time. Free Apple TV+ access
            for students ends when you no longer qualify or do not renew your
            Apple Music Student subscription. Offer good for verified college
            students only and does not extend to a Family Sharing group.
          </li>
        </ul>
        <p>
          Major League Baseball trademarks and copyrights are used with
          permission of MLB Advanced Media, L.P. All rights reserved.
        </p>
      </div>
      <hr className={styles.break} />
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumb__item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            widths={19}
            height={19}
            viewBox="0 0 496.255 608.728"
          >
            <path
              d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
              fill="#000"
            />
          </svg>
        </li>
        <li className={styles.breadcrumb__item}>Only on Apple</li>
        <li className={styles.breadcrumb__item}> Apple TV + </li>
      </ul>
      <div className={styles.services}>
        {services.map((service) => {
          return <Service key={service.title} service={service} />;
        })}
      </div>
      <div className={styles.footer__terms}>
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <hr />
        <div className={styles.footer__terms__nav}>
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <ul>
            <li>Privacy Policy</li>
            <li> Terms of Use</li>
            <li> Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
            <a>United States</a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
