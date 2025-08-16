import gsap from "gsap";
import "./bannerTransparentText.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BannerTransparentText = () => {
  useGSAP(() => {
    gsap.to(".banner-transparent-text-container h4", {
      x: "-190%",
      scrollTrigger: {
        trigger: ".banner-transparent-text-container",
        // scroller: "#smooth-content",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <section className="banner-transparent-text-container">
      <div className="flex items-center text-center mix-blend-screen justify-center">
        <h4 className="stackingText stroke-text">STACKING & COMPOUNDING</h4>
      </div>
    </section>
  );
};

export default BannerTransparentText;
