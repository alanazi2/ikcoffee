import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import img0 from "../assets/foods/IMG_0029.JPG";
import img1 from "../assets/foods/IMG_0032.jpg";
import img2 from "../assets/foods/IMG_0033.JPG";
import img3 from "../assets/foods/IMG_0034.JPG";
import img4 from "../assets/foods/IMG_0039.JPG";
import img5 from "../assets/foods/IMG_0041.JPG";
import img6 from "../assets/foods/IMG_0042.JPG";
import img7 from "../assets/foods/IMG_0070.JPG";

const foodItems = [
  { image: img0, name: "Grilled Cheese", price: "22 SR" },
  { image: img1, name: "Scrambled Eggs", price: "25 SR" },
  { image: img2, name: "Smoked Turkey", price: "24 SR" },
  { image: img3, name: "Tuna Classic", price: "28 SR" },
  { image: img4, name: "IK Signature", price: "28 SR" },
  { image: img5, name: "Scramble Classic", price: "24 SR" },
  { image: img6, name: "Scramble Truffle", price: "28 SR" },
  { image: img7, name: "K Caramelized Turkey", price: "26 SR" },
];

export default function Foods() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-[#FFF3F3] min-h-screen px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E1E1E]">
        {t("foodsTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item, index) => (
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
