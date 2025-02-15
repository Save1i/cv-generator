import { BasicInfoPreview } from "./BasicInfoPreview";
import { ContactinfoPreview } from "./ContactinfoPreview";
import styles from "../preview_styles/Preview.module.css";
import { Educationperiod } from "./Educationperiod";
import { WorkExperiencePreview } from "./WorkExperiencePreview";
import { TechnicalSkills } from "./TechnicalSkills.jsx";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { PiPrinterFill } from "react-icons/pi";

export const Preview = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className={styles.preview}>
      <main ref={contentRef} className={styles.prebiew__inner}>
        <BasicInfoPreview />
        <ContactinfoPreview />
        <Educationperiod />
        <TechnicalSkills />
        <WorkExperiencePreview />
      </main>
      <button className={styles.print} onClick={handlePrint}>
        <PiPrinterFill className={styles.print__logo} />
      </button>
    </div>
  );
};
