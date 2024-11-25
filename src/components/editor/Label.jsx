import PropTypes from "prop-types";
import styles from "../editor_styles/Label.module.css";

export const Label = ({
  labelName,
  name,
  type,
  value,
  placeholder,
  changeText,
  onFocus,
  onBlur,
  min,
  max,
  isRequired,
  labelStyle,
  inputStyle,
}) => {
  return (
    <label className={styles["form-label"]} style={labelStyle}>
      <span className={styles["form-label__title"]}>{labelName}</span>
      <input
        type={type}
        className={styles["form-input"]}
        name={name}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        onChange={changeText}
        onFocus={onFocus}
        onBlur={onBlur}
        min={min}
        max={max}
        style={inputStyle}
      />
    </label>
  );
};

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isRequired: PropTypes.bool,
  labelStyle: PropTypes.object, // Добавлено для стилей label
  inputStyle: PropTypes.object, // Добавлено для стилей input
};
