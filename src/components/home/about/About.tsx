import AboutLeftSideBgSvg from "./svg/AboutLeftSideBgSvg";
import AboutLeftSideSvg from "./svg/AboutLeftSideSvg";

const About = () => {
  return (
    <section className="md:px-[40px] lg:px-[80px] pt-[108px]">
      <div className="">
        <div className="flex gap-10 items-start justify-between">
          <div className="pointer-events-none relative">
            <AboutLeftSideSvg></AboutLeftSideSvg>
            <div className="aboutLeftSvg absolute -top-12 -left-4 pointer-events-none">
              <AboutLeftSideBgSvg></AboutLeftSideBgSvg>
            </div>
            <svg
              className="aboutLeftSvgBg absolute -top-0 left-12"
              xmlns="http://www.w3.org/2000/svg"
              width="422"
              height="422"
              viewBox="0 0 422 422"
              fill="none"
            >
              <g opacity="0.5" filter="url(#filter0_f_0_17)">
                <circle cx="361" cy="361" r="117" fill="#5CFFF3" />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_17"
                  x="0"
                  y="0"
                  width="722"
                  height="722"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="122"
                    result="effect1_foregroundBlur_0_17"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <h5 className="aboutTop uppercase ">About</h5>

            <p className="aboutP mt-[30px]">
              Titano Finance is transforming DeFi with the Titano <br />{" "}
              Autostaking Protocol (TAP) that delivers the industry’s <br />{" "}
              highest fixed APY, rebasing rewards every 30 minutes, <br /> and a
              simple buy-hold-earn system that grows your <br /> portfolio in
              your wallet, fast.
            </p>
            <h4 className="aboutStak mt-[60px]">100% Fixed Staking APY</h4>
            <div className="">
              <h2 className="aboutNumber mt-[9px]">102 483.58%</h2>
            </div>
          </div>
        </div>

        {/* <div className="absolute -top-26 -left-4 drop-shadow-[0_-6px_16px_#28E0B2] pointer-events-none">
          <AboutLeftSideBgSvg></AboutLeftSideBgSvg>
        </div> */}
      </div>
    </section>
  );
};

export default About;
