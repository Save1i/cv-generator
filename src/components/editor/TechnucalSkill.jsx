import { useContext, useState } from "react";
import { LineManyContextsSkills } from "./LineManyContextsSkills.jsx";
import { Label } from "./Label.jsx";
import { EditSkills } from "./EditSkills.jsx";
import styles from "../editor_styles/TechnicalSkills.module.css";
import { v4 as uuidv4 } from "uuid";
import { TaskMaker } from "./TasksMaker.jsx";

export const TechnicalSkills = () => {
  const { dispatch } = useContext(LineManyContextsSkills);
  const [formValues, setFormValues] = useState({ Category: "", tasks: [] });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState({ category: false, task: false }); // Отдельные ошибки
  const [titleColor, setTitleColor] = useState("#000");
  const [focusedInput, setFocusedInput] = useState(null); // Добавлено для отслеживания фокуса

  const startEdit = (id, entry) => {
    setEditingId(id);
    setFormValues({ ...entry });
  };

  const handleFocus = (inputName) => {
    setTitleColor("#a855f7");
    setFocusedInput(inputName); // Устанавливаем имя фокусированного input
  };

  const handleBlur = () => {
    setTitleColor("#000");
    setFocusedInput(null); // Сбрасываем фокус
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (name === "Category" && value.trim()) {
      setError((prevError) => ({ ...prevError, category: false }));
    }
  };

  const handleDeleteTask = (id) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      tasks: prevValues.tasks.filter((t) => t.id !== id),
    }));
  };

  const handleAddTask = (task) => {
    if (!task.text.trim()) {
      setError((prevError) => ({ ...prevError, task: true }));
      return;
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      tasks: [...prevValues.tasks, task],
    }));
    setError((prevError) => ({ ...prevError, task: false }));
  };

  const handleSave = () => {
    if (!formValues.Category.trim()) {
      setError((prevError) => ({ ...prevError, category: true }));
      return;
    }
    if (editingId) {
      dispatch({ type: "edit", id: editingId, payload: formValues });
      setEditingId(null);
    } else {
      dispatch({ type: "added", id: uuidv4(), payload: formValues });
    }
    setFormValues({ Category: "", tasks: [] });
    setError({ category: false, task: false });
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
        Technical Skills
      </h2>
      <EditSkills onEdit={startEdit} />
      <fieldset className={styles.form__fieldset}>
        <Label
          labelName="Add a skill category"
          name="Category"
          type="text"
          value={formValues.Category}
          onFocus={() => handleFocus("university")}
          onBlur={handleBlur}
          changeText={handleChange}
          className={`${error.category ? styles["error"] : ""}`}
          labelStyle={{
            borderColor: focusedInput === "university" ? titleColor : "#94a3b8",
          }}
        />
        {error.category && <p className={styles["error-message"]}>Category is required</p>}
        <TaskMaker
          tasks={formValues.tasks}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
        {error.task && <p className={styles["error-message"]}>Task cannot be empty</p>}
      </fieldset>
      <button type="submit" className={styles.label__btn}>
        Save
      </button>
    </form>
  );
};
