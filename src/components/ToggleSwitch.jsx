import PropTypes from "prop-types";

const ToggleSwitch = ({ isOn = false, onToggle = () => {} }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative h-[22px] w-[34px] pl-0.5 pr-0.5 py-0.5 rounded-[36.67px] flex items-center transition-all
        ${isOn ? "bg-[#ffffff] justify-end" : "bg-[#161616] justify-start"}`}
    >
      <div className="w-[18px] h-[18px] bg-[#333333] rounded-full transition-transform duration-200" />
    </button>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default ToggleSwitch;
