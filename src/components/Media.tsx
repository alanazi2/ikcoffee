// src/components/Media.tsx
import { useTranslation } from "react-i18next";
import tiktok from "../assets/TikTok.png";
import email from "../assets/Email.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";

export default function Media() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-32 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-[#FF8080] py-16 px-6 rounded-3xl shadow-lg text-white flex flex-col items-center justify-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {t("mediaSection.title")}
        </h2>

        {/* الأيقونات */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@ikcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg">
              <img src={tiktok} alt="TikTok" className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold group-hover:underline text-white">
              {t("mediaSection.tiktok")}
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ikcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg">
              <img src={instagram} alt="Instagram" className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold group-hover:underline text-white">
              {t("mediaSection.instagram")}
            </span>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/ikcoffeesa"
            target="_blank"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg">
              <img src={twitter} alt="Twitter" className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold group-hover:underline text-white">
              {t("mediaSection.twitter")}
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:ikcoffee.sa@gmail.com"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg">
              <img src={email} alt="Email" className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold group-hover:underline text-white">
              {t("mediaSection.email")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
