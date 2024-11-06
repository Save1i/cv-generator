export const Lable = ({ lableName, name, type, placeholder, changeText }) => {
  return (
    <label className="form-label">
      <span className="form-label__title">{lableName}</span>
      <input
        type={type}
        className="form-input"
        name={name}
        placeholder={placeholder}
        onChange={changeText}
      />
    </label>
  );
};
