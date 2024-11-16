import { CvHeader } from "./CvHeader.jsx";
import { BasicInfo } from "./BasicInfo.jsx";
import styles from "../editor_styles/CvEditor.module.css";
import { Contactinfo } from "./Contactinfo.jsx";
import { Educationperiod } from "./Educationperiod.jsx";

export const CvEditor = () => {
  return (
    <div className={styles.editor}>
      <CvHeader />
      <BasicInfo />
      <Contactinfo />
      <Educationperiod />
    </div>
  );
};
