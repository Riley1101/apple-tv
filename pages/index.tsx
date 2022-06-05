import type { NextPage } from "next";
import Hero from "@/components/hero";
import Background from "@/components/background";
import Pricing from "@/components/pricing";
import Carousel from "@/components/carousel";
import AutoSlider from "@/components/slider";
import Commercial from "@/components/commercial";
const Home: NextPage = () => {
  return (
    <div>
      <Background />
      <Hero />
      <Pricing />
      <Carousel />
      <AutoSlider />
      {/* <Commercial /> */}
    </div>
  );
};

export default Home;
