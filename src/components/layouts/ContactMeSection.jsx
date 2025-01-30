import { ArrowRight } from "../../../public/icons";

const ContactMeSection = () => {
  return (
    <div className="px-4 py-8 bg-gray-100 ">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto">
        <ul className="flex justify-center gap-8 text-sm font-medium font-inter-tight">
          <li>
            <a href="#about" className="underline hover:text-gray-600">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#works" className="underline hover:text-gray-600">
              WORKS
            </a>
          </li>
          <li>
            <a href="#insights" className="underline hover:text-gray-600">
              INSIGHTS
            </a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-32 text-center">
        <h1 className="mb-4 text-6xl font-bold md:text-7xl">
          Want to create something{" "}
          <span className="text-gray-400">awesome?</span>
        </h1>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors bg-black rounded-full font-inter-tight hover:bg-gray-800">
            Let{"'"}s Talk
            <img src={ArrowRight} alt="Arrow Right Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
