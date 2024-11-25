import { useContext } from "react";
import { LineManyContextsWork } from "../editor/LineManyContextsWork.jsx";
import styles from "../preview_styles/Educationperiod.module.css";

export const WorkExperiencePreview = () => {
  const text = useContext(LineManyContextsWork);

  if (!text || text.length === 0) {
    return (
      <section className={styles["preview-area__education-period"]}>
        <h1 className={styles.preview__title}>Work Experience</h1>
      </section>
    );
  }

  return (
    <section className={styles["preview-area__education-period"]}>
      <h1 className={styles.preview__title}>Work Experience</h1>
      {Array.isArray(text) &&
        text.map((entry) => (
          <div className={styles["preview__inner"]} key={entry.id}>
            <div className={styles["preview__main-text"]}>
              <h2 className={styles.preview__university}>{entry.Title}</h2>
              <h2 className={styles.preview__program}>{entry.Company}</h2>
              {entry.jobRespons && <p className={styles.preview__gpa}>{entry.jobRespons}</p>}
            </div>
            <span className={styles.preview__year}>
              {entry.startingY && entry.endY
                ? `${entry.startingY} to ${entry.endY}`
                : `${entry.startingY}`}
            </span>
          </div>
        ))}
    </section>
  );
};
