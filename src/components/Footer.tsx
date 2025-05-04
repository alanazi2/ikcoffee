// src/components/Footer.tsx
import instagram from "../assets/nstagramb.png";
import email from "../assets/imeilb.png";
import ikRight from "../assets/ikf.png";
import ikLeft from "../assets/ikfoter 1.png";
import rmslogo from "../assets/rmslogw.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Image */}
        <img src={ikLeft} alt="ikfoter" className="h-28 md:h-32" />

        {/* Center Content */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/ikcoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="mailto:ikcoffee.sa@gmail.com">
              <img src={email} alt="Email" className="w-10 h-10" />
            </a>
          </div>
          <p className="text-sm">
            All Rights Reserved - <span className="text-[#FF8080] font-bold">ik</span> coffee. 2025©
          </p>

          {/* Signature */}
          <div className="flex items-center justify-center gap-2 text-xs mt-2">
            <span>{t("footer.designedBy")}</span>
            <a
              href="https://rmsr.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
             <img src={rmslogo} alt="rmsr.sa logo" className="w-10 h-20" />
            </a>
          </div>
        </div>

        {/* Right Logos */}
        <div className="flex gap-10 items-center">
          <img src={ikRight} alt="right ik" className="h-16" />
        </div>
      </div>
    </footer>
  );
}
