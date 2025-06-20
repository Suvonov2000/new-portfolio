import { styles } from "../../../../utils/tailwind_variables";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  return (
    <ul className={`${styles.flex} w-full gap-2 mt-5`}>
      <li className={`${styles.socials}`}>
        <a href="https://t.me/us_me20" target={"_blank"} rel="noreferrer">
          <FaTelegram color="white" />
        </a>
      </li>
      <li className={`${styles.socials}`}>
        <a
          href="https://www.instagram.com/umido_suvonov"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaInstagram color="white" />
        </a>
      </li>

      <li className={`${styles.socials}`}>
        <a href="https://linkedin.com/" target={"_blank"} rel="noreferrer">
          <FaLinkedinIn color="white" />
        </a>
      </li>

      <li className={`${styles.socials}`}>
        <a
          href="https://twitter.com/Umido_Suvonov"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaTwitter color="white" />
        </a>
      </li>
      <li className={`${styles.socials}`}>
        <a
          href="https://github.com/suvonov2000"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub color="white" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
