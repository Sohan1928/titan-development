import HowItWorksSvgSection from "./HowItWorksSvgSection";
import RightSideCircleSvg from "./svg/RightSideCircleSvg";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works-container"
      className="md:px-[40px] lg:px-[80px] pt-[270px] pb-56 relative"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="howItWorksTitle">How it works</h2>
        <h4 className="text-[#D2DCE7] text-3xl mt-[30px] font-medium">
          How the Titano Autostaking Protocol (TAP) Works
        </h4>
        <p className="howItWorksP mt-[15px] mb-24">
          When you purchase the Titano token you simply hold it in your wallet
          and TAP doe all the work
        </p>
      </div>
      <div className="absolute -top-[820px] right-0 pointer-events-none">
        <RightSideCircleSvg></RightSideCircleSvg>
      </div>
      <div>
        <HowItWorksSvgSection></HowItWorksSvgSection>
      </div>
    </section>
  );
};

export default HowItWorks;
