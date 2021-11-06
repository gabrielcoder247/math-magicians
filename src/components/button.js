import PropTypes from "prop-types";
import calculate from "../logic/calculate";

const Button = (props) => {
  const { obj, func, value, className, id } = props;
  return (
    <button
      type="button"
      onClick={(e) => func(calculate(obj, e.target.value))}
      value={value}
      className={className}
      id={id}
    >
      {" "}
      {value}{" "}
    </button>
  );
};

Button.defaultProps = {
  obj: null,
  func: null,
  value: null,
  className: null,
  id: null,
};

Button.propTypes = {
  obj: PropTypes.objectOf,
  func: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Button;
