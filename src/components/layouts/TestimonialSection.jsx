import PropTypes from "prop-types";
import { Teamwork } from "../../../public/icons";

const testimonials = [
  {
    id: 1,
    text: "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Daniel for anyone looking for a talented and professional designer.",
    author: {
      name: "Richard Jonas",
      role: "CEO",
      company: "Teamwork",
      avatar: "/images/avatar.png",
    },
    companyLogo: Teamwork,
  },
  {
    id: 2,
    text: "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Daniel for anyone looking for a talented and professional designer.",
    author: {
      name: "Richard Jonas",
      role: "CEO",
      company: "Teamwork",
      avatar: "/images/avatar.png",
    },
    companyLogo: Teamwork,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full max-w-xl p-6 mx-auto bg-white border border-gray-100 shadow-sm md:p-8 rounded-2xl">
      <p className="mb-6 text-gray-900 break-words whitespace-pre-wrap font-inter-tight md:text-lg md:mb-8">
        &quot;{testimonial.text}&quot;
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            className="flex-shrink-0 w-10 h-10 rounded-full md:w-12 md:h-12"
          />

          <div className="min-w-0">
            {" "}
            {/* Add min-w-0 to enable text truncation */}
            <h3 className="font-bold text-gray-900 truncate font-inter-tight">
              {testimonial.author.name}
            </h3>
            <p className="text-sm text-gray-500 truncate">
              {testimonial.author.role} of {testimonial.author.company}
            </p>
          </div>
        </div>

        {/* Company logo - hidden on mobile */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            src={testimonial.companyLogo}
            alt={`${testimonial.author.company} logo`}
            className="h-5 opacity-70 md:h-6"
          />
        </div>

        {/* Company name for mobile */}
        <p className="text-base text-gray-400 lowercase truncate md:hidden">
          <img
            src={testimonial.companyLogo}
            alt={`${testimonial.author.company} logo`}
            className="h-7 opacity-70 md:h-6"
          />
        </p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-none snap-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    companyLogo: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialSection;
