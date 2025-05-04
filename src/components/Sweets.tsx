// src/components/Sweets.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import bodeng from "../assets/sweets/bodeng.JPG";
import hani from "../assets/sweets/hani.JPG";
import img0036 from "../assets/sweets/IMG_0036.JPG";
import img0038 from "../assets/sweets/IMG_0038.JPG";
import img0043 from "../assets/sweets/IMG_0043.JPG";
import img0045 from "../assets/sweets/IMG_0045.JPG";
import img0078 from "../assets/sweets/IMG_0078.JPG";
import paets from "../assets/sweets/paets.JPG";
import trafel from "../assets/sweets/trafel.JPG";

const sweets = [
  { image: bodeng, name: "IK Chocolate Pudding", price: "21 SR" },
  { image: hani, name: "Honey Chocolate Cake", price: "27 SR" },
  { image: img0036, name: "Coconut Magic Bar", price: "8 SR" },
  { image: img0038, name: "French Toast", price: "23 SR" },
  { image: img0043, name: "Tiramisu", price: "22 SR" },
  { image: img0045, name: "Banana Pudding", price: "22 SR" },
  { image: img0078, name: "Chocolate Kunafa Pistachio Bar", price: "13 SR" },
  { image: paets, name: "Rocky Road", price: "5 SR" },
  { image: trafel, name: "Truffle", price: "6 SR" },
];

export default function Sweets() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-[#FFF3F3] min-h-screen px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E1E1E]">
        {t("sweetTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sweets.map((item, index) => (
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
