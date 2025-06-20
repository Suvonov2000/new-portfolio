import { useState } from "react";
import { BsMenuButton } from "react-icons/bs";
import { useNavbar } from "../../utils/socials";
import logo from "../../assets/images/xudam.jpg";
import { styles } from "../../utils/tailwind_variables";

const Navbar = () => {
  const { nav_icons } = useNavbar();
  const [openLinks, setOpenLinks] = useState();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const HiddenLinks = () => {
    return (
      <ul
        className={` h-[60px] gap-2 md:gap-7 ${styles.flex} ${
          openLinks !== true ? "hidden" : "visible"
        }`}
      >
        {nav_icons().map(
          ({ href, text }, index) =>
            index > 0 && (
              <ul key={index}>
                <li>
                  <a
                    href={href}
                    className={`${styles.nav_icons_media} md:text-3xl `}
                  >
                    {text}
                  </a>
                </li>
              </ul>
            )
        )}
      </ul>
    );
  };

  return (
    <nav
      className={`shadow-md h-20 sticky bg-white top-0 z-50 nav__wrapper hidden`}
    >
      <div
        className={`max-w-screen-x my-0 mx-auto px-20 ${styles.flex} justify-between navbar__innerWrapper--px`}
      >
        <div className={`flex items-center justify-between ${openLinks}`}>
          <a
            href="#home"
            className={`${openLinks === true ? "hidden" : "visible"}`}
          >
            <img
              src={logo}
              alt="nav__logo"
              className="w-20 h-[75px] my-auto rounded-full navbar__logo"
            />
          </a>

          <HiddenLinks />
        </div>

        <div className="flex gap-8 text-sm items-center nav__items__wrapper">
          <button
            className="navbar__hamburger cursor-pointer active:scale-95 hidden"
            onClick={toggleNavbar}
          >
            {<BsMenuButton className="w-8 h-8" color="orange" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
