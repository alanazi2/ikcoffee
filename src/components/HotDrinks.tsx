import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import amrekano from "../assets/hot/amrekano.png";
import img_0008 from "../assets/hot/IMG_0008.png";
import img_0010 from "../assets/hot/IMG_0010.png";
import img_0017 from "../assets/hot/IMG_0017.png";
import img_0018 from "../assets/hot/IMG_0018.png";
import img_0020 from "../assets/hot/IMG_0020.png";
import img_0022 from "../assets/hot/IMG_0022.png";
import img_0023 from "../assets/hot/IMG_0023.png";
import img_0025 from "../assets/hot/IMG_0025.png";
import img_0058 from "../assets/hot/IMG_0058.png";
import img_0061 from "../assets/hot/IMG_0061.png";

const hotDrinks = [
  { image: amrekano, name: "Americano", price: "13 SR" },
  { image: img_0008, name: "Latte", price: "14 SR" },
  { image: img_0010, name: "Matcha latte", price: "19 SR" },
  { image: img_0017, name: "V60", price: "17 SR" },
  { image: img_0018, name: "Cappuccino", price: "14 SR" },
  { image: img_0020, name: "Coffee of the day", price: "Small 10 SR - Large 13 SR" },
  { image: img_0022, name: "Espresso", price: "11 SR" },
  { image: img_0023, name: "Flat White", price: "14 SR" },
  { image: img_0025, name: "Hot chocolate", price: "15 SR" },
  { image: img_0058, name: "Tea", price: "10 SR" },
  { image: img_0061, name: "Cortado", price: "13 SR" }
];

export default function HotDrinks() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-[#FFF3F3] min-h-screen px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E1E1E]">
        {t("hotTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotDrinks.map((item, index) => (
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
