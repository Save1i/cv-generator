import { BasicInfoPreview } from "./BasicInfoPreview";
import { ContactinfoPreview } from "./ContactinfoPreview";
import styles from "../preview_styles/Preview.module.css";
import { Educationperiod } from "./Educationperiod";

export const Preview = () => {
  return (
    <div className={styles.preview}>
      <main className={styles.prebiew__inner}>
        <BasicInfoPreview />
        <ContactinfoPreview />
        <Educationperiod />
      </main>
    </div>
  );
};
