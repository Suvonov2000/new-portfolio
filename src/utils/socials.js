import { useTranslation } from "react-i18next";
import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { AiFillHome, AiOutlineFileDone, AiOutlineUser } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export const social = [
  {
    href: "github.com/suvonov2000",
    icon: <FaGithub />,
  },
  {
    href: "t.me/us_me20",
    icon: <FaTelegram />,
  },
  {
    href: "instagram.com/umido_suvonov",
    icon: <FaInstagram />,
  },
  {
    href: "twitter.com/Umido_Suvonov",
    icon: <FaTwitter />,
  },
  {
    href:"linkedin.com/",
    icon: <FaLinkedin />,
  },
];

export const useNavbar = () => {
  const { t } = useTranslation();
  const nav_icons = () => [
    {
      href: "#home",
      icon: <AiFillHome />,
      text: t("navbar.home"),
    },
    {
      href: "#about",
      icon: <AiOutlineUser />,
      text: t("navbar.about"),
    },
    {
      href: "#skills",
      icon: <AiOutlineFileDone />,
      text: t("navbar.skills"),
    },
    {
      href: "#portfolio",
      icon: <BsPersonWorkspace />,
      text: t("navbar.portfolio"),
    },

    {
      href: "#contact",
      icon: <BsTelephoneOutbound />,
      text: t("navbar.contact"),
    },
  ];
  return { nav_icons };
};
