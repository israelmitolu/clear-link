import PropTypes from "prop-types";
const Button = ({ className, bgColor, textColor, text }) => {
  return (
    <button
      className={`${className} px-4 md:px-[24px] py-1 md:py-[14px] h-[52px] font-semibold text-sm xl:text-base rounded-[100px] ${bgColor} ${textColor} `}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
