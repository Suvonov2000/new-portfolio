import { PiGameControllerFill } from "react-icons/pi";
import { styles } from "../../../../utils/tailwind_variables";
import { useTranslation } from "react-i18next";
import {
  FaBookReader,
  FaGifts,
  FaMailBulk,
  FaPassport,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Bio = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between flex-wrap about__bio--text-smaller">
      <ul>
        <li className={`${styles.socials__Ul}`}>
          <FaGifts color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.birthday")}:</label>{" "}
            2000.06.27
          </span>
        </li>
        <li className={`${styles.socials__Ul}`}>
          <FaPassport color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.age")}:</label>
            {new Date().getFullYear() - 2000} {t("about.bio.years")}
          </span>
        </li>

        <li className={`${styles.socials__Ul}`}>
          <FaSearchLocation color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.address")}:</label>
            {t("about.bio.fullAddress")}
          </span>
        </li>

        <li className={`${styles.socials__Ul}`}>
          <PiGameControllerFill color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.interests")}:</label>
            {t("about.bio.interests_desc")}
          </span>
        </li>
      </ul>
      <ul className="mr-5">
        <li className={`${styles.socials__Ul}`}>
          <FaBookReader color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.study")}:</label>
            {t("about.bio.study_place")}
          </span>
        </li>
        <li className={`${styles.socials__Ul} flex items-center text-[15px]`}>
          <FaMailBulk color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.mail")}:</label>
            <button className="bg-none border-none">
              <a href="mailto:suvonov200@gmail.com" className="socials__btn">
                suvonov200@gmail.com
              </a>
            </button>
          </span>
        </li>
        <li className={`${styles.socials__Ul}`}>
          <FaPhoneAlt color="orange" className="mr-3" />
          <span>
            <label className="mr-3">{t("about.bio.phone")}:</label>
            <button className="bg-none border-none">
              <a href="tel:090-8414-4445" className="socials__btn">
                090-8414-4445
              </a>
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Bio;
