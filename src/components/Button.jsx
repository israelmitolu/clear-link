import PropTypes from "prop-types";
const Button = ({ bgColor, textColor, text }) => {
  return (
    <button
      className={`px-[24px] py-[14px] font-semibold text-base rounded-[100px] ${bgColor} ${textColor} `}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
