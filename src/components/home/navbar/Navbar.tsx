import IconSvg from "./svg/IconSvg2";

const Navbar = () => {
  return (
    <section className="">
      <div className="md:px-[40px] lg:px-[80px] pt-[30px] flex items-center justify-between">
        <h3 className="uppercase flex items-center gap-2">
          <IconSvg></IconSvg>
          <span className="text-3xl font-semibold flex items-center gap-2 text-white">
            <span>T</span>
            <span>i</span>
            <span>t</span>
            <span>a</span>
            <span>n</span>
            <span>o</span>
          </span>
        </h3>
        <ul className="text-[#D0DCE8] flex items-center gap-10">
          <li className="hover:cursor-pointer hover:text-[#6BDAB7]">
            How it works
          </li>
          <li className="hover:cursor-pointer hover:text-[#6BDAB7]">
            Earnings
          </li>
          <li className="hover:cursor-pointer hover:text-[#6BDAB7]">
            Tokenmics
          </li>
          <li className="hover:cursor-pointer hover:text-[#6BDAB7]">
            Milestones
          </li>
        </ul>
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#336160_50%,#336160_50%,#28E0B2_60%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#6BDAB7] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            Start Earning Now!
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
