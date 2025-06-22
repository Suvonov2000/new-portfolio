import Bio from "./Bio";
import Socials from "./Bio/social";
import img from "../../../assets/images/boku.jpg";
import { styles } from "../../../utils/tailwind_variables";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const onButtonClick = () => {};

  return (
    <section id="about" className="pt-[10%] w-[80%] mx-auto">
      <div>
        <div className={`flex flex-wrap`}>
          <div className={`mr-20 ml-5 mt-10 about__imageWrapper flex-1`}>
            <div className="w-[350px] h-[350px] relative about__image mx-auto">
              <div className="spin-container">
                <div className={`${styles.imageStyles}`}>
                  <div
                    style={{
                      backgroundImage: `url(${img})`,
                    }}
                    className={`bg-cover w-[120%] h-[120%] absolute left-[-15%] top-[-10%] `}
                  ></div>
                </div>
              </div>
            </div>

            <Socials />

            <span className={`${styles.flex} flex-col`}>
              <p className="text-xl my-[10px] font-normal">
                {t("about.frontend_dev")}
              </p>
              <p className="text-3xl font-normal mb-8 font-gagalin about__text--smaller">
                {t("fullName")}
              </p>
            </span>
          </div>

          <div className="about__biography mt-32 flex-1">
            <span className="relative flex h-8 w-8 mb-10">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
              <p className="text-4xl ml-3 mt-2 font-medium font-gagalin">
                {t("about.biography")}
              </p>
            </span>

            <p className="w-[660px] mb-5 text-kulrang_text about__biography--width">
              {t("hero.hello")} {t("hero.myName")}
              <span className="text-orange"> {t("fullName")}</span>
              {t("about.about_job")}
            </p>

            <Bio />

            <div className="flex gap-3 flex-wrap">
              <button
                className={`bg-orange text-white rounded-sm py-2 px-3 active:scale-95 mt-3 hover:opacity-70 max-w-[120px]`}
              >
                <a href="#contact">{t("about.hire")}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
