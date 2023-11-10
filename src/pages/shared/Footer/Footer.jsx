import Link from "next/link";
import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-neutral-9 px-6 pb-28">
      <div className="flex flex-col justify-center items-center">
        <p className="lg:text-lg text-center">
          We wish we could show you all the work we&apos;ve done. <br /> Unfortunately, we&apos;re often bound by the non-disclosure agreements.
        </p>
        <Link href="/" className="pt-8 uppercase tracking-wider font-semibold flex items-center gap-2 border-b border-neutral-5 w-fit hover:border-white pb-1">
          SEE MORE PROJECTS WE CAN REVEAL <HiMiniArrowRight />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
