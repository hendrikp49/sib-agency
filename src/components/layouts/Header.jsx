import { ArrowRightBlack, Hamburger } from "../../../public/icons";

const Header = () => {
  return (
    <header className="p-5 max-w-[1056px] mx-auto">
      <nav className="flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tighter">
          <span className="text-[#AEB2BA]">show</span>casy.
        </h3>

        <div className="flex items-center gap-4">
          <button className="px-5 py-3 hidden lg:flex justify-center font-semibold border items-center gap-3 rounded-full border-[#030712]">
            Let&apos;s talk
            <img src={ArrowRightBlack} alt="arrow right icon" />
          </button>
          <button className="py-[14px] px-6 border rounded-full border-[#030712]">
            <img src={Hamburger} alt="hamburger icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
