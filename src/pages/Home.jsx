import Control from "../components/Control.jsx";
import Great from "../components/Great.jsx";
import Hero from "../components/Hero.jsx";
import Swiper from "../components/Swiper.jsx";
import Top from "../components/Top.jsx";
import Email from "../components/Email.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <Great />
      <Top />
      <Control />
      <Swiper />
      <Email />
    </div>
  );
}

export default Home;
