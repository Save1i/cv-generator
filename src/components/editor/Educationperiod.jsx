import { useContext, useState } from "react";
import { LineDispatchContext } from "./LineContext.jsx";
import { Label } from "./Label.jsx";
import styles from "../editor_styles/Basicinfo.module.css";

export const Educationperiod = () => {
  const [titleColor, setTitleColor] = useState("#000");
  const dispatch = useContext(LineDispatchContext);
  const [formValues, setFormValues] = useState({
    university: "",
    program: "",
    startingY: "",
    graduatingY: "",
    GPA: "",
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
      id: nextId++,
      payload: {
        university: formValues.university,
        program: formValues.program,
        startingY: formValues.startingY,
        graduatingY: formValues.graduatingY,
        GPA: formValues.GPA,
      },
    });
  };

  let nextId = 0;

  return (
    <form className={styles["form__basic-info"]}>
      <h2 className={styles.form__title} style={{ color: titleColor, borderColor: titleColor }}>
        Education Background
      </h2>
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="University/Institution/Organization:"
          name="university"
          type="text"
          placeholder="University of London"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Label
          labelName="Program/Degree/Course:"
          name="program"
          type="text"
          placeholder="Ph.D in Philosophy"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Label
          labelName="Starting Year:"
          name="startingY"
          type="month"
          placeholder=""
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          min="1900-01"
        />
        <Label
          labelName="Graduating Year:"
          name="graduatingY"
          type="month"
          placeholder=""
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          min="1900-01"
        />
        <Label
          labelName="GPA (optional):"
          name="GPA"
          type="number"
          placeholder="9,2"
          changeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          max="10"
        />
      </fieldset>
      <button className={styles.label__btn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
