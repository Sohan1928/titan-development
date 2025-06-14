import PancakeSwapIconSvg from "./svg/topBox/PancakeSwapIconSvg";
import TitanIconSvg from "./svg/TitanIconSvg";
import TopBoxSvg from "./svg/topBox/TopBoxSvg";
import BottomArrowSvg from "./svg/topBox/BottomArrowSvg";
import RightSideEllipseSvg from "./svg/topBox/RightSideEllipseSvg";
import LineArrow1 from "./svg/topBox/rightArrow/LineArrow1";
import LineArrow2 from "./svg/topBox/rightArrow/LineArrow2";
import RightBoxTick from "./svg/topBox/rightArrow/RightBoxTick";
import RightBoxBg from "./svg/topBox/rightArrow/RightBoxBg";
import LeftSideBoxCircle from "./svg/topBox/leftArrow/LeftSideBoxCircle";
import BottomArrow from "./svg/topBox/bottomSvg/BottomArrow";
import FlatArrow from "./svg/topBox/bottomSvg/FlatArrow";
import SmallArrow from "./svg/topBox/bottomSvg/SmallArrow";
import BottomBox from "./svg/topBox/bottomSvg/BottomBox";
import LeftBoxSvg from "./svg/topBox/leftArrow/LeftBoxSvg";
import RightBoxSvg from "./svg/topBox/rightArrow/RightBoxSvg";
import "./verticallyText.css";

const HowItWorksSvgSection = () => {
  return (
    <section>
      <div className="md:mt-60">
        <div className="relative">
          <h2 className="text-base text-center z-50">
            <span className="text-xl">The Automatic Stacking,</span> and <br />
            Compounding Titaton Token
          </h2>
          <h4 className="flex flex-col items-center justify-center">
            <TitanIconSvg></TitanIconSvg>
          </h4>
          {/* top box svg */}
          <div className="absolute -top-64 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <TopBoxSvg></TopBoxSvg>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="flex items-center justify-center gap-1 font-bold text-white text-xl">
                  <PancakeSwapIconSvg></PancakeSwapIconSvg>
                  PancakeSwap
                </p>
              </div>
              {/* circle ellips */}
              <div className="absolute -right-8 top-6">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              {/* circle ellips */}
              <div className="absolute -left-9 top-6">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              {/* circle ellips */}
              <div className="absolute -bottom-10 left-40">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              {/* bottom line arrow */}
              <div className="absolute left-[193.5px] -bottom-24">
                <BottomArrowSvg></BottomArrowSvg>
              </div>
              {/* right side */}
              {/* right line arrow 1 */}
              <div className="absolute -right-44 top-14">
                <LineArrow1></LineArrow1>
              </div>
              {/* right line arrow 2 */}
              <div className="absolute -right-[179.5px] top-[57px]">
                <LineArrow2></LineArrow2>
              </div>
              {/* right side text */}
              <div className="absolute -right-[150px] top-6">
                <h4 className="uppercase text-[11px] text-[#D2DCE7] tracking-widest">
                  Buy & Sell Fees
                </h4>
              </div>
              {/* right side box */}
              <div className="absolute z-50 -right-[350px] top-64">
                <RightBoxSvg></RightBoxSvg>
                <div className="">
                  <div className="absolute top-16 right-6 z-50 text-center">
                    <h3 className="text-xl mb-4 text-[#C8DBE3] font-semibold select-text">
                      Titano Treasury
                    </h3>
                    <p className="text-[#97A2AB] text-sm ">
                      A portion of the buy and sells fees goes to <br /> the
                      treasury for marketing, new development <br /> and to
                      support RFV
                    </p>
                  </div>
                </div>
              </div>
              {/* right box bg */}
              <div className="absolute z-0 -right-[430px] top-44 pointer-events-none">
                <RightBoxBg></RightBoxBg>
              </div>
              {/* right box middle tick */}
              <div className="absolute z-50 -right-[310px] top-35 pointer-events-none">
                <RightBoxTick></RightBoxTick>
              </div>

              {/* left side  */}
              {/* left line arrow 1 */}
              <div className="absolute -left-48 top-14">
                <LineArrow1></LineArrow1>
              </div>
              {/* left line arrow 2 */}
              <div className="absolute -left-[195.5px] top-[57px]">
                <LineArrow2></LineArrow2>
              </div>
              {/* left side text */}
              <div className="absolute -left-[150px] top-6">
                <h4 className="uppercase text-[11px] text-[#D2DCE7] tracking-widest">
                  Buy & Sell Fees
                </h4>
              </div>
              {/* left side box */}
              <div className="absolute z-50 -left-[350px] top-64">
                <LeftBoxSvg></LeftBoxSvg>
                <div className="">
                  <div className="absolute top-16 left-6 z-50 text-center">
                    <h3 className="text-xl mb-4 text-[#C8DBE3] font-semibold">
                      Risk Free Value (RFV)
                    </h3>
                    <p className="text-[#97A2AB] text-sm ">
                      A portion of the buy and sells fees goes to <br /> the
                      treasury for marketing, new development <br /> and to
                      support RFV
                    </p>
                  </div>
                </div>
              </div>
              {/* left box bg */}
              <div className="absolute z-0 -left-[430px] top-44 pointer-events-none">
                <RightBoxBg></RightBoxBg>
              </div>
              {/* left box middle tick */}
              <div className="absolute z-50 -left-[310px] top-35 pointer-events-none">
                <LeftSideBoxCircle></LeftSideBoxCircle>
              </div>

              {/* bottom arrow and all svg setup */}
              <div className="absolute -bottom-[545px] left-[183px]">
                <BottomArrow></BottomArrow>
              </div>
              <div className="absolute -bottom-[556px] left-[0px]">
                <FlatArrow></FlatArrow>
              </div>
              <div className="absolute -bottom-[573px] left-[364.5px]">
                <SmallArrow></SmallArrow>
              </div>
              <div className="absolute -bottom-[573px] -left-[4px]">
                <SmallArrow></SmallArrow>
              </div>
              {/* left box */}
              <div className="absolute -bottom-[753px] -left-[130px]">
                <BottomBox></BottomBox>
              </div>
              <div className="absolute -left-[105px] -bottom-[708px]">
                <h4 className="text-center text-sm text-[#D2DCE7]">
                  You receive <span className="text-[#6CDDB5]">,03959%</span>{" "}
                  APY in your <br /> wallet every 30 minutes
                </h4>
              </div>
              {/* right box */}
              <div className="absolute -bottom-[753px] -right-[130px]">
                <BottomBox></BottomBox>
              </div>
              <div className="absolute -right-[105px] -bottom-[708px]">
                <h4 className="text-center text-sm text-[#D2DCE7]">
                  You receive <span className="text-[#6CDDB5]">,03959%</span>{" "}
                  APY in your <br /> wallet every 30 minutes
                </h4>
              </div>
            </div>
          </div>
          <div className="absolute z-90 -left-[580px] top-[300px] -translate-y-1/2 rotate-[90deg]">
            <h2 className="text-7xl uppercase font-bold tracking-widest text-transparent stroke-text">
              TITANO AUTOTASK PROTOCOL
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSvgSection;
