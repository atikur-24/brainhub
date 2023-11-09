import Link from "next/link";
import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-neutral-9 pt-20">
      <div className="mx-[314px] p-5">
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="leading-7 lg:text-lg">We wish we could show you all the work we&apos;ve done. Unfortunately, we&apos;re often bound by the non-disclosure agreements.</p>
          <Link href="/" className="pt-8 uppercase font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
            SEE MORE PROJECTS WE CAN REVEAL <HiMiniArrowRight />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
