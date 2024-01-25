import PropTypes from "prop-types";

const Navlink = ({ text, hasDropdown }) => {
  return (
    <li className="text-[#667085] text-sm xl:text-base font-semibold">
      {hasDropdown ? (
        <a href="#" className="flex items-center gap-[6px]">
          {text} <img src="/icons/chevron-down.svg" alt="" />
        </a>
      ) : (
        <a href="#">{text}</a>
      )}
    </li>
  );
};

Navlink.propTypes = {
  text: PropTypes.string.isRequired,
  hasDropdown: PropTypes.bool,
};

export default Navlink;
