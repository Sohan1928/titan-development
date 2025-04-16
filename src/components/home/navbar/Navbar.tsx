import IconSvg from "./svg/iconSvg";

const Navbar = () => {
  return (
    <section className="bg-linear-to-r from-[#1C1B2E] to-[#000000]">
      <div className="md:px-[40px] lg:px-[80px] pt-[30px]">
        <h3 className="uppercase flex items-center gap-1">
          <IconSvg></IconSvg>
          <span className="text-3xl font-semibold flex items-center gap-1.5 text-white spaceGroteskFont">
            <span>T</span>
            <span>i</span>
            <span>t</span>
            <span>a</span>
            <span>n</span>
            <span>o</span>
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Navbar;
