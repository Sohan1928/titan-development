import gsap from "gsap";
import BannerTransparentText from "./BannerTransparentText";
import BannerSvg from "./svg/BannerSvg";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Banner = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    const mm = gsap.matchMedia();

    tl.from(".banner-left-content", {
      opacity: 0,
      x: -300,
      ease: "sine.inOut",
      duration: 1.4,
      delay: 2,
    });
    mm.add("(min-width:1024px", () => {
      tl.from(".banner-svg", {
        opacity: 0,
        x: 600,
        duration: 1.2,
      });
    });
  });

  return (
    <section className="banner-container sm:px-[40px] lg:px-[80px] overflow-hidden relative">
      <div className="banner-main-content  lg:text-start md:text-center sm:text-center justify-between z-999">
        <div className="banner-left-content" data-speed="1">
          <h5 className="bannerTop">Highest Fixed APY 102,483%</h5>
          <h1 className="mt-4">
            The Best{" "}
            <span className="bannerText">Auto-Staking & Auto Compounding</span>{" "}
            Protocol in Crypto
          </h1>
          <p className="bannerBottom">
            Your Tokens Stay in Your Wallet <br /> Get Rewards Every 30 Minutes
            / 48 Times Daily
          </p>
          <button className="banner-btn mt-8 relative inline-flex h-14 overflow-hidden rounded-lg p-[3px] navbarBtn">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-6 py-1 font-medium text-black backdrop-blur-3xl">
              Start Earning Now!
            </span>
          </button>
        </div>
        <div
          className="banner-svg z-0 sm:m-auto lg:m-0 lg:mt-0 xl:mt-0 md:pt-0 sm:pt-0 lg:pt-0 pointer-events-none overflow-x-hidden"
          data-speed="2"
        >
          <BannerSvg></BannerSvg>
        </div>
      </div>
      <div>
        <BannerTransparentText></BannerTransparentText>
      </div>
    </section>
  );
};

export default Banner;
