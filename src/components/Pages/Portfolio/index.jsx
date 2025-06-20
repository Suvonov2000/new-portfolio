import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { FaGithub, FaTv } from "react-icons/fa";
import { projects } from "../../../utils/skills";
import { styles } from "../../../utils/tailwind_variables";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-hidden" id="portfolio">
      <div className="w-[80%] mx-auto mt-20 flex flex-col justify-center">
        <span className="relative flex h-8 mb-20">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
            {t("portfolio.projects")}
          </p>
        </span>

        <Marquee
          autoFill={true}
          pauseOnHover
          direction="right"
          className="drop-shadow-md"
        >
          {projects.map(({ id, src, title, github_link, demo }) => (
            <div
              key={id}
              className={`max-w-[300px] bg-white rounded-lg hover:shadow-2xl border-2 border-[#f0f0f0] ml-7 portfolio__card--smaller`}
            >
              <img
                className="rounded-t-lg w-[300px] h-[195px] portfolio__img"
                src={src}
                alt="portfolio__img"
              />
              <div className="p-5 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight portfolio__text-smaller text-center">
                  {title}
                </h5>
                <div className="flex justify-between">
                  <a
                    rel="noreferrer"
                    href={github_link}
                    target="_blank"
                    className={`${styles.portfolio_btn} mt-1 bg-orange rounded-lg hover:bg-amber-400`}
                  >
                    {t("portfolio.source")}
                    <FaGithub className="w-3.5 h-3.5 ml-2" />
                  </a>
                  <a
                    rel="noreferrer"
                    href={demo}
                    target="_blank"
                    className={`${styles.portfolio_btn} bg-gray-700 rounded-lg hover:bg-gray-500`}
                  >
                    {t("portfolio.demo")}
                    <FaTv className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Portfolio;
