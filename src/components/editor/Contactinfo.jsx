import { useContext, useState } from "react";
import { LineDispatchContext } from "./LineContext.jsx";
import { Label } from "./Label.jsx";
import styles from "../editor_styles/Basicinfo.module.css";

export const Contactinfo = () => {
  const dispatch = useContext(LineDispatchContext);
  const [titleColor, setTitleColor] = useState("#000");
  const [focusedInput, setFocusedInput] = useState(null); // Добавлено для отслеживания фокуса
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    location: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
        email: formValues.email,
        phone: formValues.phone,
        location: formValues.location,
        website: formValues.website,
      },
    });
  };

  return (
    <form className={styles["form__basic-info"]}>
      <h2 className={styles.form__title} style={{ color: titleColor, borderColor: titleColor }}>
        Contact Info
      </h2>
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="Email:"
          name="email"
          type="email"
          placeholder="richard@gmail.com"
          changeText={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "email" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Phone number:"
          name="phone"
          type="tel"
          placeholder="+**********"
          changeText={handleChange}
          onFocus={() => handleFocus("phone")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "phone" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Location:"
          name="location"
          type="text"
          placeholder="London"
          changeText={handleChange}
          onFocus={() => handleFocus("location")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "location" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Website:"
          name="website"
          type="url"
          placeholder=""
          changeText={handleChange}
          onFocus={() => handleFocus("university")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "university" ? titleColor : "#94a3b8",
          }}
        />
      </fieldset>
      <button className={styles.label__btn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
