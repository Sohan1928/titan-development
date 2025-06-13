import TitanIconSvg from "./svg/TitanIconSvg";

const HowItWorksSvgSection = () => {
  return (
    <section>
      <div className="flex flex-col text-center mx-auto items-centere justify-center md:mt-36">
        <h2 className="text-lg">
          <span className="text-2xl">The Automatic Stacking,</span> and <br />
          Compounding Titaton Token
        </h2>
        <p className="flex items-center justify-center">
          <TitanIconSvg></TitanIconSvg>
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSvgSection;
