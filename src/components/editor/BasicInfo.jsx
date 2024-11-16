import { useContext, useState } from "react";
import { LineDispatchContext } from "./LineContext.jsx";
import { Label } from "./Label.jsx";
import { Textarea } from "./Textarea.jsx";
import styles from "../editor_styles/Basicinfo.module.css";

export const BasicInfo = () => {
  const [titleColor, setTitleColor] = useState("#000");
  const dispatch = useContext(LineDispatchContext);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    Ptitle: "",
    Ysummary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFocus = () => {
    setTitleColor("#a855f7");
  };

  const handleBlur = () => {
    setTitleColor("#000");
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch({
      type: "added",
      payload: {
        Fname: formValues.firstName,
        Lname: formValues.lastName,
        Ptitle: formValues.Ptitle,
        Ysummary: formValues.Ysummary,
      },
    });
  };

  return (
    <form className={styles["form__basic-info"]}>
      <h2 className={styles.form__title} style={{ color: titleColor, borderColor: titleColor }}>
        Basic Info
      </h2>
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="First name:"
          name="firstName"
          type="text"
          placeholder="First name"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Label
          labelName="Last name:"
          name="lastName"
          type="text"
          placeholder="Last name"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Label
          labelName="Professional title:"
          name="Ptitle"
          type="text"
          placeholder="Professional title"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Textarea
          labelName="Give a summary about yourself:"
          name="Ysummary"
          type="text"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </fieldset>
      <button className={styles.label__btn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
