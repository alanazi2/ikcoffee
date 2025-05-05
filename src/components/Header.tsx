import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/ik.png";

export default function Header() {
  const navItems = ["about", "branches", "menu", "media"];
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isDrinksOpen, setIsDrinksOpen] = useState(false);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [circleStyle, setCircleStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    if (activeItem !== null && navRefs.current[activeItem]) {
      const el = navRefs.current[activeItem];
      const rect = el!.getBoundingClientRect();
      setCircleStyle({
        left: rect.left + rect.width / 2,
        width: rect.width,
        opacity: 1,
      });
    } else {
      setCircleStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeItem]);

  const handleNavigation = (route: string) => {
    navigate(route);
    setIsMobileMenuOpen(false);
    setIsMenuDropdownOpen(false);
    setIsDrinksOpen(false);
  };

  return (
    <header className="w-full bg-[#FF8080] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="IK Logo"
          className="w-16 h-auto cursor-pointer"
          onClick={() => handleNavigation("/")}
        />

        {/* Desktop Menu */}
        <nav className="relative hidden md:flex space-x-10 items-center text-sm font-semibold text-white">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-10 rounded-full bg-white shadow-md transition-all duration-300 pointer-events-none -z-10"
            style={{
              left: `${circleStyle.left}px`,
              width: `${circleStyle.width}px`,
              opacity: circleStyle.opacity,
              transform: `translateX(-50%) translateY(-50%)`,
            }}
          />

          {navItems.map((item, index) =>
            item === "menu" ? (
              <div key="menu" className="relative">
                <button
                  ref={(el) => {
                    navRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setActiveItem(index);
                    setIsMenuDropdownOpen((prev) => !prev);
                  }}
                  className={`relative z-10 px-4 py-2 transition-colors duration-300 ${
                    activeItem === index && isMenuDropdownOpen ? "text-black" : "text-white"
                  }`}
                >
                  {t("menu")}
                </button>

                {isMenuDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-3 space-y-2 z-50">
                    <div className="relative">
                      <button
                        onClick={() => setIsDrinksOpen((prev) => !prev)}
                        className="w-full text-left hover:bg-gray-100 rounded px-2 py-1"
                      >
                        {t("drinks")}
                      </button>
                      {isDrinksOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          <button onClick={() => handleNavigation("/hot")} className="w-full text-left hover:bg-gray-100 rounded px-2 py-1">
                            {t("hot")}
                          </button>
                          <button onClick={() => handleNavigation("/cold")} className="w-full text-left hover:bg-gray-100 rounded px-2 py-1">
                            {t("cold")}
                          </button>
                        </div>
                      )}
                    </div>

                    <button onClick={() => handleNavigation("/sweet")} className="w-full text-left hover:bg-gray-100 rounded px-2 py-1">
                      {t("sweet")}
                    </button>

                    <button onClick={() => handleNavigation("/foods")} className="w-full text-left hover:bg-gray-100 rounded px-2 py-1">
                      {t("foods")}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={index}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                className={`relative z-10 px-4 py-2 transition-colors duration-300 ${
                  activeItem === index ? "text-black" : "text-white"
                }`}
              >
                {t(item)}
              </button>
            )
          )}

          <button
            onClick={toggleLanguage}
            className="ml-6 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-[#FF8080] transition"
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#FF8080] text-white text-base">
          {navItems.map((item) =>
            item === "menu" ? (
              <div key="menu-mobile" className="space-y-1">
                <button
                  onClick={() => setIsMenuDropdownOpen((prev) => !prev)}
                  className="block font-bold w-full text-left"
                >
                  {t("menu")}
                </button>
                {isMenuDropdownOpen && (
                  <div className="ml-4 space-y-1">
                    <button onClick={() => setIsDrinksOpen((prev) => !prev)} className="block w-full text-left">
                      {t("drinks")}
                    </button>
                    {isDrinksOpen && (
                      <div className="ml-4 space-y-1">
                        <button onClick={() => handleNavigation("/hot")} className="block w-full text-left">
                          {t("hot")}
                        </button>
                        <button onClick={() => handleNavigation("/cold")} className="block w-full text-left">
                          {t("cold")}
                        </button>
                      </div>
                    )}

                    <button onClick={() => handleNavigation("/sweet")} className="block w-full text-left">
                      {t("sweet")}
                    </button>
                    <button onClick={() => handleNavigation("/foods")} className="block w-full text-left">
                      {t("foods")}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button key={item} onClick={() => handleNavigation(`/${item.toLowerCase()}`)} className="block w-full text-left">
                {t(item)}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
