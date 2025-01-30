import { ArrowRightBlack } from "../../../public/icons";

const InsightSection = () => {
  const insights = [
    {
      title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
      date: "May 5, 2023",
      description:
        "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
    },
    {
      title:
        "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
      date: "Apr 22, 2023",
      description:
        "Explore the realm of user experience (UX) design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive and engaging for users. This blog post will del...",
    },
    {
      title:
        "The Power of Typography in Visual Design: Enhancing Communication and Impact",
      date: "Apr 3, 2023",
      description:
        "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions. This blog post will cover typog...",
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto md:px-8 md:py-16 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col mb-8 space-y-6 md:flex-row md:items-center md:justify-between md:mb-16 md:space-y-0">
        <h2 className="text-3xl  font-inter-tight font-bold md:text-[40px] md:leading-[48px] md:max-w-md">
          Sometimes, I also write and share some insights
        </h2>

        {/* View All Button - Hidden on mobile, shown at bottom instead */}
        <button className="items-center hidden gap-2 px-4 py-2 transition-colors border border-black rounded-full font-inter-tight md:flex group hover:border-gray-300">
          <span>View All Insights</span>
          <img src={ArrowRightBlack} alt="Arrow Right icon" />
        </button>
      </div>

      {/* Insights List */}
      <div className="space-y-8 divide-y divide-gray-100 font-inter-tight">
        {insights.map((insight, index) => (
          <article
            key={index}
            className={`pt-8 hover:cursor-pointer ${index === 0 ? "pt-0" : ""}`}
          >
            {/* Mobile Layout - Stack vertically */}
            <div className="space-y-3 md:hidden">
              <h3 className="text-lg font-medium">{insight.title}</h3>
              <time className="block text-sm text-gray-500">
                {insight.date}
              </time>
              <p className="text-sm text-gray-600 line-clamp-3">
                {insight.description}
              </p>
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:gap-8">
              <div className="pr-8">
                <h3 className="mb-2 text-xl font-medium">{insight.title}</h3>
                <time className="text-sm text-gray-500">{insight.date}</time>
              </div>
              <div>
                <p className="text-base text-gray-600 line-clamp-4">
                  {insight.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-8 md:hidden">
        <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm transition-colors border border-black rounded-full font-inter-tight group hover:border-gray-300">
          <span>View All Insights</span>
          <img src={ArrowRightBlack} alt="Arrow Right icon" />
        </button>
      </div>
    </div>
  );
};

export default InsightSection;
