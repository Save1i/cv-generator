import { useContext } from "react";
import { LineContext } from "../editor/LineContext.jsx";
import { ContactinfoElement } from "./ContactinfoElement.jsx";
import styles from "../preview_styles/ContactinfoPreview.module.css";

export const ContactinfoPreview = () => {
  const text = useContext(LineContext);

  return (
    <section className={styles["preview-area__basic-info"]}>
      <ContactinfoElement
        src="/img/mail.png"
        height="16px"
        width="16px"
        alt=""
        text={text.email || "johndoe@site.com"}
      />
      <ContactinfoElement
        src="/img/phone.png"
        height="16px"
        width="16px"
        alt=""
        text={text.phone || "+111 222 3333"}
      />
      <ContactinfoElement
        src="/img/location.png"
        height="16px"
        width="16px"
        alt=""
        text={text.location || "London, UK"}
      />
      <ContactinfoElement
        src="/img/link.png"
        height="16px"
        width="16px"
        alt=""
        text={text.website || "linkedin.sample.com/johndoe"}
      />
    </section>
  );
};
