import { useContext } from "react";
import { LineManyContextsSkills } from "../editor/LineManyContextsSkills.jsx";
import styles from "../preview_styles/TechnicalSkillsPreview.module.css";

export const TechnicalSkills = () => {
  const { state: skills } = useContext(LineManyContextsSkills); // Получаем state из контекста

  // Если `skills` не массив, вернем пустой блок
  if (!Array.isArray(skills)) {
    return (
      <section className={styles["preview-area__education-period"]}>
        <h1 className={styles.preview__title}>Technical Skills</h1>
        <p className={styles["preview__empty"]}>No skills available.</p>
      </section>
    );
  }

  console.log(skills);

  return (
    <section className={styles["preview-area__education-period"]}>
      <h1 className={styles.preview__title}>Technical Skills</h1>
      {skills.map((entry) => (
        <div className={styles["preview__inner"]} key={entry.id}>
          <h2 className={styles["preview__category"]}>{entry.Category}</h2>
          <ul className={styles["preview__tasks"]}>
            {entry.tasks.map((t) => (
              <li key={t.id} className={styles["preview__task"]}>
                <p className={styles["task__text"]}>{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
