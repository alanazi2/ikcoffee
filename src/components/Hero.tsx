// src/components/Hero.tsx
import { useTranslation } from "react-i18next";
import heroImage from "../assets/ikhero.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white pt-32 pb-20 flex flex-col items-center justify-center text-center">
      <img
        src={heroImage}
        alt="IK Coffee Hero"
        className="w-full max-w-4xl object-contain px-4"
      />
      <h2
        className="mt-10 text-xl md:text-2xl font-semibold"
        style={{ color: "#FF7E7E" }}
      >
        {t("hero.subtitle")}
      </h2>
    </section>
  );
}
 