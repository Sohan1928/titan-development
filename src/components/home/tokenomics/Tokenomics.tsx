import ChartIconSvg from "./svg/ChartIconSvg";

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
        <div className="donut-chart-block block">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
