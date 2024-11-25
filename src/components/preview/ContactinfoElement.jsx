import styles from "../preview_styles/ContactinfoElement.module.css";

export const ContactinfoElement = ({ icon, height, width, text }) => {
  return (
    <div className={styles.contact__element}>
      {icon}
      <p className={styles.contact__text}>{text}</p>
    </div>
  );
};
