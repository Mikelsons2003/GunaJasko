import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false); // State to detect scroll
    const { t, i18n } = useTranslation(); // Use translation hook

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const toggleLanguage = () => {
        // Cycle through the languages: 'en', 'lv', 'ru'
        const languages = ["en", "lv", "ru"];
        const currentIndex = languages.indexOf(i18n.language);
        const nextIndex = (currentIndex + 1) % languages.length;
        i18n.changeLanguage(languages[nextIndex]);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative z-50">
            {/* Fixed position header with black background on scroll */}
            <header className="bg-cover bg-center relative">
                <div
                    className={`fixed top-0 w-full ${
                        scrolling
                            ? "bg-black bg-opacity-40 backdrop-blur-md h-[73px] md:h-[93px]"
                            : "bg-transparent"
                    } transition-all duration-300 ease-in-out`}
                >
                    {/* Header Section */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center">
                        {/* Logo Section */}
                        <a href="https://guna.lucid-websites.com/">
                            <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#CDC697] font-marcellus tracking-wide p-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                GUNA JASKO
                            </h1>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="uppercase hidden lg:flex lg:space-x-8 text-white text-sm font-barlow400">
                            <Link
                                to="/"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.home")}
                            </Link>
                            <Link
                                to="/par-mani"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.about")}
                            </Link>
                            <Link
                                to="/pakalpojumi"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.services")}
                            </Link>
                            <Link
                                to="/objekti"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.projects")}
                            </Link>
                            <Link
                                to="/kontakti"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.contact")}
                            </Link>
                            <button
                                onClick={toggleLanguage}
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                {t("button.language")}
                            </button>
                        </nav>

                        {/* Hamburger Menu Icon */}
                        <div
                            className="lg:hidden text-3xl cursor-pointer z-50 mr-1 xs:mr-3 md:mr-6 text-white"
                            onClick={toggleMenu}
                        >
                            {!menuOpen && <FaBars />}
                        </div>
                    </div>
                    {/* Yellow Line */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 mt-2 relative z-10">
                        <div className="border-b-[1px] border-[#CDC697]"></div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav
                        className={`uppercase lg:hidden text-white text-sm z-10 transition-all duration-500 ease-in-out ${
                            menuOpen
                                ? "opacity-100 translate-y-0 visible fixed top-0 left-0 w-full bg-[#5B3767] p-4"
                                : "opacity-0 translate-y-[-100%] invisible"
                        }`}
                    >
                        <div className="flex items-center justify-between px-3">
                            <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#CDC697] font-marcellus tracking-wide">
                                GUNA JASKO
                            </h1>
                            <div
                                className="text-3xl text-white cursor-pointer"
                                onClick={toggleMenu}
                            >
                                <FaTimes />
                            </div>
                        </div>
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <div className="border-b-[1px] border-[#CDC697] mt-2"></div>
                        </div>
                        <Link
                            to="/"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("menu.home")}
                        </Link>
                        <Link
                            to="/par-mani"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("menu.about")}
                        </Link>
                        <Link
                            to="/pakalpojumi"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("menu.services")}
                        </Link>
                        <Link
                            to="/objekti"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("menu.projects")}
                        </Link>
                        <Link
                            to="/kontakti"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("menu.contact")}
                        </Link>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={toggleLanguage}
                                className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                {t("button.language")}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
