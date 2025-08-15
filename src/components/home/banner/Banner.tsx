import gsap from "gsap";
import BannerTransparentText from "./BannerTransparentText";
import BannerSvg from "./svg/BannerSvg";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".banner-left-content", {
      opacity: 0,
      y: -100,
      ease: "sine.inOut",
      duration: 1.4,
    });
    tl.from(".banner-svg", {
      opacity: 0,
      x: 600,
      duration: 1.2,
    });
  });

  return (
    <section className="banner-container sm:px-[40px] lg:px-[80px] overflow-hidden relative">
      <div className="lg:flex items-center justify-between z-999">
        <div className="banner-left-content">
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
        <div className="banner-svg z-0 sm:m-auto lg:m-0 sm:pt-12 lg:pt-0 pointer-events-none overflow-x-hidden">
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
