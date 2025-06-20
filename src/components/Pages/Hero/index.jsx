import ReactTyped from "react-typed";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/xudam.jpg";
import { styles } from "../../../utils/tailwind_variables";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className={`w-4/5 mx-auto`}>
      <div className={`p-10 overflow-x-hidden ${styles.flex}`}>
        <div className="mt-10 flex-1">
          <h1 className="text-xl text-kulrang_text">{t("hero.hello")}</h1>
          <h1 className="text-6xl my-5 font-gagalin hero__mainText--font-smaller">
            {t("suvonov")} <span className="text-orange"> {t("umidjon")}</span>
          </h1>
          <div className="h-[40px] text-3xl text-orange font-medium">
            <ReactTyped
              loop
              backSpeed={30}
              typeSpeed={100}
              showCursor={true}
              strings={[t("hero.developer")]}
            />
          </div>
          <p className="text-kulrang_text pt-5">{t("hero.job_desc")}</p>
        </div>
        <div className="hero__img--display-none flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-[350px] rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
