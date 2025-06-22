import { useTranslation } from "react-i18next";
import table from "../assets/images/projects_img/table.png";
import table_by_redux from "../assets/images/projects_img/table.png";
import digital_clock from "../assets/images/projects_img/digital_clock.png";
import simple_portfolio from "../assets/images/projects_img/simple_portfolio.png";
import greenshop from "../assets/images/projects_img/greenshop.png";
import table_by_context_api from "../assets/images/projects_img/table.png";
import table_by_reducer from "../assets/images/projects_img/table.png";
import new_portfolio from "../assets/images/projects_img/new_portfolio.png";
import countdown from "../assets/images/projects_img/countdown.png";

export function useEducation() {
  const { t } = useTranslation();
  const teaching = () => [
    {
      id: 0,
      year: t("experiences.intern_time"),
      major: t("edu.frontend_dev"),
      center: "AEMA Team",
    },
    {
      id: 1,
      year: t("edu.wba"),
      major: t("edu.frontend_dev"),
      center: "Webbrain Academy",
    },

    {
      id: 2,
      year: t("edu.school"),
      major: t("edu.secondary"),
      center: t("edu.school_place"),
    },
  ];
  return { teaching };
}

export const projects = [
  {
    id: 0,
    src: countdown,
    title: "Countdown Till",
    github_link: "https://github.com/Suvonov2000/2026_countdowntill",
    demo: "https://usem-countdown.vercel.app//",
  },
  {
    id: 1,
    src: table_by_redux,
    title: "Table by Redux",
    github_link: "https://github.com/Suvonov2000/Table_by_Redux",
    demo: "https://table-by-redux.vercel.app/",
  },
  {
    id: 2,
    src: table_by_reducer,
    title: "Table by Reducer",
    github_link: "https://github.com/Suvonov2000/Table_by_useReducer",
    demo: "https://table-by-use-reducer.vercel.app/",
  },
  {
    id: 3,
    src: table,
    title: "Table by State",
    github_link: "https://github.com/Suvonov2000/Table",
    demo: "https://table-eight-lime.vercel.app/",
  },
  {
    id: 4,
    src: table_by_context_api,
    title: "Table by useContext",
    github_link: "https://github.com/Suvonov2000/Table_by_useContext_uR",
    demo: "https://table-by-use-context.vercel.app/",
  },
  {
    id: 5,
    src: simple_portfolio,
    title: "Simple Portfolio",
    github_link: "https://github.com/Suvonov2000/Simple-portfolio",
    demo: "https://firsthtmlcssportfolio.vercel.app/",
  },

  {
    id: 9,
    src: digital_clock,
    title: "Digital Clock.",
    github_link: "https://github.com/Suvonov2000/Digital-clock",
    demo: "https://digital-clock-sage-phi.vercel.app/",
  },

  {
    id: 10,
    src: new_portfolio,
    title: "Portfolio.",
    github_link: "https://github.com/Suvonov2000/new-portfolio",
    demo: "https://usme.com.uz/",
  },

  {
    id: 11,
    src: greenshop,
    title: "Green Shop.",
    github_link: "https://github.com/Suvonov2000/full-greenshop",
    demo: "https://greenshop.usme.com.uz/",
  },
];

export const skills = [
  {
    id: 0,
    degree: "92%",
    skill: "HTML",
  },
  {
    id: 1,
    degree: "90%",
    skill: "CSS",
  },
  {
    id: 2,
    degree: "80%",
    skill: "JavaScript",
  },

  {
    id: 3,
    degree: "72%",
    skill: "React JS",
  },
];
