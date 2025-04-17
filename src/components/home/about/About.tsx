import AboutLeftSideBgSvg from "./svg/AboutLeftSideBgSvg";
import AboutLeftSideSvg from "./svg/AboutLeftSideSvg";

const About = () => {
  return (
    <section className="md:px-[40px] lg:px-[80px] pt-20 pb-16">
      <div className="relative">
        <div className="flex gap-10 items-start justify-between">
          <div className="">
            <AboutLeftSideSvg></AboutLeftSideSvg>
          </div>
          <div>
            <h5 className="uppercase flex items-center text-xl gap-1.5 text-[#4D9F86]">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </h5>
            <p className="text-[#7A8699] text-2xl mt-7 leading-12">
              Titano Finance is transforming DeFi with the Titano <br />{" "}
              Autostaking Protocol (TAP) that delivers the industry’s <br />{" "}
              highest fixed APY, rebasing rewards every 30 minutes, <br /> and a
              simple buy-hold-earn system that grows your <br /> portfolio in
              your wallet, fast.
            </p>
            <h4 className="text-[#8993A4] text-2xl mt-12">
              100% Fixed Staking APY
            </h4>
            <div className="">
              <h1
                className="text-[#28E0B2] text-5xl font-bold mt-3"
                style={{
                  textShadow: "0 0 0px #28E0B2, 0 0 40px #28E0B2",
                }}
              >
                102 483.58%
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute -top-26 -left-4 drop-shadow-[0_-6px_16px_#28E0B2]">
          <AboutLeftSideBgSvg></AboutLeftSideBgSvg>
        </div>
      </div>
    </section>
  );
};

export default About;
