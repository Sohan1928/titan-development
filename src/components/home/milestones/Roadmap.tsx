import ConnectorLineSvg from "./svg/ConnectorLineSvg";
import PortfolioGreenCircleSvg from "./svg/PortfolioGreenCircleSvg";

const Roadmap = () => {
  return (
    <section className="roadmap-container pt-[127px] pb-[400px] overflow-hidden">
      <div className="title items-center text-center mx-auto justify-center flex flex-col">
        <h5>Roadmap</h5>
        <h2>The Titano Roadmap</h2>
        <p>
          The Titano roadmap features a wide range of projects and use cases
          shoqing the power of the TAP protocol and bring financial benefits to
          Titano token holders.
        </p>
      </div>
      <div className="portfolio-section pt-[127px] relative pb-[200px]">
        <div className="absolute top-[305px] right-0">
          <ConnectorLineSvg></ConnectorLineSvg>
        </div>
        <div className="absolute top-[390px] -right-[34px] overflow-hidden">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="absolute top-[496px] right-[278px]">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="absolute top-[276px] right-[699px]">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="absolute top-[512px] left-[616px]">
          <PortfolioGreenCircleSvg></PortfolioGreenCircleSvg>
        </div>
        <div className="absolute top-[320px] left-[445px]">
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
    </section>
  );
};

export default Roadmap;
