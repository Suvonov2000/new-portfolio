import Card from "../../generics/Card";
import { useTranslation } from "react-i18next";
import { FaLaptop, FaMobile } from "react-icons/fa";
import { styles } from "../../../utils/tailwind_variables";

const Technology = () => {
  const { t } = useTranslation();
  return (
    <section className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          {t("tech.what_i_do")}
        </p>
      </span>
      <div className={`${styles.flex} justify-around flex-wrap`}>
        <Card
          icon={
            <div
              className={`bg-white w-24 h-24 flex items-center justify-center rounded-[60%_30%_70%_40%_/_60%_40%_30%_70%] animate-[morph_2s_ease-in-out_infinite_both_alternate]`}
            >
              <FaMobile className="text-slate-400" />
            </div>
          }
          title={t("tech.design")}
          desc={t("tech.desc")}
        />
        <Card
          icon={
            <div
              className={`bg-white w-24 h-24 flex items-center justify-center rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-[morph_2s_ease-in-out_infinite_both_alternate]`}
            >
              <FaLaptop className="text-slate-400" />
            </div>
          }
          title={t("tech.dev")}
          desc={t("tech.desc")}
        />
      </div>
    </section>
  );
};

export default Technology;
