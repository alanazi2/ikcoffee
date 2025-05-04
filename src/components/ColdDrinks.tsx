import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import aeslateeh from "../assets/cold/aeslateeh.JPG";
import aictae from "../assets/cold/aictae.JPG";
import aisdrep from "../assets/cold/aisdrep.JPG";
import img0012 from "../assets/cold/IMG_0012.JPG";
import img0024 from "../assets/cold/IMG_0024.JPG";
import img0051 from "../assets/cold/IMG_0051.JPG";
import img0062 from "../assets/cold/IMG_0062.JPG";
import img0066 from "../assets/cold/IMG_0066.JPG";
import img0068 from "../assets/cold/IMG_0068.JPG";
import matsha from "../assets/cold/matsha.JPG";
import spsnish from "../assets/cold/spsnish.JPG";

const coldDrinks = [
  { image: aeslateeh, name: "Ice Spanish Latte", price: "20 SR" },
  { image: aictae, name: "Ice Tea", price: "20 SR" },
  { image: aisdrep, name: "Ice Coffee Day", price: "Small 12 SR / Large 14 SR" },
  { image: img0012, name: "Sparkling Water", price: "11 SR" },
  { image: img0024, name: "Fresh Orange Juice", price: "15 SR" },
  { image: img0051, name: "Magical Drink", price: "18 SR" },
  { image: img0062, name: "Water", price: "2 SR" },
  { image: img0066, name: "Hibiscus Ice Tea", price: "21 SR" },
  { image: img0068, name: "Ice Drip", price: "20 SR" },
  { image: matsha, name: "Ice Matcha Latte", price: "21 SR" },
  { image: spsnish, name: "Ice Latte", price: "17 SR" },
];

export default function ColdDrinks() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-[#FFF3F3] min-h-screen px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E1E1E]">
        {t("coldTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coldDrinks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
