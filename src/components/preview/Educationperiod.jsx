import { useContext } from "react";
import { LineContext } from "../editor/LineContext.jsx";
import styles from "../preview_styles/Educationperiod.module.css";

export const Educationperiod = () => {
  const text = useContext(LineContext);

  return (
    <section className={styles["preview-area__education-period"]}>
      <h1 className={styles.preview__title}>Education Background</h1>
      <div className={styles["preview__inner"]} key={text.id}>
        <div className={styles["preview__main-text"]}>
          <h2 className={styles.preview__university}>
            {text.university || "University of London"}
          </h2>
          <h2 className={styles.preview__program}>{text.program || "Ph.D in Philosophy"}</h2>
          <p className="{styles.preview__gpa">{text.GPA ? `GPA: ${text.GPA}` : " "}</p>
        </div>
        <span>
          {text.startingY || "2021-09"} {text.graduatingY || "2025-06"}
        </span>
      </div>
    </section>
  );
};
