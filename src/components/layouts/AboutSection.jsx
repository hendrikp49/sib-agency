import { ArrowRightBlack } from "../../../public/icons";

const AboutSection = () => {
  return (
    <section className="px-5 py-10 max-w-[1056px] md:py-[72px] mx-auto">
      <div className="flex flex-col max-w-full gap-4 md:gap-6 md:flex-row">
        <h1 className="text-[56px] md:text-[72px] font-semibold md:w-[60%] leading-none break-words">
          Design that sparks engagement and inspires action
        </h1>

        <div className="flex flex-col flex-1 gap-8">
          <p className="text-[#374151] text-lg">
            I&apos;m a Product Designer living in Munich, and I focus on making
            digital experiences that are easy to use, enjoyable, and get the job
            done. I love tackling challenging problems and creating solutions
            that truly matter to people.
          </p>

          <button className="border border-[#030712] flex items-center gap-3 font-semibold justify-center rounded-full py-4 px-5 w-full md:w-fit">
            About Me
            <img src={ArrowRightBlack} alt="arrow right icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
