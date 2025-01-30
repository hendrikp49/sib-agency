import { ArrowRightBlack, CaretDown } from "../../../public/icons";

const AwwardsSection = () => {
  return (
    <section className="max-w-[1056px] mx-auto py-10 px-5 md:py-[72px]">
      <div className="flex flex-col gap-8 md:gap-[56px] md:items-center md:flex-row md:justify-between">
        <div className="bg-[#e5e7eb] md:w-[36%] border flex items-center justify-center h-[427px] rounded-[20px] max-w-full">
          <img
            src="/images/awward.png"
            alt="awward image"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-6 md:gap-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-[56px] md:text-[72px] font-semibold leading-none break-words">
              Awwards Winning - Independent of The Year
            </h2>

            <p className="text-[18px] text-[#374151]">Ivan Kazarov - 2022</p>
          </div>

          <button className="py-4 px-7 w-fit border rounded-full border-[#030712]">
            <img src={ArrowRightBlack} alt="arrow right icon" />
          </button>

          <button className="flex items-center gap-3 font-semibold">
            More Awwards
            <img src={CaretDown} alt="caret down icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwwardsSection;
