import gsap from "gsap";
import Footer from "./Footer";
import ConnectorLineSvg from "./svg/ConnectorLineSvg";
import PortfolioGreenCircleSvg from "./svg/PortfolioGreenCircleSvg";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  useGSAP(() => {
    gsap.from(".roadmapSubtitle", {
      x: 400,
      y: -300,
      scale: 2.5,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      },
    });
    const tl = gsap.timeline();
    document.fonts.ready.then(() => {
      gsap.set(".roadmap-container .roadmapTitle", { opacity: 1 });
      const splitH2 = new SplitText(".roadmapTitleh2", {
        type: "words,lines",
        linesClass: "words",
        autoSplit: true,
      });
      const splitP = new SplitText(".roadmapTitleP", {
        type: "words,lines",
        linesClass: "lines",
        autoSplit: true,
      });
      tl.from(splitH2.words, {
        duration: 1.8,
        yPercent: 50,
        opacity: 0,
        scale: 0.7,
        stagger: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".roadmap-container",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
      tl.from(splitP.words, {
        duration: 1.8,
        yPercent: 50,
        opacity: 0,
        scale: 0.7,
        stagger: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".roadmap-container",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    tl.from(".connectorLineSvg", {
      x: -400,
      y: 300,
      opacity: 0,
      duration: 1.4,
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });
    tl.from(".roadmapPortfolioGreenCircleSvg", {
      y: -300,
      opacity: 0,
      duration: 1.4,
      stagger: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
      },
    });
    tl.from(".q1", {
      y: -400,
      x: -400,
      opacity: 0,
      duration: 1.8,
      stagger: 1.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="roadmap-container pt-[127px] overflow-hidden relative">
      <div className="title roadmapTitle items-center text-center mx-auto justify-center flex flex-col">
        <h5 className="roadmapSubtitle">Roadmap</h5>
        <h2 className="roadmapTitleh2">The Titano Roadmap</h2>
        <p className="roadmapTitleP">
          The Titano roadmap features a wide range of projects and use cases
          shoqing the power of the TAP protocol and bring financial benefits to
          Titano token holders.
        </p>
      </div>

      <div className="portfolio-section pt-[127px] relative pb-[400px]">
        <div className="connectorLineSvg absolute top-[305px] right-0 pointer-events-none">
          <ConnectorLineSvg></ConnectorLineSvg>
        </div>
        <div className="roadmapPortfolioGreenCircleSvg absolute top-[390px] -right-[34px] overflow-hidden pointer-events-none">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="roadmapPortfolioGreenCircleSvg absolute top-[496px] right-[278px] pointer-events-none">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="roadmapPortfolioGreenCircleSvg absolute top-[276px] right-[699px] pointer-events-none">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="roadmapPortfolioGreenCircleSvg absolute top-[512px] left-[616px] pointer-events-none">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="roadmapPortfolioGreenCircleSvg absolute top-[320px] left-[445px] pointer-events-none">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="q1 absolute top-[142px] right-[554px]">
          <h6>Q1 2022</h6>
          <h5 className="pt-[10px]">MERITOCRATIC PORTFOLIO’S</h5>
          <p className="pt-[23px]">
            Building more efficient on-chain decision making processes to govern
            portfolios and the wider Nova ecosystem.
          </p>
        </div>
        <div className="q1 absolute top-[565px] right-[133px]">
          <h6>Q1 2022</h6>
          <h5 className="pt-[10px]">ETHEREUM DEPLOYMENT</h5>
          <p className="pt-[23px]">
            Allowing users to access and control even more assets across
            multiple blockchains.
          </p>
        </div>
        <div className="q1 absolute top-[578px] left-[472px]">
          <h6>Q1 2022</h6>
          <h5 className="pt-[10px]">ETHEREUM DEPLOYMENT</h5>
          <p className="pt-[23px]">
            Allowing users to access and control even more assets across
            multiple blockchains.
          </p>
        </div>
        <div className="q2 absolute top-[378px] left-[245px]">
          <h6>Q4 - IDO</h6>
          <h5 className="pt-[10px]">MVP LAUNCH</h5>
          <p className="pt-[23px]">
            Launching the initial use case of Assets and providing users with
            the first set of on-chain strategies and yield generators.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Roadmap;
