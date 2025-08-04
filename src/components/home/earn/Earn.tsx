import Box1Svg from "./svg/Box1Svg";
import Box2Svg from "./svg/Box2Svg";
import CircleSvg from "./svg/CircleSvg";
import GreenCircleSvg from "./svg/GreenCircleSvg";
import LineArrowSvg from "./svg/LineArrowSvg";

const Earn = () => {
  return (
    <section className="earn-container px-[100px] relative">
      <div className="title">
        <h2>How much can i earn?</h2>
        <p>
          TAP gives you the highest fixed staking APY in the crypto Industry!
        </p>
      </div>
      <div className="svg-section">
        {/* svg 1 */}
        <div className="svg1 relative">
          <Box1Svg></Box1Svg>
          <p className="absolute top-[63px] left-[45px]">
            If you purchase <span className="title-color">$1000 USD</span> of
            TITANO, at the end of one year
          </p>
          <div className="absolute -bottom-[44px] right-8">
            <GreenCircleSvg></GreenCircleSvg>
          </div>
          <div className="absolute -bottom-[168px] right-[70px]">
            <LineArrowSvg></LineArrowSvg>
          </div>
        </div>
        {/* svg 2 */}
        <div className="svg2 relative">
          <Box2Svg></Box2Svg>
          <div className="absolute top-[63px] left-[45px]">
            <h4>
              You can earn up <br /> to{" "}
              <span className="title-color">$1,002,758.54 USD</span> of
              $TITANO.*
            </h4>
            <p>
              Earnings are calculated based on continuous rebase rewards for 365
              days.
            </p>
            <div>
              <button className="mt-8 relative inline-flex h-14 overflow-hidden rounded-lg p-[3px] navbarBtn">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-6 py-1 font-medium text-black backdrop-blur-3xl">
                  Start Earning Now!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-[570px] left-0 pointer-events-none">
        <CircleSvg></CircleSvg>
      </div>
    </section>
  );
};

export default Earn;
