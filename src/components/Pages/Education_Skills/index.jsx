import { useEducation } from "../../../utils/skills.js";
import { useTranslation } from "react-i18next";
const Education_Skills = () => {
  const { t } = useTranslation();
  const { teaching } = useEducation();
  return (
    <section className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-20">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          {t("edu.title")}
        </p>
      </span>
      <div className="flex justify-between flex-wrap">
        <div className="bg-orange w-full p-8 skills_card rounded-lg">
          {teaching().map(({ id, year, major, center }) => (
            <div key={id} className={`flex flex-col gap-2`}>
              <h2 className="text-white text-[15px] font-medium">{year}</h2>
              <h1 className="font-semibold text-[17px] my-1 text-slate-200">
                {center}
              </h1>
              <h2 className="text-white text-[15px] font-medium">{major}</h2>
              <div className="border-slate-200 rounded-full border-[1px] my-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education_Skills;
