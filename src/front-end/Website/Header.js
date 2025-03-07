import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const languages = ["lv", "en", "ru"];

    // Function to get initial language from URL, localStorage or default
    const getInitialLanguage = () => {
        const params = new URLSearchParams(location.search);
        const langFromURL = params.get("lang");

        if (langFromURL && languages.includes(langFromURL)) {
            return langFromURL;
        }

        return localStorage.getItem("language") || "lv"; // Default always to 'lv'
    };

    const [currentLang, setCurrentLang] = useState(getInitialLanguage());

    useEffect(() => {
        i18n.changeLanguage(currentLang);
        localStorage.setItem("language", currentLang);

        const params = new URLSearchParams(location.search);
        if (!params.get("lang") || params.get("lang") !== currentLang) {
            params.set("lang", currentLang);
            navigate({ search: params.toString() }, { replace: true });
        }
    }, [currentLang, i18n, location.search, navigate]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    const toggleLanguage = () => {
        const nextLangIndex = (languages.indexOf(currentLang) + 1) % languages.length;
        const nextLang = languages[nextLangIndex];
        setCurrentLang(nextLang);
    };

    const isActive = (path) => {
        const currentPath = location.pathname;

        // Define all paths that should keep "PAKALPOJUMI" active
        const pakalpojumiPaths = [
            "/pakalpojumi",
            "/darijuma",
            "/projekti",
            "/starpniecibas"
        ];

        // Keep "PAKALPOJUMI" active
        if (path === "/pakalpojumi" && pakalpojumiPaths.includes(currentPath)) {
            return "text-[#9C9150]";
        }

        // Keep "OBJEKTI" active, including dynamic object pages (e.g., /objekti/702)
        if (path === "/objekti" && currentPath.startsWith("/objekti")) {
            return "text-[#9C9150]";
        }

        return currentPath === path ? "text-[#9C9150]" : "";
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
            <header className="bg-cover bg-center relative">
                <div
                    className={`fixed top-0 w-full ${
                        scrolling
                            ? "bg-black bg-opacity-40 backdrop-blur-md h-[73px] md:h-[93px]"
                            : "bg-transparent h-auto"
                    } transition-all duration-300 ease-in-out ${
                        menuOpen ? "pointer-events-auto" : "lg:pointer-events-auto"
                    }`}
                >
                    <div className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center">
                        <a href="https://gunajasko.lv/" className="relative">
                            <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#9C9150] font-marcellus tracking-wide p-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                GUNA JASKO
                            </h1>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="uppercase hidden lg:flex lg:space-x-8 text-white text-sm font-barlow400">
                            <Link
                                to="/"
                                className={`hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/')}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.home")}
                            </Link>
                            <Link
                                to="/par-mani"
                                className={`hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/par-mani')}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.about")}
                            </Link>
                            <Link
                                to="/pakalpojumi"
                                className={`hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/pakalpojumi')}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.services")}
                            </Link>
                            <Link
                                to="/objekti"
                                className={`hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/objekti')}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.projects")}
                            </Link>
                            <Link
                                to="/kontakti"
                                className={`hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/kontakti')}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setMenuOpen(false);
                                }}
                            >
                                {t("menu.contact")}
                            </Link>
                            <button
                                onClick={toggleLanguage}
                                className="hover:text-[#9C9150] transition duration-300 ease-in-out"
                            >
                                {currentLang.toUpperCase()}
                            </button>
                        </nav>

                        {/* Hamburger Menu Icon */}
                        <div
                            className="lg:hidden text-3xl cursor-pointer z-50 mr-1 xs:mr-3 md:mr-6 text-white pointer-events-auto"
                            onClick={toggleMenu}
                        >
                            {!menuOpen && <FaBars/>}
                        </div>
                    </div>
                    <div className="w-full max-w-screen-xl mx-auto px-8 mt-2 relative z-10">
                        <div className="border-b-[1px] border-[#9C9150]"></div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav
                        className={`uppercase lg:hidden text-white text-sm transition-all duration-500 ease-in-out z-50 ${
                            menuOpen
                                ? "opacity-100 translate-y-0 visible pointer-events-auto fixed top-0 left-0 w-full bg-[#5B3767] p-4"
                                : "opacity-0 translate-y-[-100%] invisible pointer-events-none"
                        }`}
                    >
                        <div className="flex items-center justify-between px-3">
                            <a href="https://gunajasko.lv/">
                                <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#9C9150] font-marcellus tracking-wide">
                                    GUNA JASKO
                                </h1>
                            </a>
                            <div
                                className="text-3xl text-white cursor-pointer"
                                onClick={toggleMenu}
                            >
                                <FaTimes/>
                            </div>
                        </div>
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <div className="border-b-[1px] border-[#9C9150] mt-2"></div>
                        </div>

                        <div className="flex flex-col items-center mt-4 space-y-2">
                            <Link
                                to="/"
                                className={`p-1 block hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("menu.home")}
                            </Link>
                            <Link
                                to="/par-mani"
                                className={`p-1 block hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/par-mani')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("menu.about")}
                            </Link>
                            <Link
                                to="/pakalpojumi"
                                className={`p-1 block hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/pakalpojumi')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("menu.services")}
                            </Link>
                            <Link
                                to="/objekti"
                                className={`p-1 block hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/objekti')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("menu.projects")}
                            </Link>
                            <Link
                                to="/kontakti"
                                className={`p-1 block hover:text-[#9C9150] transition duration-300 ease-in-out ${isActive('/kontakti')}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("menu.contact")}
                            </Link>
                            <button onClick={toggleLanguage}>
                                {currentLang.toUpperCase()}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;