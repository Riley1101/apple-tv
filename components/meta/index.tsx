import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function Meta({}: Props) {
  return (
    <Head>
      <title>Apple TV plus</title>
    </Head>
  );
}
