import { BasicInfoPreview } from "./BasicInfoPreview";
import { ContactinfoPreview } from "./ContactinfoPreview";
import styles from "../preview_styles/Preview.module.css";
import { Educationperiod } from "./Educationperiod";
import { WorkExperiencePreview } from "./WorkExperiencePreview";
import { TechnicalSkills } from "./TechnicalSkills.jsx";

export const Preview = () => {
  return (
    <div className={styles.preview}>
      <main className={styles.prebiew__inner}>
        <BasicInfoPreview />
        <ContactinfoPreview />
        <Educationperiod />
        <TechnicalSkills />
        <WorkExperiencePreview />
      </main>
    </div>
  );
};
