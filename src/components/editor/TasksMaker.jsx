import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ImBin } from "react-icons/im";
import styles from "../editor_styles/TaskMaker.module.css";
import { IoIosAdd } from "react-icons/io";

export const TaskMaker = ({ tasks = [], onAddTask, onDeleteTask }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false); // Для отображения ошибки

  const handleAdd = () => {
    if (!task.trim()) {
      setError(true); // Устанавливаем ошибку
      return;
    }
    onAddTask({ id: uuidv4(), text: task });
    setTask(""); // Очистка input
    setError(false); // Сбрасываем ошибку
  };

  const handleDelete = (id) => {
    onDeleteTask(id);
  };

  return (
    <div className={styles["task-maker"]}>
      <div className={styles["task-maker__container"]}>
        <input
          type="text"
          className={`${styles["task-maker__input"]} ${error ? styles["error"] : ""}`}
          placeholder="Add task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError(false); // Сбрасываем ошибку при вводе
          }}
        />
        <button type="button" className={styles["add__btn"]} onClick={handleAdd}>
          <IoIosAdd color="#a855f7" size={30} />
        </button>
      </div>
      {error && <p className={styles["error-message"]}>Task cannot be empty</p>}
      <ul className={styles["tasks__container"]}>
        {tasks.map((t) => (
          <li key={t.id} className={styles["task"]}>
            <p className={styles["task__text"]}>{t.text}</p>
            <button className={styles["delete__btn"]} onClick={() => handleDelete(t.id)}>
              <ImBin className={styles["add__icon"]} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
