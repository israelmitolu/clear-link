import PropTypes from "prop-types";

const CheckItem = ({ text }) => {
  return (
    <div className="flex items-center gap-1">
      <img src="/icons/Check icon.svg" alt="checkmark" className="h-7 w-7" />
      <span>{text}</span>
    </div>
  );
};

CheckItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CheckItem;
