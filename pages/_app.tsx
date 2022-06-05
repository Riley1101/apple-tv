import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Container from "@/layouts/main";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container {...pageProps}>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
