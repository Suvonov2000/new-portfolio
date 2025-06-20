import "./style.css";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { education } from "../../../utils/educations";
import { styles } from "../../../utils/tailwind_variables";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className={``}>
      <div
        className={`flex flex-col w-[80%] m-auto overflow-hidden text-left pt-[10%] skills--top-5`}
      >
        <span className="relative flex h-8 mb-20 skills__mainText--bottom">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
            {t("navbar.skills")}
          </p>
        </span>

        <div className="border-x-4 border-orange py-5 relative skills__marqueWrapper--py select-none ">
          <Marquee
            className="pt-2 skills__marque-mt"
            autoFill={true}
            pauseOnHover
            direction="right"
          >
            {education.map(({ icon, name, color, width, url, link }, index) => (
              <div key={index} className="flex relative">
                <hr className="border-0 bg-orange absolute h-[1px] w-full top-[8px] -z-10" />
                {/*//^ Ilgich bo'lishi kerak bu yerda */}
                <div
                  className={`w-40 p-2 rounded-lg mr-5 my-1.5 move skills__card--width `}
                  style={{ background: `${color}` }}
                >
                  <div
                    className={`text-4xl text-white mb-3 m-auto pt-2 ${styles.flex}`}
                  >
                    {icon ? (
                      icon
                    ) : (
                      <img src={url} alt="logo" className="w-[36px] h-[36px]" />
                    )}
                  </div>

                  <a
                    href={link}
                    rel="noreferrer"
                    target={"_blank"}
                    className="mb-2 text-2xl font-semibold tracking-tight text-white text-center"
                    style={{ fontSize: `${width ? width : ""}` }}
                  >
                    <h1 className="skills__text--smaller">{name}</h1>
                  </a>
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee
            className="pt-20 skills__marque-mt"
            autoFill={true}
            pauseOnHover
            direction="left"
          >
            {education.map(({ icon, name, color, width, url, link }, index) => (
              <div key={index} className="flex relative">
                <hr className="border-0 bg-orange absolute h-[1px] w-full top-[8px] -z-10" />
                {/*//^ Ilgich bo'lishi kerak bu yerda */}
                <div
                  className={`w-40 p-2 rounded-lg mr-5 my-1.5 move skills__card--width `}
                  style={{ background: `${color}` }}
                >
                  <div
                    className={`text-4xl text-white mb-3 m-auto pt-2 ${styles.flex}`}
                  >
                    {icon ? (
                      icon
                    ) : (
                      <img src={url} alt="logo" className="w-[36px] h-[36px]" />
                    )}
                  </div>

                  <a
                    href={link}
                    rel="noreferrer"
                    target={"_blank"}
                    className="mb-2 text-2xl font-semibold tracking-tight text-white text-center"
                    style={{ fontSize: `${width ? width : ""}` }}
                  >
                    <h1 className="skills__text--smaller">{name}</h1>
                  </a>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
