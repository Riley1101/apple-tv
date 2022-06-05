import React from "react";
import styles from "@/components/background/Background.module.scss";
type Props = {};

export default function Background({}: Props) {
  return (
    <div className={styles.background}>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className={styles.background__video}
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
