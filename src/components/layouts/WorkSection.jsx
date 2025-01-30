import { useState } from "react";
import { ArrowRightBlack } from "../../../public/icons";

const WorkSection = () => {
  const [activeId, setActiveId] = useState("sportly");

  const projects = [
    {
      id: "sportly",
      title: "Sportly",
      date: "May 5, 2023",
      description:
        "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UI/UX", "Branding"],
      image: "/images/hero 1.png",
    },
    {
      id: "payrole",
      title: "Payrole",
      date: "May 5, 2023",
      description:
        "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UI/UX", "Branding"],
      image: "/images/hero 2.png",
    },
    {
      id: "wepay",
      title: "Wepay",
      date: "May 5, 2023",
      description:
        "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UI/UX", "Branding"],
      image: "/images/hero 3.png",
    },
    {
      id: "estatery",
      title: "Estatery",
      date: "May 5, 2023",
      description:
        "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UI/UX", "Branding"],
      image: "/images/hero 1.png",
    },
  ];

  return (
    <section className="py-10 md:py-[72px] px-5 max-w-[1056px] mx-auto">
      <div className="flex justify-start pb-10 md:pb-11 border-b border-[#e5e7eb] w-full md:items-center md:justify-between">
        <h5 className="text-[32px] md:text-[40px] font-semibold">
          Selected Works
        </h5>

        <button className="px-5 py-3 font-semibold hidden md:flex border items-center gap-3 rounded-full border-[#030712]">
          View All Works
          <img src={ArrowRightBlack} alt="arrow right icon" />
        </button>
      </div>

      <div className="mt-10">
        <div className="space-y-10 cursor-pointer md:space-y-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="space-y-8 border-b pb-12 border-[#e5e7eb]"
            >
              <div
                onClick={() =>
                  setActiveId(activeId === project.id ? null : project.id)
                }
                className="flex flex-col gap-2 md:justify-between md:flex-row md:items-center"
              >
                <p className="text-[22px] font-semibold">{project.title}</p>

                <p className="text-[#374151] text-lg max-w-[316px]">
                  {project.description}
                </p>

                <div className="flex justify-center space-y-4 md:hidden">
                  {activeId === project.id && (
                    <button>
                      <img
                        src={project.image}
                        alt={project.title}
                        className=" h-[280px] md:h-[512px] rounded-3xl object-cover"
                      />
                    </button>
                  )}
                </div>

                <div className="space-x-2 md:hidden spacey-4">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="py-2 px-5 border rounded-full border-[#030712]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="items-center hidden gap-1 md:flex">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="py-2 px-5 border rounded-full border-[#030712]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                {activeId === project.id && (
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className=" h-[280px] md:h-[512px] rounded-3xl object-cover"
                    />

                    <button className="py-4 px-7 absolute bottom-6 right-6 border-[#030312] border rounded-full">
                      <img src={ArrowRightBlack} alt="arrow right icon" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
