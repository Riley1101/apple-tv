import type { NextPage } from "next";
import Hero from "@/components/hero";
import Background from "@/components/background";
import Pricing from "@/components/pricing";
import Carousel from "@/components/carousel";
import AutoSlider from "@/components/slider";
import Commercial from "@/components/commercial";
import Faq from "@/components/faq";
import Apps from "@/components/apps";
import Footer from "@/components/footer";
import Meta from "@/components/meta";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <Background />
      <Hero />
      <Pricing />
      <Carousel />
      <AutoSlider />
      <Commercial />
      <Faq />
      <Apps />
      <Footer />
    </div>
  );
};

export default Home;
