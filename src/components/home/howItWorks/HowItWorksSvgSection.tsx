import PancakeSwapIconSvg from "./svg/topBox/PancakeSwapIconSvg";
import TitanIconSvg from "./svg/TitanIconSvg";
import TopBoxSvg from "./svg/topBox/TopBoxSvg";
import BottomArrowSvg from "./svg/topBox/BottomArrowSvg";
import RightSideEllipseSvg from "./svg/topBox/RightSideEllipseSvg";
import LineArrow1 from "./svg/topBox/rightArrow/LineArrow1";
import LineArrow2 from "./svg/topBox/rightArrow/LineArrow2";

const HowItWorksSvgSection = () => {
  return (
    <section>
      <div className="md:mt-60">
        <div className="relative">
          <h2 className="text-base text-center">
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
                <h4 className="uppercase text-[11px] tracking-widest">
                  Buy & Sell Fees
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSvgSection;
