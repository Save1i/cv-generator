import styles from "../editor_styles/CvHeader.module.css";

export const CvHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>cv generator</h1>
      <p className={styles["header-description"]}>
        Create your CV by filling out the forms below! Your CV will be dynamically updated in the
        preview.
      </p>
      <a href="https://github.com/Save1i" className={styles["header-github"]}>
        Check out the Github repo for this project here
      </a>
    </header>
  );
};
