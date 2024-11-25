import { useContext, useState } from "react";
import { LineDispatchContext } from "./LineContext.jsx";
import { Label } from "./Label.jsx";
import { Textarea } from "./Textarea.jsx";
import styles from "../editor_styles/Basicinfo.module.css";

export const BasicInfo = () => {
  const [titleColor, setTitleColor] = useState("#000");
  const dispatch = useContext(LineDispatchContext);
  const [focusedInput, setFocusedInput] = useState(null); // Добавлено для отслеживания фокуса
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

  const handleFocus = (inputName) => {
    setTitleColor("#a855f7");
    setFocusedInput(inputName); // Устанавливаем имя фокусированного input
  };

  const handleBlur = () => {
    setTitleColor("#000");
    setFocusedInput(null); // Сбрасываем фокус
  };

  const handleSave = (e) => {
    e.preventDefault();

    dispatch({
      type: "updated",
      payload: {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
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
          onFocus={() => handleFocus("firstName")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "firstName" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Last name:"
          name="lastName"
          type="text"
          placeholder="Last name"
          changeText={handleChange}
          onFocus={() => handleFocus("lastName")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "lastName" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Professional title:"
          name="Ptitle"
          type="text"
          placeholder="Professional title"
          changeText={handleChange}
          onFocus={() => handleFocus("Ptitle")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "Ptitle" ? titleColor : "#94a3b8",
          }}
        />
        <Textarea
          labelName="Give a summary about yourself:"
          name="Ysummary"
          type="text"
          placeholder="Write a brief summary about yourself..."
          changeText={handleChange}
          onFocus={() => handleFocus("Ysummary")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "Ysummary" ? titleColor : "#94a3b8",
          }}
        />
      </fieldset>
      <button className={styles.label__btn} onClick={handleSave}>
        save
      </button>
    </form>
  );
};
