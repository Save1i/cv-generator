import styles from "../editor_styles/Textarea.module.css";

export const Textarea = ({ labelName, name, type, changeText, onFocus, onBlur }) => {
  return (
    <label className={styles["form-label"]}>
      <span className={styles["form-label__title"]}>{labelName}</span>
      <textarea
        className={styles["form-input"]}
        name={name}
        type={type}
        rows={10}
        onChange={changeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  );
};
