// src/components/Branches.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mursalatImg from "../assets/IMG_4999.jpg";
import downtownImg from "../assets/IMG_4998.jpg";

export default function Branches() {
  const { t } = useTranslation();

  const branches = [
    {
      name: t("branchesSection.mursalat.name"),
      location: t("branchesSection.mursalat.location"),
      mapLink: "https://maps.app.goo.gl/Z37qKUuREUhafGnAA?g_st=com.google.maps.preview.copy",
      image: mursalatImg,
    },
    {
      name: t("branchesSection.downtown.name"),
      location: t("branchesSection.downtown.location"),
      mapLink: "https://maps.app.goo.gl/RNQpcmjrzK6nGHc89?g_st=com.google.maps.preview.copy",
      image: downtownImg,
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-[#FFF3F3] min-h-screen px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E1E1E]">
        {t("branchesSection.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {branches.map((branch, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
              <p className="text-gray-700 mb-4">{branch.location}</p>
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#FF8080] hover:bg-[#e56767] transition px-4 py-2 rounded-full inline-block"
              >
                {t("branchesSection.viewMap")}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
