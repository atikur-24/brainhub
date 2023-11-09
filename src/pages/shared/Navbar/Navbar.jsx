import logo from "@/assets/icon/brainhub-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowRight, HiOutlineChevronDown } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-neutral-9 text-white flex items-center justify-between nav-container">
        <Image width={130} height={15} src={logo} alt="logo" />
        <div className="flex gap-6 pr-16">
          {/* Services nav links */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="inline-flex items-center group gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              Services <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[550px]">
              <div className="flex">
                <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">Accelerate your software development process.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Get a proposal <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] border-t p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Web development <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Mobile app development <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Desktop app Development <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Cloud engineering and DevOps <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Digital product development <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    UI/UX Design <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Generative AI Development <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          {/* Technologies nav links */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="inline-flex items-center group gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              Technologies <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
              <div className="flex">
                <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">Choose a tech stack that serves you well today and when you grow 10x.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Get a proposal <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] border-t p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Typescript <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    .NET <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Node.js <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    React <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    React Native <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Electron <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    AWS <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          {/* Industries nav links */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="inline-flex items-center group gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              Industries <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content z-[1] bg-white text-black w-[500px]">
              <div className="flex">
                <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">Draw on our experience from building industry- specific solutions.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Get a proposal <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Banking <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Accounting & Tax <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Fintech <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    <span>
                      Insurance <span className="new-badge">Soon</span>
                    </span>
                    <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    <span>
                      Regtech <span className="new-badge">Soon</span>
                    </span>
                    <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    <span>
                      Biotech <span className="new-badge">Soon</span>
                    </span>
                    <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          {/* Portfolio nav links */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="inline-flex items-center group gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              Portfolio <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content right-0 z-[1] bg-white text-black w-[500px]">
              <div className="flex">
                <div className="flex flex-col gap-5 justify-between p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">4.9 / 5 rating on Clutch from 41 reviews.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Get a proposal <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Case studies <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    How we work <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          {/* Insights nav links */}
          <div className="dropdown dropdown-hover sticky top-0">
            <label tabIndex={0} className="inline-flex items-center group gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              Insights <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content right-0 z-[1] bg-white text-black w-[550px]">
              <div className="flex">
                <div className="flex flex-col justify-between gap-5 p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">Engineering and tech leadership insights from practitioners.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Get notified <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    blog and Tech Guide <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Better Tech Leadership Podcast <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    3x3 Newsletter <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          {/* About nav links */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="group inline-flex items-center gap-1 uppercase text-sm cursor-pointer hover:text-primary-light transition-all">
              About <HiOutlineChevronDown className="group-hover:rotate-180 transition-all" />
            </label>
            <div tabIndex={0} className="dropdown-content right-0 z-[1] bg-white text-black w-[500px]">
              <div className="flex">
                <div className="flex flex-col justify-between p-6 bg-neutral-50-501 w-1/2">
                  <div className="text-2xl font-medium">Learn more about Brainhub.</div>
                  <Link className="font-semibold tracking-wider uppercase text-[13px] inline-flex items-center group gap-1 border-b border-neutral-1 hover:border-neutral-9 transition-all w-fit" href="/">
                    Join our team <HiMiniArrowRight />
                  </Link>
                </div>
                <nav className="text-[13px] p-5 w-1/2">
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    About <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Top 1.36% talent <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Careers <HiMiniArrowRight className="hidden group-hover:block transition-all" />
                  </Link>
                  <Link className="flex items-center justify-between whitespace-nowrap py-3 group border-b border-neutral-1 hover:border-neutral-9 transition-all" href="/">
                    Contact <HiMiniArrowRight className="hidden group-hover:block transition-all" />
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
    </div>
  );
};

export default Navbar;
