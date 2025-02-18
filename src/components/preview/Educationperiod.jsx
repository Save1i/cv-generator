import { useContext } from "react";
import { LineManyContexts } from "../editor/LineManyContexts.jsx";
import styles from "../preview_styles/Educationperiod.module.css";

export const Educationperiod = () => {
  const text = useContext(LineManyContexts);

  if (!text || text.length === 0) {
    return (
      <section className={styles["preview-area__education-period"]}>
        <h1 className={styles.preview__title}>Education Background</h1>
      </section>
    );
  }

  return (
    <section className={styles["preview-area__education-period"]}>
      <h1 className={styles.preview__title}>Education Background</h1>
      {Array.isArray(text) &&
        text.map((entry) => (
          <div className={styles["preview__inner"]} key={entry.id}>
            <div className={styles["preview__main-text"]}>
              <h2 className={styles.preview__university}>{entry.university}</h2>
              <h2 className={styles.preview__program}>{entry.program}</h2>
              {entry.GPA && <p className={styles.preview__gpa}>GPA: {entry.GPA}</p>}
            </div>
            <span className={styles.preview__year}>
              {entry.startingY && entry.graduatingY
                ? `${entry.startingY} to ${entry.graduatingY}`
                : `${entry.startingY}`}
            </span>
          </div>
        ))}
    </section>
  );
};
