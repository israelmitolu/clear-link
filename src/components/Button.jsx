import { ReactPropTypes } from "react";

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
  bgColor: ReactPropTypes.string,
  textColor: ReactPropTypes.string,
  text: ReactPropTypes.string,
};

export default Button;
