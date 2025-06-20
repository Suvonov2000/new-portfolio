import { styles } from "../../utils/tailwind_variables";
import { useNavbar } from "../../utils/socials";

const Sidebar = () => {
  const { nav_icons } = useNavbar();
  return (
    <aside
      aria-label="Sidebar"
      className="aside fixed w-24 h-full top-0 left-0 z-[999] bg-white select-none"
    >
      <div
        className={`bg-[orange] text-white text-5xl h-20 ${styles.flex} border-r-[1px] border-orange font-semibold`}
      >
        U
      </div>

      <div className="wrapper border-[1px] border-[#e9e9ea] pb-44 pt-20 h-screen">
        {nav_icons().map(({ icon, href }, index) => (
          <a
            key={index}
            href={href}
            className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon h-10 w-full`}
          >
            <div className={`${styles.sidebar_icons}`}>{icon}</div>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
