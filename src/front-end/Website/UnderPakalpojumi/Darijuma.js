import React, {useState} from "react";
import {Link} from "react-router-dom";
import Kabinets from "../../../img/Kabinets.webp";
import Pakalpojumaimg2 from "../../../img/Pakalpojumaimg2.webp";
import {useTranslation} from "react-i18next";
import LazyBackground from "../LazyBackground";

function Darijuma() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false); // State to detect scroll
    const { t, i18n } = useTranslation();
    return (
        <div className="mx-auto font-sans text-white bg-[#FBF8FB] overflow-hidden">
            <div
                className="w-full mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center lg:h-[586px] bg-[#5B3767] pt-28 md:pt-36 relative z-0"
            >
                {/* Left: Text Section */}
                <div
                    className="lg:w-1/2 text-white text-center lg:text-left space-y-6"
                >
                    <h1 className="text-3xl sm:text-4xl lg:mr-6 xl:ml-40 2xl:ml-80">{t("pakalpojumi.h1Pakalpojumi1")}</h1>
                </div>

                {/* Right: Image Section */}
                <LazyBackground
                    image={Kabinets}
                    className="w-full lg:w-[709px] h-[300px] sm:h-[400px] lg:h-[436px] flex-shrink-0 mt-6 lg:mt-0 lg:mr-20 2xl:mr-80 mb-6"
                ></LazyBackground>
            </div>

            {/* Header Links */}
            <nav className="text-center py-6 text-sm mt-4 xl:mt-24 text-[#5B3767]">
                <ul className="font-barlow500 flex flex-row justify-center items-center gap-x-6">
                    <Link
                        to="/starpniecibas"
                        className="hover:underline text-lg lg:text-xl"
                        onClick={() => {
                            window.scrollTo({top: 0, behavior: "smooth"});
                            setMenuOpen(false);
                        }}
                        >
                        {t("pakalpojumi.h1Pakalpojumi2")}
                    </Link>

                    <Link
                        to="/darijuma"
                        className="hover:underline text-lg lg:text-xl"
                        onClick={() => {
                            window.scrollTo({top: 0, behavior: "smooth"});
                            setMenuOpen(false);
                        }}
                        >
                        {t("pakalpojumi.h1Pakalpojumi3")}
                    </Link>

                    <Link
                        to="/projekti"
                        className="hover:underline text-lg lg:text-xl"
                        onClick={() => {
                            window.scrollTo({top: 0, behavior: "smooth"});
                            setMenuOpen(false);
                        }}
                        >
                        {t("pakalpojumi.h1Pakalpojumi4")}
                    </Link>
                </ul>
            </nav>

            <div className="w-full max-w-[864px] mx-auto px-6 sm:px-8">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Main Section */}
            <div className="container mx-auto px-6 sm:px-8 lg:px-20 py-16 text-[#5B3767]">
                {/* Centered Title */}
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl text-center mb-12 ${i18n.language === 'ru' ? 'text-ru-h' : ''}`}>
                    {t("pakalpojumi.h1Pakalpojumi6")}
                </h1>

                {/* Content Section */}
                <div
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch space-y-10 lg:space-y-0">
                    {/* Left Column */}
                    <div className="font-barlow400 w-full lg:w-2/3 text-left">
                        <ul className="space-y-6 text-base sm:text-lg leading-relaxed">
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> {t("pakalpojumi.pPakalpojumi8")}
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> {t("pakalpojumi.pPakalpojumi9")}
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> {t("pakalpojumi.pPakalpojumi10")}
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> {t("pakalpojumi.pPakalpojumi11")}
                            </li>
                        </ul>
                    </div>

                    {/* Right Column (Yellow Text) */}
                    <div
                        className="w-full lg:w-1/3 text-[#9C9150] text-lg sm:text-xl text-left lg:text-right flex flex-col justify-end space-y-4">
                        <p className="font-garamond500">{t("pakalpojumi.specialpPakalpojumi1")}</p>
                        <p className="font-garamond500"><span
                            className="font-infant600 font-bold text-2xl">1</span>{t("pakalpojumi.specialpPakalpojumi5")}
                        </p>
                        <p className="font-garamond500">{t("pakalpojumi.specialpPakalpojumi6")}<span
                            className="font-infant600 text-2xl font-bold"> 500</span> EUR</p>
                    </div>
                </div>

                {/* Centered Button */}
                <div className="flex justify-center mt-12">
                    <a href="https://guna.lucid-websites.com/kontakti">
                        <button
                            className="w-[274px] h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium">
                            {t("pakalpojumi.buttonPakalpojumi")}
                        </button>
                    </a>
                </div>

                {/* Image Placeholder */}
                <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 flex justify-center items-center">
                    <LazyBackground
                        image={Pakalpojumaimg2}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[590px] lg:w-[890px] flex-shrink-0 mt-8 sm:mt-16"
                    >
                    </LazyBackground>
                </div>
            </div>
        </div>
    );
}

export default Darijuma;
