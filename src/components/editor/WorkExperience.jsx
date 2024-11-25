import { useContext, useState } from "react";
import { LineDispatcManyContextsWork } from "./LineManyContextsWork.jsx";
import { Label } from "./Label.jsx";
import { EditWork } from "./EditWork.jsx";
import styles from "../editor_styles/Basicinfo.module.css";
import { v4 as uuidv4 } from "uuid";

export const WorkExperience = () => {
  const [titleColor, setTitleColor] = useState("#000");
  const [focusedInput, setFocusedInput] = useState(null); // Добавлено для отслеживания фокуса
  const dispatch = useContext(LineDispatcManyContextsWork);

  const [formValues, setFormValues] = useState({
    Title: "",
    Company: "",
    startingY: "",
    endY: "",
    jobRespons: "",
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
      Title: "",
      Company: "",
      startingY: "",
      endY: "",
      jobRespons: "",
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
        Work Experience
      </h2>
      <EditWork onEdit={startEdit} />
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="Title/Position:"
          name="Title"
          type="text"
          placeholder="University of London"
          value={formValues.Title}
          changeText={handleChange}
          onFocus={() => handleFocus("Title")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "Title" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="Workplace/Company/Organization:"
          name="Company"
          type="text"
          placeholder="Ph.D in Philosophy"
          value={formValues.Company}
          changeText={handleChange}
          onFocus={() => handleFocus("Company")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "Company" ? titleColor : "#94a3b8",
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
          labelName="End Year:"
          name="endY"
          type="month"
          placeholder=""
          value={formValues.endY}
          changeText={handleChange}
          onFocus={() => handleFocus("endY")}
          onBlur={handleBlur}
          min="1900-01"
          labelStyle={{
            borderColor: focusedInput === "endY" ? titleColor : "#94a3b8",
          }}
        />
        <Label
          labelName="List your job responsibilities"
          name="jobRespons"
          type="text"
          placeholder=""
          value={formValues.jobRespons}
          changeText={handleChange}
          onFocus={() => handleFocus("jobRespons")}
          onBlur={handleBlur}
          labelStyle={{
            borderColor: focusedInput === "jobRespons" ? titleColor : "#94a3b8",
          }}
        />
      </fieldset>
      <button type="submit" className={styles.label__btn}>
        Save
      </button>
    </form>
  );
};
