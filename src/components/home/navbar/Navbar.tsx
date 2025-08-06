import { useState } from "react";
import BannerBgCircleSvg from "../banner/svg/BannerBgCircleSvg";
import LeftSideTextBgSvg from "../banner/svg/LeftSideTextBgSvg";
import Logo from "./svg/LogoSvg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="z-50 relative">
      {/* <div className="md:px-[40px] lg:px-[80px] pt-[30px] flex items-center justify-between">
        <h3 className="uppercase flex items-center gap-2">
          <Logo></Logo>
        </h3>
        <ul className="text-[#D0DCE8] navLinks flex items-center gap-10">
          <a>How it works</a>
          <a>Earnings</a>
          <a>Tokenmics</a>
          <a>Milestones</a>
        </ul>
        <button className="navbarBtn relative inline-flex h-12 overflow-hidden rounded-lg p-[3px]">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            Start Earning Now!
          </span>
        </button>
      </div> */}
      <div className="navbar md:px-[40px] lg:px-[80px] pt-[30px]">
        <div className="navbar-start w-full lg:w-3xl flex items-center justify-between">
          {/* responsive device */}
          <div className="dropdown flex items-center justify-between w-full px-3 md:px-0 pt-2">
            <div>
              <Logo></Logo>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden text-[#D0DCE8] text-3xl px-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RiCloseLine></RiCloseLine>
              ) : (
                <RiMenu3Line></RiMenu3Line>
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gradient-to-b from-[#1C1B2E] to-[#000000] rounded-box z-1 mt-3 w-52 p-2 shadow text-[#D0DCE8] navLinks items-center py-4 space-y-3 right-4 top-10"
              >
                <a>How it works</a>
                <a>Earnings</a>
                <a>Tokenmics</a>
                <a>Milestones</a>
                <button className="navbarBtn relative inline-flex h-12 overflow-hidden rounded-lg p-[3px]">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                    Start Earning Now!
                  </span>
                </button>
              </ul>
            )}
          </div>
        </div>
        {/* normal device */}
        <div className="navbar-center hidden lg:flex">
          <ul className="text-[#D0DCE8] navLinks flex items-center gap-10">
            <li>
              <a>How it works</a>
            </li>
            <li>
              <a>Earnings</a>
            </li>
            <li>
              <a>Tokenmics</a>
            </li>
            <li>
              <a>Milestones</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex items-center hidden">
          <button className="navbarBtn relative inline-flex h-12 overflow-hidden rounded-lg p-[3px]">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              Start Earning Now!
            </span>
          </button>
        </div>
      </div>

      {/* svg section */}
      <div className="absolute right-0 top-0 pointer-events-none">
        <BannerBgCircleSvg />
      </div>
      <div className="absolute left-0 top-0 z-0 pointer-events-none overflow-hidden">
        <LeftSideTextBgSvg></LeftSideTextBgSvg>
      </div>
    </section>
  );
};

export default Navbar;
