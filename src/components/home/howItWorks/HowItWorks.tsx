import HowItWorksSvgSection from "./HowItWorksSvgSection";
import RightSideCircleSvg from "./svg/RightSideCircleSvg";

const HowItWorks = () => {
  return (
    <section className="md:px-[40px] lg:px-[80px] pt-[90px] pb-56">
      <div className="relative flex flex-col items-center justify-center text-center">
        <h1 className="text-[#D2DCE7] text-6xl">How it works</h1>
        <h4 className="text-[#D2DCE7] text-3xl mt-7">
          How the Titano Autostaking Protocol (TAP) Works
        </h4>
        <p className="text-[#949AA3] text-xl mt-3 mb-24">
          When you purchase the Titano token you simply hold it in your wallet
          and TAP doe all the work
        </p>
      </div>
      <div className="absolute top-[650px] right-0 pointer-events-none">
        <RightSideCircleSvg></RightSideCircleSvg>
      </div>
      <div className="text-white">
        <HowItWorksSvgSection></HowItWorksSvgSection>
      </div>
    </section>
  );
};

export default HowItWorks;
