import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import HowItWorksSvgSection from "./HowItWorksSvgSection";
import RightSideCircleSvg from "./svg/RightSideCircleSvg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const HowItWorks = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 320px) and (max-width: 640px)", () => {
      gsap.from(".howItWorksTitleAnimation", {
        y: 100,
        opacity: 0,
        duration: 1.8,
        stagger: 1.2,
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".howItWorksTitleAnimation",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
    });
    // min-width:768px
    mm.add("(min-width:768px", () => {
      const tl = gsap.timeline();
      document.fonts.ready.then(() => {
        gsap.set(".howItWorksTitleAnimation", { opacity: 1 });
        // SplitText
        const split = new SplitText(".howItWorksTitleAnimation", {
          type: "words,lines,chars",
          linesClass: "line",
          autoSplit: true,
        });
        // Animation
        tl.from(split.chars, {
          duration: 1.8,
          yPercent: 50,
          opacity: 0,
          stagger: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".howItWorksTitleAnimation",
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    });
  }, []);

  return (
    <section
      id="how-it-works-container"
      className="md:px-[40px] lg:px-[80px] px-[13px] pb-56 relative"
    >
      <div className="how-it-works-top-content flex flex-col items-center justify-center text-center">
        <h2 className="howItWorksTitle howItWorksTitleAnimation">
          How it work
        </h2>
        <h4 className="howItWorksTitleAnimation text-[#D2DCE7] mt-[30px] font-medium">
          How the Titano Autostaking Protocol (TAP) Works
        </h4>
        <p className="howItWorksP howItWorksTitleAnimation mt-[15px] mb-24">
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
