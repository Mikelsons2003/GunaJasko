import React from "react";
import objekts1 from "../../img/objekts1.webp";
import photo1 from "../../img/photo1.png";
import photo2 from "../../img/photo2.png";
import photo3 from "../../img/photo3.png";
import photo4 from "../../img/photo4.png";
import photo5 from "../../img/photo5.png";
import photo6 from "../../img/photo6.png";
import photo7 from "../../img/photo7.png";
import photo8 from "../../img/photo8.png";
import photo9 from "../../img/photo9.png";
import photo10 from "../../img/photo10.png";
import photo11 from "../../img/photo11.png";
import photo12 from "../../img/photo12.png";
import photo13 from "../../img/photo13.png";
import photo14 from "../../img/photo14.png";
import photo15 from "../../img/photo15.png";
import GunaJaskoBlue from "../../img/GunaJaskoBlue.png";
import { FaFacebookF, FaInstagram} from 'react-icons/fa';
import LazyBackground from "./LazyBackground";
import PrivatumaPolitikaImg from "../../img/PrivatumaPolitikaImg.webp";

// Array of image imports
const images = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15,
];

// Reusable grid item component
const GridItem = ({ src }) => {
    return (
        <div className="w-[280px]">
            <img
                src={src}
                alt="Grid Image"
                className="w-[280px] h-[209px] object-cover"
            />
        </div>
    );
};

function ObjektiIeskats() {
    return (
        <div className="mx-auto">
            {/* Header Section */}
            <LazyBackground
                image={objekts1}
                className="relative w-full h-[341px] bg-cover bg-center pt-24"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Navigation */}
                    <nav
                        className="font-garamond500 w-full max-w-[1267px] flex items-center justify-center md:justify-start text-white text-sm lg:text-xl uppercase tracking-wide px-6">
                        <ul className="grid grid-cols-1 md:flex md:space-x-4 lg:space-x-8 text-center">
                            <li>Dzīvokļi</li>
                            <li className="mt-3 md:mt-0">Mājas</li>
                            <li className="mt-3 md:mt-0">Zeme</li>
                            <li className="mt-3 md:mt-0">Jaunie projekti</li>
                            <li className="mt-3 md:mt-0">Projekti no attīstītāja</li>
                            <li className="mt-3 md:mt-0">InvestīcijuObjekti</li>
                        </ul>
                    </nav>
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12 mb-6 md:mb-0">
                            <li>Pārdod</li>
                            <li>Izīrē</li>
                        </ul>
                    </nav>
                </div>
            </LazyBackground>

            {/* Main Content Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 bg-white text-[#5B3767]">
                {/* Text Content */}
                <div className="flex flex-col sm:items-start lg:items-start space-y-4 mb-14 text-center lg:text-left">
                    <div
                        className="font-barlow400 flex items-center justify-center lg:justify-start space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-semibold">Objekti</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Dzīvokļi</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Pārdod</span>
                    </div>
                    <h1 className="font-garamond500 text-2xl">Pārdod gleznainu dzīvokli ainaviskajā Klusajā centrā</h1>
                    <h1 className="font-infant600 text-3xl">120 000 EUR</h1>
                </div>

                {/* Image */}
                <LazyBackground
                    image={photo8}
                    className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[662px] max-w-[1224px] mx-auto flex items-center justify-center bg-cover bg-center"
                ></LazyBackground>
            </section>

            <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-6">
                {/* Red Section */}
                <div className="w-full md:w-[742px] py-12 bg-white text-[#5B3767]">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {/* Left Column 1 */}
                        <div className="text-center lg:text-left space-y-2 font-barlow400">
                            <span className="block">Adrese</span>
                            <span className="block">Ēkas tips</span>
                        </div>

                        {/* Left Column 2 */}
                        <div className="text-center lg:text-left space-y-2 font-barlow500">
                            <span className="block font-semibold">Alberta 1,Rīga</span>
                            <span className="block font-semibold">Ēkas tips</span>
                        </div>

                        {/* Right Column 1 */}
                        <div className="text-center lg:text-right space-y-2 font-barlow400 mt-6 lg:mt-0">
                            <span className="block">Platība</span>
                            <span className="block">Istabu sk.</span>
                            <span className="block">Stāvs</span>
                        </div>

                        {/* Right Column 2 */}
                        <div className="text-center lg:text-right space-y-2 font-barlow500 mt-6 lg:mt-0">
                            <span className="block font-semibold">50 m²</span>
                            <span className="block font-semibold">5</span>
                            <span className="block font-semibold">5</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[847px] max-w-screen-xl relative z-10 text-left mt-6 mb-12">
                    <div className="border-b-[1px] border-[#CDC697]"></div>
                </div>

                {/* Green Section */}
                <div className="w-full text-left">
                    <p className="font-barlow400 text-[#5B3767] leading-relaxed">
                        Dzīvoklī veikts kapitālais remonts, nomainīta elektroinstalācija, izbūvēta apsardzes un
                        ugunsdrošības
                        signalizācija, logi PVC, finiera palodzes, atjaunoti čuguna radiatori, parketa grīda. Ļoti silts
                        un mājīgs.
                        Īpašumā iekļauta viena garantētā stāvvieta pagalmā (ir zemesgrāmata). Iebraukšana teritorijā pa
                        vārtiem, kas
                        atverami ar pulti. Tiek veidots uzkrājums fasādes atjaunošanai un kāpņu telpas remontam.
                    </p>
                    <p className="font-barlow400 text-[#5B3767] leading-relaxed mt-4">
                        Izstrādāts uzkrājumu plāns līdz 2026. gadam. Drīzumā tiks realizēts pagalma labiekārtošanas
                        projekts ar Rīgas
                        Domes līdzfinansējumu.
                    </p>
                    <p className="font-barlow400 text-[#5B3767] leading-relaxed mt-4">
                        Infrastruktūra
                    </p>
                    <p className="font-barlow400 text-[#5B3767] leading-relaxed">
                        Blakus atrodas visa pilsētas infrastruktūra – sabiedriskais transports, vairākas
                        skolas, dažu
                        minūšu gājienā Centra sporta kvartāls, Tallinas kvartāls, Alojas kvartāls ar vairākiem
                        restorāniem, veikaliem,
                        Rīgas pilsētas dzemdību nams, Jaunā Ģertrūdes baznīca, fabrika “Laima”.
                    </p>
                </div>
            </section>


            {/* Image Grid Section */}
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                    {images.map((src, index) => (
                        <GridItem key={index} src={src}/>
                    ))}
                </div>

                {/* Button Section */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/kontakti">
                        <button
                            className="font-barlow500 w-[274px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                            SAZINĀTIES
                        </button>
                    </a>
                </div>
            </div>

            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 text-[#5B3767] mb-8">
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end lg:space-y-0 text-center lg:text-left">
                    {/* Left Section: Image and Agent Information */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-end lg:space-x-8">
                        {/* Profile Picture */}
                        <LazyBackground
                            image={GunaJaskoBlue}
                            className="w-[182px] h-[275px] bg-cover bg-center mb-6 lg:mb-0"
                        ></LazyBackground>

                        {/* Agent Information */}
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-garamond500 text-4xl">GUNA JASKO</h2>
                            <p className="font-barlow500 text-lg uppercase tracking-wide">
                                NEKUSTAMO ĪPAŠUMU AĢENTS
                            </p>
                            <p className="font-barlow400 text-lg">TĀLR.: +371 20 016 688</p>
                            <p className="font-barlow400 text-lg">E-PASTS: JASKOGUNA@GMAIL.COM</p>
                        </div>
                    </div>

                    {/* Right Section: Social Icons */}
                    <div className="flex flex-col items-center lg:items-end space-y-4 mt-8 lg:mt-0">
                        <h1 className="font-barlow500 text-[#9C9150] text-xl">DALĪTIES</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100062951665076&mibextid=wwXIfr&rdid=hCVlgIdTGejCSuBS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1u4u65Eu5izWGVmZ%2F%3Fmibextid%3DwwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaFacebookF className="text-[#5B3767]"/>
                            </a>
                            <a
                                href="https://www.instagram.com/gunarealty/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaInstagram className="text-[#5B3767]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ObjektiIeskats;
