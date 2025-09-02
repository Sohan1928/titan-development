import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import AboutLeftSideBgSvg from "./svg/AboutLeftSideBgSvg";
import AboutLeftSideSvg from "./svg/AboutLeftSideSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    // min-width:1024px
    mm.add("(min-width:1024px", () => {
      gsap.from(".about-container", {
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 60%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.from(".aboutNumberAnimation", {
        opacity: 0,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".aboutNumberAnimation",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
      document.fonts.ready.then(() => {
        gsap.set(".aboutPAnimation", { opacity: 1 });
        // SplitText
        const split = new SplitText(".aboutPAnimation", {
          type: "words,lines",
          linesClass: "lines",
          autoSplit: true,
        });
        // Animation
        gsap.from(split.words, {
          duration: 1.8,
          yPercent: 50,
          opacity: 0,
          stagger: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".aboutPAnimation",
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        });
      });
      document.fonts.ready.then(() => {
        gsap.set(".aboutStakAnimation", { opacity: 1 });
        // SplitText
        const split = new SplitText(".aboutStakAnimation", {
          type: "words,lines",
          linesClass: "lines",
          autoSplit: true,
        });
        // Animation
        gsap.from(split.words, {
          duration: 1.8,
          yPercent: 50,
          opacity: 0,
          stagger: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".aboutStakAnimation",
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        });
      });
    });
  }, []);

  return (
    <section className="about-container relative px-[13px]">
      <div className="main-content relative">
        <div
          className="about-left-svg-circle pointer-events-none relative"
          // data-speed="2"
          // data-lag="0.5"
        >
          <div className="about-left-side-svg">
            <AboutLeftSideSvg></AboutLeftSideSvg>
          </div>
          <div className="aboutLeftSvg absolute -top-12 -left-0 pointer-events-none">
            <AboutLeftSideBgSvg></AboutLeftSideBgSvg>
          </div>
          <svg
            className="aboutLeftSvgBg absolute -top-0 left-12"
            xmlns="http://www.w3.org/2000/svg"
            width="422"
            height="422"
            viewBox="0 0 422 422"
            fill="none"
          >
            <g opacity="0.5" filter="url(#filter0_f_0_17)">
              <circle cx="361" cy="361" r="117" fill="#5CFFF3" />
            </g>
            <defs>
              <filter
                id="filter0_f_0_17"
                x="0"
                y="0"
                width="722"
                height="722"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="122"
                  result="effect1_foregroundBlur_0_17"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pt-10 sm:pt-20 lg:pt-0 about-top">
          <h5 className="aboutTop uppercase">About</h5>
          <p className="aboutPAnimation aboutP">
            Titano Finance is transforming DeFi with the Titano Autostaking
            Protocol (TAP) that delivers the industry’s highest fixed APY,
            rebasing rewards every 30 minutes, and a simple buy-hold-earn system
            that grows your portfolio in your wallet, fast.
          </p>
          <h4 className="aboutStak aboutStakAnimation">
            100% Fixed Staking APY
          </h4>
          <h4 className="aboutNumber aboutNumberAnimation mt-[9px]">
            102 483.58%
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
