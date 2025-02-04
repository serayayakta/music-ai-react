import PropTypes from "prop-types";

const RadioButton = ({ value, selectedValue, onChange }) => {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name="radio"
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div className="w-5 h-5 flex items-center justify-center">
        <img
          src={selectedValue === value ? "tick-circle.svg" : "empty-circle.svg"}
          alt={selectedValue === value ? "Selected" : "Unselected"}
          className="w-5 h-5"
        />
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
