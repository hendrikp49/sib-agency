import { ArrowRight } from "../../../public/icons";

const HeroSection = () => {
  return (
    <div className="px-5 py-10 md:py-[72px] space-y-[64px] overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-[1056px] mx-auto gap-10">
        <h1 className="text-[58.5px] lg:text-[104px] md:text-7xl font-bold tracking-tight text-center leading-none">
          <span className="text-[#AEB2BA]">I&apos;m Ivan,</span> a passionate
          designer specializing in digital solutions
        </h1>

        <button className="py-6 px-[37px] items-center justify-center text-[22px] md:w-fit w-full bg-[#030312] flex gap-3 text-white rounded-full font-semibold">
          Let&apos;s talk
          <img src={ArrowRight} alt="arrow right icon" />
        </button>

        <ul className="flex items-center justify-center gap-10 font-medium">
          <li>
            <button className="text-sm underline uppercase">Instagram</button>
          </li>
          <li>
            <button className="text-sm underline uppercase">Behance</button>
          </li>
          <li>
            <button className="text-sm underline uppercase">Dribble</button>
          </li>
        </ul>
      </div>

      <div className="relative flex items-center justify-center gap-4 md:gap-8">
        <img
          src="/images/hero 1.png"
          alt="iphone mockoup"
          className="w-[264px] h-[264px] md:w-[432px] md:h-[433px] object-cover rounded-[20px]"
        />
        <img
          src="/images/hero 2.png"
          alt="laptop mockup"
          className="w-[264px] h-[264px] md:w-[432px] md:h-[433px] object-cover rounded-[20px]"
        />
        <img
          src="/images/hero 3.png"
          alt="graphics data"
          className="w-[264px] h-[264px] md:w-[432px] md:h-[433px] object-cover rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
