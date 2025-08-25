import gsap from "gsap";
import DiscordSvg from "./svg/DiscordSvg";
import FooterBottomSvg from "./svg/FooterBottomSvg";
import LogoSvg from "./svg/LogoSvg";
import OtherSvg from "./svg/OtherSvg";
import TelegramSvg from "./svg/TelegramSvg";
import TwitterSvg from "./svg/TwitterSvg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(".footerSvg", {
      x: -400,
      y: -200,
      scale: 1.6,
      opacity: 0,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
    tl.from(".footer-social", {
      y: -200,
      scale: 1.4,
      opacity: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".copyright-text", {
      x: 300,
      y: -300,
      opacity: 0,
      ease: "power1.out",
      scale: 1.8,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 40%",
        end: "top 20%",
        scrub: true,
      },
    });
  });
  return (
    <section className="footer-container relative pointer-events-none">
      <div className="footerSvg pointer-events-none">
        <LogoSvg></LogoSvg>
      </div>
      <div className="social-icon">
        <span className="footer-social">
          <TwitterSvg></TwitterSvg>
        </span>
        <span className="footer-social">
          <DiscordSvg></DiscordSvg>
        </span>
        <span className="footer-social">
          <TelegramSvg></TelegramSvg>
        </span>
        <span className="footer-social">
          <OtherSvg></OtherSvg>
        </span>
      </div>
      <div className="copyright-text">
        <p>Copyright © 2021. Titano. All rights reserved.</p>
      </div>
      <div className="absolute left-0 -bottom-[0px] pointer-events-none">
        <FooterBottomSvg></FooterBottomSvg>
      </div>
    </section>
  );
};

export default Footer;
