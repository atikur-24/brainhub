import Banner from "@/pages/Home/Banner/Banner";
import Enterprises from "@/pages/Home/Enterprises/Enterprises";
import Portfolio from "@/pages/Home/Portfolio/Portfolio";
import WhyChooseBrainhub from "@/pages/Home/WhyChooseBrainhub/WhyChooseBrainhub";

export default function Home() {
  return (
    <main>
      <Banner />
      <Enterprises />
      <WhyChooseBrainhub />
      <Portfolio />
    </main>
  );
}
