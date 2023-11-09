import portfoli1 from "@/assets/thumbnail/portfoli-1.webp";
import portfoli2 from "@/assets/thumbnail/portfoli-2.webp";
import portfoli3 from "@/assets/thumbnail/portfoli-3.webp";
import portfoli4 from "@/assets/thumbnail/portfoli-4.webp";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowRight } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <section className="bg-neutral-9">
      <div className="my-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20">
          {/* Portfolio 1 */}
          <div className="flex flex-col gap-4 group cursor-pointer">
            <Image className="group-hover:scale-105 transition-all duration-500" src={portfoli1} alt="portfolio" />
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">CUSTOM SOFTWARE DEVELOPMENT</p>
            <h2 className="text-xl md:text-3xl font-medium leading-4">Resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
            <p className="leading-7">GOKONG&lsquo;s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
            <Link href="/" className="pt-8 uppercase font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 2 */}
          <div className="flex flex-col gap-4 group cursor-pointer justt">
            <Image className="group-hover:scale-105 transition-all duration-500" src={portfoli2} width={476} height={476} alt="portfolio" />
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">CUSTOM SOFTWARE DEVELOPMENT</p>
            <h2 className="text-xl md:text-3xl font-medium leading-4">Resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
            <p className="leading-7">GOKONG&lsquo;s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
            <Link href="/" className="pt-8 uppercase font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 3 */}
          <div className="flex flex-col gap-4 group cursor-pointer self-end justify-self-start">
            <Image className="group-hover:scale-105 transition-all duration-500" src={portfoli3} width={476} height={476} alt="portfolio" />
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">CUSTOM SOFTWARE DEVELOPMENT</p>
            <h2 className="text-xl md:text-3xl font-medium leading-4">Resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
            <p className="leading-7">GOKONG&lsquo;s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
            <Link href="/" className="pt-8 uppercase font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 4 */}
          <div className="flex flex-col gap-4 group cursor-pointer">
            <Image className="group-hover:scale-105 transition-all duration-500" src={portfoli4} alt="portfolio" />
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">CUSTOM SOFTWARE DEVELOPMENT</p>
            <h2 className="text-xl md:text-3xl font-medium leading-4">Resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
            <p className="leading-7">GOKONG&lsquo;s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
            <Link href="/" className="pt-8 uppercase font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
