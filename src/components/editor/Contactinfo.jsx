import { useContext, useState } from "react";
import { LineDispatchContext } from "./LineContext.jsx";
import { Label } from "./Label.jsx";
import styles from "../editor_styles/Basicinfo.module.css";

export const Contactinfo = () => {
  const dispatch = useContext(LineDispatchContext);
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

  const handleSave = (e) => {
    e.preventDefault();
    dispatch({
      type: "added",
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
      <h2 className={styles.form__title}>Contact Info</h2>
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="Email:"
          name="email"
          type="email"
          placeholder="richard@gmail.com"
          changeText={handleChange}
        />
        <Label
          labelName="Phone number:"
          name="phone"
          type="tel"
          placeholder="+**********"
          changeText={handleChange}
        />
        <Label
          labelName="Location:"
          name="location"
          type="text"
          placeholder="London"
          changeText={handleChange}
        />
        <Label
          labelName="Website:"
          name="website"
          type="url"
          placeholder=""
          changeText={handleChange}
        />
      </fieldset>
      <button className={styles.label__btn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
