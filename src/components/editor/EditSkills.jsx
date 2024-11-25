import { useContext } from "react";
import { LineManyContextsSkills } from "../editor/LineManyContextsSkills.jsx";
import styles from "../editor_styles/EditEducation.module.css";
import { MdEdit } from "react-icons/md";
import { ImBin } from "react-icons/im";

export const EditSkills = ({ onEdit }) => {
  const { state, dispatch } = useContext(LineManyContextsSkills);

  const handDelete = (id) => (e) => {
    e.preventDefault();
    dispatch({
      type: "delete",
      id,
    });
  };

  return (
    <>
      {Array.isArray(state) &&
        state.map((entry) => (
          <div className={styles["edit-education"]} key={entry.id}>
            <p className={styles["edit-education__title"]}>{entry.Category}</p>
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
