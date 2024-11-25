import { useContext } from "react";
import { LineContext } from "../editor/LineContext.jsx";
import { ContactinfoElement } from "./ContactinfoElement.jsx";
import styles from "../preview_styles/ContactinfoPreview.module.css";
import { GoMail } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";

export const ContactinfoPreview = () => {
  const text = useContext(LineContext);

  return (
    <section className={styles["preview-area__basic-info"]}>
      <ContactinfoElement icon={<GoMail />} text={text.email || "johndoe@site.com"} />
      <ContactinfoElement icon={<BsFillTelephoneFill />} text={text.phone || "+111 222 3333"} />
      <ContactinfoElement icon={<FaLocationDot />} text={text.location || "London, UK"} />
      <ContactinfoElement icon={<IoLink />} text={text.website || "linkedin.sample.com/johndoe"} />
    </section>
  );
};
