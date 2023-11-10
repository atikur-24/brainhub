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
      <div className="my-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          {/* Portfolio 1 */}
          <div className="flex flex-col gap-4 group cursor-pointer overflow-hidden">
            <figure className="overflow-hidden">
              <Image className="lg:group-hover:scale-105 transition-all duration-500 w-full h-full object-contain" src={portfoli1} alt="portfolio" />
            </figure>
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">custom software development</p>
            <h2 className="text-xl md:text-[28px] font-medium leading-[140%]">Resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
            <p className="hidden md:block md:leading-7">GOKONG&lsquo;s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
            <Link href="/" className="pt-8 uppercase tracking-wider font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 2 */}
          <div className="flex flex-col gap-4 group cursor-pointer overflow-hidden md:justify-self-end md:max-w-[476px]">
            <figure className="overflow-hidden">
              <Image className="lg:group-hover:scale-105 transition-all duration-500 w-full h-full object-contain" src={portfoli2} width={476} height={476} alt="portfolio" />
            </figure>
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">web app modernization</p>
            <h2 className="text-xl md:text-[28px] font-medium leading-[140%]">Speeding up a software delivery process by... 450%</h2>
            <p className="hidden md:block md:leading-7">National Geographic asked us to reinvent a subscription management system serving over 6 million users and connect it to a custom-made ERP.</p>
            <Link href="/" className="pt-8 uppercase tracking-wider font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 3 */}
          <div className="flex flex-col gap-4 group cursor-pointer self-end justify-self-start overflow-hidden md:max-w-[476px]">
            <figure className="overflow-hidden">
              <Image className="lg:group-hover:scale-105 transition-all duration-500 w-full h-full object-contain" src={portfoli3} width={476} height={476} alt="portfolio" />
            </figure>
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">desktop app development</p>
            <h2 className="text-xl md:text-[28px] font-medium leading-[140%]">Team augmentation setup that lasts for 6+ years (and counting)</h2>
            <p className="hidden md:block md:leading-7">Paradox Interactive needed to rebuild their desktop app launcher, serving as a digital distribution platform.</p>
            <Link href="/" className="pt-8 uppercase tracking-wider font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
          {/* Portfolio 4 */}
          <div className="flex flex-col gap-4 group cursor-pointer overflow-hidden">
            <figure className="overflow-hidden">
              <Image className="lg:group-hover:scale-105 transition-all duration-500 w-full h-full object-contain" src={portfoli4} alt="portfolio" />
            </figure>
            <p className="text-dim-grey-2 text-sm uppercase font-medium leading-3">mobile app development</p>
            <h2 className="text-xl md:text-[28px] font-medium leading-[140%]">Sequoia-funded startup builds the most popular micromobility app in Asia</h2>
            <p className="hidden md:block md:leading-7">After raising $6.4m, Beam&apos;s plan was to fight Hive and Lime for market share in Asia-Pacific region. Our job was to make the app their biggest weapon.</p>
            <Link href="/" className="pt-8 uppercase tracking-wider font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
              Read more <HiMiniArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
