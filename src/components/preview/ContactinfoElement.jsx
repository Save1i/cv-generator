import styles from "../preview_styles/ContactinfoElement.module.css";

export const ContactinfoElement = ({ src, alt, height, width, text }) => {
  return (
    <div className={styles.contact__element}>
      <img className={styles.contact__img} src={src} height={height} width={width} alt={alt} />
      <p className={styles.contact__text}>{text}</p>
    </div>
  );
};
