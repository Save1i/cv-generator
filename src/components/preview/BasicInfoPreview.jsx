import { useContext } from "react";
import { LineContext } from "../editor/LineContext.jsx";
import styles from "../preview_styles/BasicInfoPreview.module.css";

export const BasicInfoPreview = () => {
  const text = useContext(LineContext);

  return (
    <section className={styles["preview-area__basic-info"]}>
      <h1 className={styles.header}>
        {text.Fname || "Richard"} {text.Lname || "Ellef Ayoade"}
      </h1>
      <h2 className={styles.professional__title}>{text.Ptitle || "Producer"}</h2>
      <p className={styles["self-summary"]}>
        {text.Ysummary ||
          "Richard Ellef Ayoade was born in Hammersmith, and grew up in Suffolk, in England, the son of a Norwegian mother, Dagny Amalie (Bosvik), and a Nigerian father, Layide Ade Laditi Ayoade. He studied Law at Cambridge university, and followed in the footsteps of British Comedy legends like Monty Python's Eric Idle, Hugh Laurie and Graeme Garden when he became the president of the Cambridge Footlights club."}
      </p>
    </section>
  );
};
