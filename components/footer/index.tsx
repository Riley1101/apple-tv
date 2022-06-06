import React from "react";
import styles from "@/components/footer/Footer.module.scss";

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
      <hr />
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
