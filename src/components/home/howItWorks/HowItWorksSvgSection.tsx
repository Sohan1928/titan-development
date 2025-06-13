import PancakeSwapIconSvg from "./svg/topBox/PancakeSwapIconSvg";
import TitanIconSvg from "./svg/TitanIconSvg";
import TopBoxSvg from "./svg/topBox/TopBoxSvg";
import RightSideEllipseSvg from "./svg/topBox/rightSideEllipseSvg";
import BottomArrowSvg from "./svg/topBox/BottomArrowSvg";

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
              <div className="absolute -right-8 top-6">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              <div className="absolute -left-9 top-6">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              <div className="absolute -bottom-10 left-40">
                <RightSideEllipseSvg></RightSideEllipseSvg>
              </div>
              <div className="absolute left-[193.5px] -bottom-24">
                <BottomArrowSvg></BottomArrowSvg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSvgSection;
