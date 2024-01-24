import Proptypes from "prop-types";
const FeatureCard = ({ icon, heading, description }) => {
  return (
    <div className="flex flex-col gap-[20px] h-[200px] max-w-[360px] w-full">
      <img src={icon} alt="icon" className="w-[56px] h-[56px]" />
      <div>
        <h4 className="mb-2 text-[#101828] font-semibold text-xl">{heading}</h4>
        <p className="text-[#475467] text-lg">{description}</p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: Proptypes.string.isRequired,
  heading: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default FeatureCard;
