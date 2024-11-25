import { useContext } from "react";
import { LineManyContexts } from "../editor/LineManyContexts.jsx";
import { LineDispatcManyContexts } from "../editor/LineManyContexts.jsx";
import styles from "../editor_styles/EditEducation.module.css";
import { MdEdit } from "react-icons/md";
import { ImBin } from "react-icons/im";

export const EditEducation = ({ onEdit }) => {
  const text = useContext(LineManyContexts);
  const dispatch = useContext(LineDispatcManyContexts);

  const handDelete = (id) => (e) => {
    e.preventDefault();
    dispatch({
      type: "delete",
      id,
    });
  };

  return (
    <>
      {Array.isArray(text) &&
        text.map((entry) => (
          <div className={styles["edit-education"]} key={entry.id}>
            <p className={styles["edit-education__title"]}>{entry.university}</p>
            <div className={styles["edit-education__button-container"]}>
              <button
                className={styles["edit-education__button-edit"]}
                onClick={(e) => {
                  e.preventDefault();
                  onEdit(entry.id, entry);
                }}
              >
                <MdEdit className={styles.edit__icon} />
              </button>
              <button
                className={styles["edit-education__button-delete"]}
                onClick={handDelete(entry.id)}
              >
                <ImBin className={styles.delete__icon} />
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
