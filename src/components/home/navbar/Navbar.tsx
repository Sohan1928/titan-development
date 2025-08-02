import Logo from "./svg/LogoSvg";

const Navbar = () => {
  return (
    <section className="z-50">
      <div className="md:px-[40px] lg:px-[80px] pt-[30px] flex items-center justify-between">
        <h3 className="uppercase flex items-center gap-2">
          <Logo></Logo>
        </h3>
        <ul className="text-[#D0DCE8] navLinks flex items-center gap-10">
          <a>How it works</a>
          <a>Earnings</a>
          <a>Tokenmics</a>
          <a>Milestones</a>
        </ul>
        <button className="navbarBtn relative inline-flex h-12 overflow-hidden rounded-lg p-[3px]">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            Start Earning Now!
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
