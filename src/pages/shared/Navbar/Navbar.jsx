import logo from "@/assets/icon/brainhub-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowRight, HiOutlineChevronDown } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-neutral-9 text-white flex items-center justify-between">
      <Image width={130} height={15} src={logo} alt="logo" />
      <div className="flex gap-5">
        {/* Services nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            Services <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[550px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                <div className="text-2xl font-medium">Accelerate your software development process.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Get a proposal <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 w-1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Web development <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Mobile app development <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Desktop app Development <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Cloud engineering and DevOps <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Digital product development <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  UI/UX Design <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Generative AI Development <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Technologies nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            Technologies <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                <div className="text-2xl font-medium">Choose a tech stack that serves you well today and when you grow 10x.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Get a proposal <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 w-1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Typescript <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  .NET <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Node.js <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  React <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  React Native <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Electron <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  AWS <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Industries nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            Industries <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                <div className="text-2xl font-medium">Draw on our experience from building industry- specific solutions.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Get a proposal <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 w-1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Banking <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Accounting & Tax <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Fintech <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  <span>
                    Insurance <span className="new-badge">Soon</span>
                  </span>
                  <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  <span>
                    Regtech <span className="new-badge">Soon</span>
                  </span>
                  <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  <span>
                    Biotech <span className="new-badge">Soon</span>
                  </span>
                  <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Portfolio nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            Portfolio <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                <div className="text-2xl font-medium">4.9 / 5 rating on Clutch from 41 reviews.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Get a proposal <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 w-1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Case studies <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  How we work <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Insights nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            Insights <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w1/2">
                <div className="text-2xl font-medium">Engineering and tech leadership insights from practitioners.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Get notified <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  blog and Tech Guide <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Better Tech Leadership Podcast <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  3x3 Newsletter <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* About nav links */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="inline-flex items-center gap-1 uppercase">
            About <HiOutlineChevronDown className="hover:rotate-180 transition-all" />
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
            <div className="flex">
              <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w1/2">
                <div className="text-2xl font-medium">Learn more about Brainhub.</div>
                <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                  Join our team <HiMiniArrowRight />
                </Link>
              </div>
              <nav className="text-[13px] border-t border-neutral-1 divide-y divide-neutral-1 p-5 1/2">
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  About <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Top 1.36% talent <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Careers <HiMiniArrowRight />
                </Link>
                <Link className="flex items-center justify-between whitespace-nowrap py-3" href="/">
                  Contact <HiMiniArrowRight />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Link href="/" className="my-btn btn-primary-nav">
        get a proposal <HiMiniArrowRight />
      </Link>
    </div>
  );
};

export default Navbar;
