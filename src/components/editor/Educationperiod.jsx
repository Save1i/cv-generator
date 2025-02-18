import { useContext, useState } from "react";
import { LineDispatcManyContexts } from "./LineManyContexts.jsx";
import { Label } from "./Label.jsx";
import { EditEducation } from "../preview/EditEducation.jsx";
import styles from "../editor_styles/Basicinfo.module.css";
import { v4 as uuidv4 } from "uuid";

export const Educationperiod = () => {
  const [titleColor, setTitleColor] = useState("#000");
  const [focusedInput, setFocusedInput] = useState(null); // Добавлено для отслеживания фокуса
  const dispatch = useContext(LineDispatcManyContexts);

  const [formValues, setFormValues] = useState({
    university: "",
    program: "",
    startingY: "",
    graduatingY: "",
    GPA: "",
  });

  const [editingId, setEditingId] = useState(null);

  const startEdit = (id, entry) => {
    setEditingId(id);
    setFormValues({ ...entry });
  };

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

  const handleSave = () => {
    if (editingId) {
      dispatch({
        type: "edit",
        id: editingId,
        payload: { ...formValues },
      });
      setEditingId(null);
    } else {
      dispatch({
        type: "added",
        id: uuidv4(),
        payload: { ...formValues },
      });
    }

    setFormValues({
      university: "",
      program: "",
      startingY: "",
      graduatingY: "",
      GPA: "",
    });
  };

  return (
    <form
      className={styles["form__basic-info"]}
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <h2 className={styles.form__title} style={{ color: titleColor, borderColor: titleColor }}>
        Education Background
      </h2>
      <EditEducation onEdit={startEdit} />
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="University/Institution/Organization:"
          name="university"
          type="text"
          placeholder="University of London"
          value={formValues.university}
          changeText={handleChange}
          onFocus={() => handleFocus("university")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "university" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Program/Degree/Course:"
          name="program"
          type="text"
          placeholder="Ph.D in Philosophy"
          value={formValues.program}
          changeText={handleChange}
          onFocus={() => handleFocus("program")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "program" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Starting Year:"
          name="startingY"
          type="month"
          placeholder=""
          isRequired={true}
          value={formValues.startingY}
          changeText={handleChange}
          onFocus={() => handleFocus("startingY")}
          onBlur={handleBlur}
          min="1900-01"
          labelStyle={{
            borderColor: focusedInput === "startingY" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Graduating Year:"
          name="graduatingY"
          type="month"
          placeholder=""
          value={formValues.graduatingY}
          changeText={handleChange}
          onFocus={() => handleFocus("graduatingY")}
          onBlur={handleBlur}
          min="1900-01"
          labelStyle={{
            borderColor: focusedInput === "graduatingY" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="GPA (optional):"
          name="GPA"
          type="number"
          placeholder="9,2"
          value={formValues.GPA}
          changeText={handleChange}
          onFocus={() => handleFocus("GPA")}
          onBlur={handleBlur}
          max="10"
          min="1"
          labelStyle={{
            borderColor: focusedInput === "GPA" ? titleColor : "#94a3b8",
          }}
        />
      </fieldset>
      <button type="submit" className={styles.label__btn}>
        Save
      </button>
    </form>
  );
};
