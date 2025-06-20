import Form from "./form.js";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="overflow-x-hidden" id="contact">
      <div className="w-[80%] m-auto pt-[5%]">
        <span className="relative flex h-8 mb-10 mt-10">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
            {t("navbar.contact")}
          </p>
        </span>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
