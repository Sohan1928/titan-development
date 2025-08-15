import { useState } from "react";
import BannerBgCircleSvg from "../banner/svg/BannerBgCircleSvg";
import LeftSideTextBgSvg from "../banner/svg/LeftSideTextBgSvg";
import Logo from "./svg/LogoSvg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from("#nav-logo", {
      opacity: 0,
      y: -120,
      duration: 1.4,
    });
    tl.from(".navLinks .nav-links-ul li", {
      opacity: 0,
      ease: "sine.inOut",
      duration: 0.6,
      stagger: 0.2,
    });
    tl.from("#navbar-btn", {
      opacity: 0,
      ease: "sine.inOut",
      duration: 0.6,
    });
    tl.from(".banner-bg-circle-svg", {
      y: 500,
      duration: 1.1,
      opacity: 0,
    });
    tl.from(".banner-left-side-bg-svg", {
      y: -400,
      duration: 1.1,
      opacity: 0,
    });
  }, []);

  return (
    <section className="z-50 relative navbar-container">
      <div className="navbar md:px-[40px] lg:px-[80px] pt-[30px]">
        <div className="navbar-start w-full lg:w-3xl flex items-center justify-between">
          {/* responsive device */}
          <div className="dropdown flex items-center justify-between w-full px-3 md:px-0 pt-2">
            <div id="nav-logo">
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
        <div className="navbar-center navLinks hidden lg:flex">
          <ul className="text-[#D0DCE8] flex items-center nav-links-ul">
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
          <button
            id="navbar-btn"
            className="navbarBtn relative inline-flex h-12 overflow-hidden rounded-lg p-[3px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              Start Earning Now!
            </span>
          </button>
        </div>
      </div>

      {/* svg section */}
      <div className="banner-bg-circle-svg absolute right-0 top-0 pointer-events-none">
        <BannerBgCircleSvg />
      </div>
      <div className="banner-left-side-bg-svg absolute left-0 top-0 z-0 pointer-events-none overflow-hidden">
        <LeftSideTextBgSvg></LeftSideTextBgSvg>
      </div>
    </section>
  );
};

export default Navbar;
