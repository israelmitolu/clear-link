import PropTypes from "prop-types";

const FAQItem = ({ isOpen, title, description }) => {
  return (
    <details
      className={`group [&_summary::-webkit-details-marker]:hidden  p-8 ${
        isOpen
          ? "rounded-2xl bg-[#F9FAFB] border border-[#EAECF0]"
          : "rounded-none bg-none border-none"
      } `}
      open={isOpen}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-semibold text-[#101828]">{title}</h2>

        <span className="relative h-5 w-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 text-base leading-relaxed text-[#475467]">
        {description}
      </p>
    </details>
  );
};

FAQItem.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FAQItem;
