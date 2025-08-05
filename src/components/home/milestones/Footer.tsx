import DiscordSvg from "./svg/DiscordSvg";
import FooterBottomSvg from "./svg/FooterBottomSvg";
import LogoSvg from "./svg/LogoSvg";
import OtherSvg from "./svg/OtherSvg";
import TelegramSvg from "./svg/TelegramSvg";
import TwitterSvg from "./svg/TwitterSvg";

const Footer = () => {
  return (
    <section className="footer-container relative">
      <div>
        <LogoSvg></LogoSvg>
      </div>
      <div className="social-icon">
        <span>
          <TwitterSvg></TwitterSvg>
        </span>
        <span>
          <DiscordSvg></DiscordSvg>
        </span>
        <span>
          <TelegramSvg></TelegramSvg>
        </span>
        <span>
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
