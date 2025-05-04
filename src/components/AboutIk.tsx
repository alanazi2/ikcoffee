// src/components/About.tsx
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/ikebrahem.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-white px-6 md:px-20 py-32 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-snug">
  {t("aboutSection.title1")}{" "}
  <span className="text-[#FF8080]">{t("aboutSection.title2")}</span>
</h2>


        <p className="text-gray-700 text-lg leading-relaxed">
          {t("aboutSection.p1.start")}
          <span className="text-[#FF8080] font-semibold">iK</span>
          {t("aboutSection.p1.middle")}
          <span className="text-[#FF8080] font-semibold">iK</span>
          {t("aboutSection.p1.end")}
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          {t("aboutSection.p2.start")}
          <span className="text-[#FF8080] font-semibold">iK</span>
          {t("aboutSection.p2.end")}
        </p>

        <p className="text-gray-700 text-lg">{t("aboutSection.p3")}</p>
      </div>

      {/* Image without box */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={aboutImg}
          alt="IK Coffee Founder"
          className="w-[300px] md:w-[400px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
