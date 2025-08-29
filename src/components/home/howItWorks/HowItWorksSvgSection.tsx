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
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSvgSection = () => {
  // useGSAP(() => {
  //   gsap.from(".howItWorksSvgSectionContainer", {
  //     opacity: 0,
  //     duration: 1.4,
  //     ease: "circ.in",
  //     y: 50,
  //     scrollTrigger: {
  //       trigger: ".howItWorksSvgSectionContainer",
  //       start: "top bottom",
  //       end: "top center",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <section className="howItWorksSvgSectionContainer">
      <div className="relative">
        <div className="theAutomaticText z-50">
          <span>The Automatic Stacking,</span> and Compounding Titaton Token
        </div>
        <h4 className="works-titan-icon-svg flex flex-col items-center justify-center">
          <TitanIconSvg></TitanIconSvg>
        </h4>
        {/* top box svg */}
        <div className="how-it-svg-section absolute -top-64 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="top-box-svg">
              <TopBoxSvg></TopBoxSvg>
            </div>
            {/* Text Overlay */}
            <div className="pancake-swap-section inset-0 flex items-center justify-center">
              <p className="flex items-center justify-center gap-1 font-bold text-white">
                <div className="pancake-swap-icon-svg">
                  <PancakeSwapIconSvg></PancakeSwapIconSvg>
                </div>
                <h6 className="pancake-swap-text">PancakeSwap</h6>
              </p>
            </div>
            {/* circle ellips */}
            <div className="how-it-right-ellipse-svg">
              <RightSideEllipseSvg></RightSideEllipseSvg>
            </div>
            {/* circle ellips */}
            <div className="how-it-left-ellipse-svg">
              <RightSideEllipseSvg></RightSideEllipseSvg>
            </div>
            {/* circle ellips */}
            <div className="how-it-bottom-ellipse-svg">
              <RightSideEllipseSvg></RightSideEllipseSvg>
            </div>
            {/* bottom line arrow */}
            <div className="how-it-bottom-arrow">
              <BottomArrowSvg></BottomArrowSvg>
            </div>
            {/* right side */}
            {/* right line arrow 1 */}
            <div className="how-it-right-line-arrow1">
              <LineArrow1></LineArrow1>
            </div>
            {/* right line arrow 2 */}
            <div className="how-it-right-line-arrow2">
              <LineArrow2></LineArrow2>
            </div>
            {/* right side text */}
            <div className="">
              <h4 className="buyAndSell buy-and-sell-right uppercase">
                Buy & Sell Fees
              </h4>
            </div>
            {/* right side box */}
            <div className="how-it-right-box z-50">
              <RightBoxSvg></RightBoxSvg>
              <div className="howItWorksMiddleBoxContent how-it-works-right-middle-box z-50 text-center">
                <h3 className="mb-[10px]">Titano Treasury</h3>
                <p>
                  A portion of the buy and sells fees goes to the treasury for
                  marketing, new development and to support RFV
                </p>
              </div>
            </div>
            {/* right box bg */}
            <div className="absolute z-0 -right-[430px] top-44 pointer-events-none">
              <RightBoxBg></RightBoxBg>
            </div>
            {/* right box middle tick */}
            <div className="how-it-right-box-tick z-50 pointer-events-none">
              <RightBoxTick></RightBoxTick>
            </div>

            {/* left side  */}
            {/* left line arrow 1 */}
            <div className="how-it-left-line-arrow1">
              <LineArrow1></LineArrow1>
            </div>
            {/* left line arrow 2 */}
            <div className="how-it-left-line-arrow2">
              <LineArrow2></LineArrow2>
            </div>
            {/* left side text */}
            <div className="">
              <h4 className="buyAndSell buy-and-sell-left uppercase">
                Buy & Sell Fees
              </h4>
            </div>
            {/* left side box */}
            <div className="how-it-left-box z-50">
              <LeftBoxSvg></LeftBoxSvg>
              <div className="">
                <div className="howItWorksMiddleBoxContent how-it-works-left-middle-box z-50 text-center">
                  <h3 className="mb-[10px]">Risk Free Value (RFV)</h3>
                  <p>
                    A portion of the buy and sells fees goes to the treasury for
                    marketing, new development and to support RFV
                  </p>
                </div>
              </div>
            </div>
            {/* left box bg */}
            <div className="absolute z-0 -left-[430px] top-44 pointer-events-none">
              <RightBoxBg></RightBoxBg>
            </div>
            {/* left box middle tick */}
            <div className="how-it-left-box-tick z-50 pointer-events-none">
              <LeftSideBoxCircle></LeftSideBoxCircle>
            </div>

            {/* bottom arrow and all svg setup */}
            <div className="bottom-arrow-how-it absolute ">
              <BottomArrow></BottomArrow>
            </div>
            <div className="flat-arrow-how-it">
              <FlatArrow></FlatArrow>
            </div>
            <div className="small-arrow-how-it1">
              <SmallArrow></SmallArrow>
            </div>
            <div className="small-arrow-how-it2">
              <SmallArrow></SmallArrow>
            </div>
            {/* left box */}
            <div className="how-it-bottom-left-box ">
              <BottomBox></BottomBox>
            </div>
            <div className="howItWorksBottomBoxContent how-it-bottom-left-box-text">
              <h4 className="text-center">
                You receive <span>,03959%</span> APY in your wallet every 30
                minutes
              </h4>
            </div>
            {/* right box */}
            <div className="how-it-bottom-right-box">
              <BottomBox></BottomBox>
            </div>
            <div className="howItWorksBottomBoxContent how-it-bottom-right-box-text">
              <h4 className="text-center">
                You receive <span>,03959%</span> APY in your wallet every 30
                minutes
              </h4>
            </div>
          </div>
        </div>
        <div className="z-90 -translate-y-1/2">
          <h2 className="rotateText stroke-text how-it-rotate-text">
            TITANO AUTOTASK PROTOCOL
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSvgSection;
