import React from "react";
import Image from "next/image";
type Props = {};

const Commercial = (props: Props) => {
  return (
    <section>
      <div>
        <Image
          src="/icons/appletv.png"
          width={40}
          height={40}
          alt="Apple TV"
        ></Image>
        <h2>Watch Apple TV + anywhere on the Apple TV app</h2>
        <p>
          Find the Apple TV app on your favourite Apple devices. Or watch Apple
          TV+ online at <span>tv.apple.com</span>
        </p>
      </div>
      <div>
        <div>
          <Image
            src="/icons/appletv.png"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>Apple TV</p>
        </div>
        <div>
          <Image
            src="/icons/appletv.png"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>iPhone</p>
        </div>
        <div>
          <Image
            src="/icons/appletv.png"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>iPad</p>
        </div>
        <div>
          <Image
            src="/icons/appletv.png"
            width={40}
            height={40}
            alt="Apple TV"
          ></Image>
          <p>Mac</p>
          <div>
            <Image
              src="/icons/appletv.png"
              width={40}
              height={40}
              alt="Apple TV"
            ></Image>
            <p>AirPlay</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
