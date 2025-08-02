import BannerTransparentText from "./BannerTransparentText";
import BannerBgCircleSvg from "./svg/BannerBgCircleSvg";
import BannerSvg from "./svg/BannerSvg";
import LeftSideTextBgSvg from "./svg/LeftSideTextBgSvg";

const Banner = () => {
  return (
    <section className="md:px-[40px] lg:px-[80px] mt-[100px]">
      <div className="md:flex items-center justify-between relative z-999">
        <div>
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
          <button className="mt-8 relative inline-flex h-14 overflow-hidden rounded-lg p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-6 py-1 font-medium text-black backdrop-blur-3xl">
              Start Earning Now!
            </span>
          </button>
        </div>
        <div className="z-0 pointer-events-none">
          <BannerSvg></BannerSvg>
        </div>
      </div>
      <div className="circleRight absolute top-0 right-0 z-0 pointer-events-none">
        <BannerBgCircleSvg></BannerBgCircleSvg>
      </div>
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <LeftSideTextBgSvg></LeftSideTextBgSvg>
      </div>
      <div>
        <BannerTransparentText></BannerTransparentText>
      </div>
    </section>
  );
};

export default Banner;
