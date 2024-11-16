import PropTypes from "prop-types";
import styles from "../editor_styles/Label.module.css";

export const Label = ({
  labelName,
  name,
  type,
  placeholder,
  changeText,
  onFocus,
  onBlur,
  min,
  max,
}) => {
  return (
    <label className={styles["form-label"]}>
      <span className={styles["form-label__title"]}>{labelName}</span>
      <input
        type={type}
        className={styles["form-input"]}
        name={name}
        placeholder={placeholder}
        onChange={changeText}
        onFocus={onFocus}
        onBlur={onBlur}
        min={min}
        max={max}
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
  onFocus: PropTypes.func, // Указываем тип
  onBlur: PropTypes.func, // Указываем тип
};
