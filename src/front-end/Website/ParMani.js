import React from "react";
import Kapnutelpa from '../../img/Kapnutelpa.webp';
import Viesistaba from '../../img/Viesistaba.webp';
import Experience from "../../img/Experience.webp";
import Check from "../../img/Check.webp";
import Safety from "../../img/Safety.webp";
import Lanida from "../../img/Lanida.webp";
import GunaParMani from "../../img/GunaParMani.png";
import { useTranslation } from "react-i18next";
import LazyBackground from "./LazyBackground";
import PrivatumaPolitikaImg from "../../img/PrivatumaPolitikaImg.webp";

function ParMani() {
    const {t} = useTranslation();
    return (
        <div className="mx-auto font-sans text-white">
            <div
                className="bg-[#5B3767] w-full mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center lg:h-[810px]">
                {/* Left: Text Section */}
                <div className="w-full lg:w-1/2 space-y-6 px-6 lg:px-12 xl:pl-20 2xl:pl-40 mt-14 sm:mt-20 lg:mt-0">
                    <div className="mt-16 lg:mt-32 2xl:ml-40">
                        <h2 className="text-3xl sm:text-4xl text-center lg:text-left text-white">{t("parmani.h1Parmani")}</h2>
                        <p className="text-sm sm:text-lg leading-relaxed text-center lg:text-left mt-6 sm:mt-10 text-white">
                            {t("parmani.pParmani1")}
                        </p>
                        <p className="text-sm sm:text-lg leading-relaxed text-center lg:text-left mt-6 sm:mt-20 text-white">
                            {t("parmani.pParmani2")}
                        </p>
                        <p className="text-sm sm:text-lg leading-relaxed text-center lg:text-left mt-6 sm:mt-10 text-white">
                            {t("parmani.pParmani3")}
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start 2xl:ml-40">
                        <a href="https://guna.lucid-websites.com/kontakti"><button className="w-[274px] h-[55px] border border-[#CDC697] text-[#CDC697] mt-10 hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out">
                            {t("parmani.buttonParmani")}
                        </button></a>
                    </div>
                </div>

                {/* Right: Image Section */}
                <div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mr-12 xl:mr-20 2xl:mr-80 mt-10 lg:mt-32">
                    <LazyBackground
                        image={GunaParMani}
                        className="w-[300px] sm:w-[433px] h-[400px] sm:h-[605px] bg-cover bg-center mb-6 lg:mb-0 3xl:-mb-48"
                    ></LazyBackground>
                </div>
            </div>

            {/* Main Container */}
            <div
                className="w-full max-w-[1221px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#CDC697] mt-10 mb-10 lg:mt-28 bg-[#F8F8F8]"
            >
                {/* Top Left (Text) */}
                <div className="p-4 md:p-10">
                    <h2 className="text-[#5B3767] text-2xl sm:text-4xl mb-4 sm:mb-6 text-left">
                        {t("ramis.h1Ramis1")}
                    </h2>
                    <ul className="font-barlow400 space-y-4 text-[#5B3767] pt-4">
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis1")}
                        </li>
                        <li className="flex items-center text-left">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis2")}
                        </li>
                        <li className="flex items-center text-left">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis3")}
                        </li>
                        <li className="flex items-center text-left">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis4")}
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis5")}
                        </li>
                    </ul>
                </div>

                {/* Top Right (Image) */}
                <div className="h-[300px] sm:h-[469px] mx-2 mt-2 2xl:mt-0 2xl:mx-0">
                    <LazyBackground
                        image={Kapnutelpa}
                        className="w-full h-full bg-cover bg-center"
                    ></LazyBackground>
                </div>

                {/* Bottom Left (Image) */}
                <div className="h-[300px] sm:h-[469px] mx-2 mb-2 2xl:mb-0 2xl:mx-0">
                    <LazyBackground
                        image={Viesistaba}
                        className="w-full h-full bg-cover bg-center"
                    ></LazyBackground>
                </div>

                {/* Bottom Right (Text) */}
                <div className="p-4 md:p-8">
                    <h2 className="text-[#5B3767] text-2xl sm:text-4xl mb-4 sm:mb-6 text-left">
                        {t("ramis.h1Ramis2")}
                    </h2>
                    <ul className="font-barlow400 space-y-4 text-[#5B3767]">
                        <li className="flex items-center text-left">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis6")}
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis7")}
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis8")}
                        </li>
                        <li className="flex items-center text-left">
                            <span className="text-[#CDC697] text-2xl sm:text-4xl mr-4">✔</span>
                            {t("ramis.liRamis9")}
                        </li>
                    </ul>
                </div>
            </div>

            <section className="bg-[#5B3767] text-white py-12 lg:py-28 flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24 2xl:px-36 text-center">
                    {/* Heading */}
                    <h1 className="font-garamond500 text-[#CDC697] text-2xl sm:text-3xl lg:text-4xl mb-12 lg:mb-20">
                        {t("sakumlapaAbout.headerAbout")}
                    </h1>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div
                            className="w-full max-w-[273px] mx-auto text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <LazyBackground
                                image={Experience}
                                className="w-16 h-16 bg-contain bg-no-repeat bg-left">
                            </LazyBackground>
                            {/* Title */}
                            <div className="font-barlow400 text-xl lg:text-2xl text-white">{t("sakumlapaAbout.divAbout1")}</div>
                            {/* Description */}
                            <p className="text-sm">{t("sakumlapaAbout.pAbout1")}</p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="w-full max-w-[273px] mx-auto text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <LazyBackground
                                image={Check}
                                className="w-16 h-16 bg-contain bg-no-repeat bg-left">
                            </LazyBackground>
                            {/* Title */}
                            <div className="font-barlow400 text-xl lg:text-2xl text-white">{t("sakumlapaAbout.divAbout2")}</div>
                            {/* Description */}
                            <p className="text-sm">{t("sakumlapaAbout.pAbout2")}</p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="w-full max-w-[273px] mx-auto text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <LazyBackground
                                image={Safety}
                                className="w-16 h-16 bg-contain bg-no-repeat bg-left">
                            </LazyBackground>
                            {/* Title */}
                            <div className="font-barlow400 text-xl lg:text-2xl text-white">{t("sakumlapaAbout.divAbout3")}</div>
                            {/* Description */}
                            <p className="text-sm">{t("sakumlapaAbout.pAbout3")}</p>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="w-full max-w-[273px] mx-auto text-left border border-[#CDC697] p-6 flex flex-col items-start space-y-4">
                            {/* Icon */}
                            <LazyBackground
                                image={Lanida}
                                className="w-[95px] h-[72px] bg-contain bg-no-repeat bg-left">
                            </LazyBackground>
                            {/* Title */}
                            <div className="font-barlow400 text-xl lg:text-xl text-white">{t("sakumlapaAbout.divAbout4")}</div>
                            {/* Description */}
                            <a href="https://lanida.lv/biedri/guna-jasko-2/"
                               className="font-barlow400 text-sm underline text-[#CDC697] hover:text-[#9C9150] transition duration-300">
                                {t("sakumlapaAbout.pAbout4")}
                            </a>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <a href="https://guna.lucid-websites.com/pakalpojumi"><button
                            className="w-full max-w-[317px] h-[55px] border border-[#CDC697] text-[#CDC697] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out text-sm">
                            {t("sakumlapaAbout.buttonAbout")}
                        </button></a>
                    </div>
                </div>
            </section>

            <section className="bg-[#FBF8FB] text-[#5B3767] py-20 px-6 flex items-center justify-center">
                <div className="container mx-auto text-center sm:text-left">
                    {/* Education Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl mb-6 text-left sm:text-left sm:ml-10">
                            {t("izglitiba.h1Izglitiba1")}
                        </h2>
                        <p className="text-lg leading-relaxed mx-auto max-w-6xl text-left sm:text-left sm:ml-10">
                            {t("izglitiba.pIzglitiba1")}
                        </p>
                    </div>

                    {/* Personal Attributes Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl mb-6 text-left sm:text-left sm:ml-10">
                            {t("izglitiba.h1Izglitiba2")}
                        </h2>
                        <p className="text-lg leading-relaxed mx-auto max-w-6xl text-left sm:text-left sm:ml-10">
                            {t("izglitiba.pIzglitiba2")}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <a href="https://guna.lucid-websites.com/kontakti"><button
                            className="w-[272px] h-[55px] sm:w-[317px] sm:h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697]">
                            {t("izglitiba.buttonIzglitiba")}
                        </button></a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ParMani;