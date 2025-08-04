const Milestones = () => {
  return (
    <section className="milestones-container pl-[90px] pt-[30px] pb-[90px]">
      <div className="container-content flex items-center gap-[80px]">
        <div className="title-section">
          <h5 className="subtitle">Milestones</h5>
          <h2 className="title">Titano Highlights and Milestones</h2>
          <h4 className="pt-[65px]">Liquidity Protected</h4>
          <p className="pt-[23px]">
            Titano owns almost all of its liquidity, helping maintain price
            stability and hedging Titano against unpredictable and unfavorable
            market conditions.
          </p>
          <h4 className="pt-[65px]">Vibrant Social Media Communities</h4>
          <p className="pt-[23px]">
            Titano has nearly 25,000 members (TITANS) and growing on its social
            media platforms. Come Join Us!
          </p>
        </div>
        <div className="audited-section">
          <h4>Audited</h4>
          <p className="pt-5">
            Titano’s contracts have been audited by Solidity Finance with no
            major issues discovered. We are currently under audit by CerTik, the
            industry’s top auditor.
          </p>
          <h4 className="pt-[65px]">Weekly Token Burning</h4>
          <p className="pt-[23px]">
            Each week Titano burns nearly.5% of its locked tokens creating
            inflation stability.
          </p>
          <h4 className="pt-[96px]">Liquidity Locked</h4>
          <p className="pt-[23px]">
            90% of Titano’s total token supply is vested into Unicrypt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
