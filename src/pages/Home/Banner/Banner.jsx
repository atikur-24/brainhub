import tm1 from "@/assets/avatar/tm-1.webp";
import clutchVector from "@/assets/icon/clutch-vector.svg";
import star from "@/assets/icon/star.svg";
import tech1 from "@/assets/technology/planet-left-1.png";
import tech2 from "@/assets/technology/planet-left-2.webp";
import tech3 from "@/assets/technology/planet-left-3.png";
import tech4 from "@/assets/technology/planet-left-4.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <section className="bg-neutral-9 pt-[100px] flex justify-between">
      {/* left icons with animation */}
      <div>
        <Image width={200} height={200} src={tech1} alt="technology" />
        <Image width={200} height={200} src={tech2} alt="technology" />
        <Image width={200} height={200} src={tech3} alt="technology" />
        <Image width={200} height={200} src={tech4} alt="technology" />
      </div>
      {/* banner content with images */}
      <div className="flex flex-col items-center max-w-[820px] h-full">
        <div>
          <h1 className="text-4xl md:text-[60px] font-medium md:font-semibold tracking-tighter leading-tight">
            High-performing teams of <span className="text-primary-light">vetted software engineers</span>.
          </h1>
        </div>
        <div className="text-[38px] md:text-[64px] font-medium flex items-center gap-4">
          <div>[</div>
          <div>
            <Image width={72} height={72} src={tm1} alt="tm" />
          </div>
          <div>,</div>
          <div>
            <Image width={72} height={72} src={tm1} alt="tm" />
          </div>
          <div>,</div>
          <div>
            <Image width={72} height={72} src={tm1} alt="tm" />
          </div>
          <div>,</div>
          <div>]</div>
        </div>
        <div className="pt-6 pb-10">
          <p className="text-center md:text-lg">Scale your team up and down with the top 1.36% talent skilled in React, Node.js, .NET and AWS. Onboarding within 10 days guaranteed.</p>
        </div>
        <div>
          <Link href="/" className="my-btn btn-primary-teal">
            get a proposal <HiMiniArrowRight />
          </Link>
        </div>
        <div className="flex gap-2 xl:gap-3">
          <div>
            <Image src={clutchVector} alt="clutch-vector" width={80} height={30} />
          </div>
          <div className="text-lg font-medium pt-7">4.9</div>
          <div className="flex">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
          </div>
        </div>
      </div>
      {/* right icons with animation */}
      <div>
        <Image width={200} height={200} src={tech1} alt="technology" />
        <Image width={200} height={200} src={tech2} alt="technology" />
        <Image width={200} height={200} src={tech3} alt="technology" />
        <Image width={200} height={200} src={tech4} alt="technology" />
      </div>
    </section>
  );
};

export default Banner;
