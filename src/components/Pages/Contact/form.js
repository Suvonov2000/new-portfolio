import ReactTyped from "react-typed";
import { useTranslation } from "react-i18next";
import { styles } from "../../../utils/tailwind_variables";

const Forms = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="py-4 flex flex-col justify-center sm:py-12 wrap">
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className={`${styles.form__square}`}></div>
          <div className="relative px-10 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-14 transform hover:origin-center">
            <form
              method="POST"
              action="https://formspree.io/f/xbjvkywl"
              className="max-w-md mx-auto"
              target="_blank"
            >
              <div className="w-[300px] h-9">
                <ReactTyped
                  loop
                  cursorChar=" "
                  backSpeed={50}
                  typeSpeed={100}
                  showCursor={true}
                  strings={[t("contact.get_touch")]}
                  className={`text-3xl text-orange font-medium form--text-smaller`}
                />
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="FullName"
                      placeholder=" "
                      minLength={3}
                      id="floating_outlined"
                      className={`${styles.form__input} form__input`}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`${styles.form__label}`}
                    >
                      {t("contact.fullName")}
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder=" "
                      id="floating_outlined"
                      className={`${styles.form__input}`}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`${styles.form__label}`}
                    >
                      {t("contact.email")}
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      required
                      type="text"
                      name="text"
                      placeholder=" "
                      minLength={5}
                      id="floating_outlined"
                      className={`${styles.form__input}`}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className={`${styles.form__label}`}
                    >
                      {t("contact.msg")}
                    </label>
                  </div>

                  <div className="relative">
                    <button htmltype="submit" className={`${styles.form__btn}`}>
                      {t("contact.submit")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
