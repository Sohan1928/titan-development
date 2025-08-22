import gsap from "gsap";
import BoxSvg from "./svg/BoxSvg";
import ChartIconSvg from "./svg/ChartIconSvg";
import DownLineSvg from "./svg/DownLineSvg";
import FirstCircleBgSvg from "./svg/FirstCircleBgSvg";
import RightArrowLineSvg from "./svg/RightArrowLineSvg";
import RoundCircleSvg from "./svg/RoundCircleSvg";
import SecondCircleBgSvg from "./svg/SecondCircleBgSvg";
import ThirdCircleBgSvg from "./svg/ThirdCircleBgSvg";
import UpperLineSvg from "./svg/UpperLineSvg";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Tokenomics = () => {
  useGSAP(() => {
    gsap.from(".top-content .tokenomicsSubtitle", {
      opacity: 0,
      y: 50,
      duration: 0.4,
      scrollTrigger: {
        trigger: ".top-content .tokenomicsSubtitle",
        start: "top 80%",
        end: "top 70%",
        scrub: true,
      },
    });

    document.fonts.ready.then(() => {
      gsap.set(".tokenomics-container .tokenomicsTitle", { opacity: 1 });
      // SplitText
      const split = new SplitText(".tokenomics-container .tokenomicsTitle", {
        type: "words,lines,chars",
        linesClass: "chars",
        autoSplit: true,
      });
      // Animation
      gsap.from(split.chars, {
        duration: 1.8,
        yPercent: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tokenomics-container",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
    document.fonts.ready.then(() => {
      gsap.set(".tokenomics-container .tokenomicsP", { opacity: 1 });
      // SplitText
      const split = new SplitText(".tokenomics-container .tokenomicsP", {
        type: "words,lines",
        linesClass: "lines",
        autoSplit: true,
      });
      // Animation
      gsap.from(split.words, {
        duration: 1.8,
        yPercent: 50,
        opacity: 0,
        stagger: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tokenomics-container",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".donut-chart-container",
          start: "top 0%",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          scrub: 1.4,
          markers: true,
        },
      })
      .from(".upperLineSvg", {
        y: 200,
        opacity: 0,
        ease: "none",
      })
      .from(".firstCircle", {
        y: 200,
        opacity: 0,
        ease: "none",
      })
      .from(
        ".rotate-tokenomics-right",
        { x: 200, opacity: 0, ease: "none" },
        "+=0.4"
      )
      .from(".downLineSvg", { y: -200, opacity: 0, ease: "none" }, "+=0.4")
      .from(".thirdCircle", { y: -200, opacity: 0, ease: "none" }, "+=0.4")
      .from(
        ".rightArrowLineSvg",
        { x: -200, opacity: 0, ease: "none" },
        "+=0.4"
      )
      .from(".secondCircle", { x: -200, opacity: 0, ease: "none" }, "+=0.4")
      .from(".box1Svg", { x: -200, opacity: 0, ease: "none" }, "+=0.4")
      .from(".box2Svg", { x: -200, opacity: 0, ease: "none" }, "+=0.4")
      .from(".box3Svg", { x: -200, opacity: 0, ease: "none" }, "+=0.4");

    gsap.from(".donut-chart-container .chart-icon-logo", {
      x: 400,
      duration: 1.3,
      scale: 0.7,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".donut-chart-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="tokenomics-container mt-[140px] pt-[110px] pl-[90px] pb-56">
      <div className="top-content">
        <h5 className="tokenomicsSubtitle">Tokenomics</h5>
        <h3 className="tokenomicsTitle">Tokenomics</h3>
        <p className="tokenomicsP">
          $TITANO is a BEP-20 token with an elastic supply that rewards holders
          using a positive rebase formula.
        </p>
      </div>
      {/* donut chart */}
      <div className="donut-chart-container pt-[110px]">
        <div className="donut-chart-block block relative">
          <div className="donut-chart">
            <div id="part1" className="portion-block">
              <div className="circle"></div>
            </div>
            <div id="part2" className="portion-block">
              <div className="circle"></div>
            </div>
            <div id="part3" className="portion-block">
              <div className="circle"></div>
            </div>
            <p className="center"></p>
            <p className="center2"></p>
            <div className="chart-icon-logo">
              <ChartIconSvg></ChartIconSvg>
            </div>
            <div className="absolute -right-[125px] top-48 rightArrowLineSvg">
              <RightArrowLineSvg></RightArrowLineSvg>
            </div>
            <div className="absolute -right-[125px] top-[26px] upperLineSvg">
              <UpperLineSvg></UpperLineSvg>
            </div>
            <div className="absolute -right-[125px] bottom-[31px] downLineSvg">
              <DownLineSvg></DownLineSvg>
            </div>
            {/* first circle */}
            <div className="absolute -right-[255px] -top-[24px] firstCircle">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[50px] -left-[71px]">
                  <FirstCircleBgSvg></FirstCircleBgSvg>
                </div>
              </div>
            </div>
            {/* second circle */}
            <div className="absolute -right-[255px] top-[144px] secondCircle">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[47px] -left-[68px]">
                  <SecondCircleBgSvg></SecondCircleBgSvg>
                </div>
              </div>
            </div>
            {/* third circle */}
            <div className="absolute -right-[255px] top-[314px] thirdCircle">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[47px] -left-[68px]">
                  <ThirdCircleBgSvg></ThirdCircleBgSvg>
                </div>
              </div>
            </div>
            {/* box svg */}
            <div className="absolute -top-[52px] -right-[685px] box1SvgP box1Svg">
              <div className="relative">
                <BoxSvg></BoxSvg>
                <div className="absolute top-[23px] left-6">
                  <h5>Automatic LP</h5>
                  <p>
                    A porton of the buy and sell fees goes to the RFB to back
                    liquidity and create Stability for the Titano token.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[116px] -right-[685px] box1SvgP box2Svg">
              <div className="relative">
                <BoxSvg></BoxSvg>
                <div className="absolute top-[23px] left-6">
                  <h5>Treasury</h5>
                  <p>
                    A porton of the buy and sell fees goes to the RFB to back
                    liquidity and create Stability for the Titano token.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[288px] -right-[685px] box1SvgP box3Svg">
              <div className="relative">
                <BoxSvg></BoxSvg>
                <div className="absolute top-[23px] left-6">
                  <h5>Risk Free Value</h5>
                  <p>
                    A porton of the buy and sell fees goes to the RFB to back
                    liquidity and create Stability for the Titano token.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="rotate-tokenomics-right">TOKENOMICS</div> */}
          </div>
          {/* rotate tokenomics text */}
          <div className="rotate-tokenomics-right">
            <h4 className="stroke-text">TOKENOMICS</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
