import BoxSvg from "./svg/BoxSvg";
import ChartIconSvg from "./svg/ChartIconSvg";
import DownLineSvg from "./svg/DownLineSvg";
import FirstCircleBgSvg from "./svg/FirstCircleBgSvg";
import RightArrowLineSvg from "./svg/RightArrowLineSvg";
import RoundCircleSvg from "./svg/RoundCircleSvg";
import SecondCircleBgSvg from "./svg/SecondCircleBgSvg";
import ThirdCircleBgSvg from "./svg/ThirdCircleBgSvg";
import UpperLineSvg from "./svg/UpperLineSvg";

const Tokenomics = () => {
  return (
    <section className="tokenomics-container mt-[140px] pt-[110px] pl-[90px] pb-56">
      <div className="top-content">
        <h5>Tokenomics</h5>
        <h3>Tokenomics</h3>
        <p>
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
            <div className="chart-icon">
              <ChartIconSvg></ChartIconSvg>
            </div>
            <div className="absolute -right-[125px] top-48">
              <RightArrowLineSvg></RightArrowLineSvg>
            </div>
            <div className="absolute -right-[125px] top-[26px]">
              <UpperLineSvg></UpperLineSvg>
            </div>
            <div className="absolute -right-[125px] bottom-[31px]">
              <DownLineSvg></DownLineSvg>
            </div>
            {/* first circle */}
            <div className="absolute -right-[255px] -top-[24px]">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[50px] -left-[71px]">
                  <FirstCircleBgSvg></FirstCircleBgSvg>
                </div>
              </div>
            </div>
            {/* secod circle */}
            <div className="absolute -right-[255px] top-[144px]">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[47px] -left-[68px]">
                  <SecondCircleBgSvg></SecondCircleBgSvg>
                </div>
              </div>
            </div>
            {/* third circle */}
            <div className="absolute -right-[255px] top-[314px]">
              <div className="relative z-50">
                <RoundCircleSvg></RoundCircleSvg>
                <div className="absolute z-0 -top-[47px] -left-[68px]">
                  <ThirdCircleBgSvg></ThirdCircleBgSvg>
                </div>
              </div>
            </div>
            {/* box svg */}
            <div className="absolute -top-[52px] -right-[685px] box1SvgP">
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
            <div className="absolute top-[116px] -right-[685px] box1SvgP">
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
            <div className="absolute top-[288px] -right-[685px] box1SvgP">
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
