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

// Array of image imports
const images = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14, photo15,
];

// Reusable grid item component
const GridItem = ({ src }) => {
    return (
        <div
            className="w-full h-64 bg-cover bg-center"
            style={{
                backgroundImage: `url(${src})`,
            }}
        ></div>
    );
};

function ObjektiIeskats() {
    return (
        <div className="mx-auto">
            {/* Header Section */}
            <section
                className="relative w-full h-[341px] bg-cover bg-center pt-24"
                style={{
                    backgroundImage: `url(${objekts1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
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
                            <li className="mt-3 md:mt-0">Komercobjekti</li>
                        </ul>
                    </nav>
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            <li>Pārdod</li>
                            <li>Izīrē</li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 bg-white text-[#5B3767]">
                <div className="flex flex-col items-start space-y-4 mb-14">
                    <div className="font-barlow400 flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-semibold">Objekti</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Dzīvokļi</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Pārdod</span>
                    </div>
                    <h1 className="font-garamond500 text-2xl">Pārdod gleznainu dzīvokli ainaviskajā Klusajā centrā</h1>
                    <h1 className="font-infant600 text-3xl">120 000 EUR</h1>
                </div>
                <div
                    className="relative w-full h-[662px] max-w-[1224px] mx-auto flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${photo8})`,
                    }}
                ></div>
            </section>

            <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-6">
                {/* Red Section */}
                <div className="w-[782px] grid grid-cols-4 gap-4">
                    {/* Column 1 */}
                    <div className="text-left font-barlow400">
                        <p className="text-[#5B3767]">Adrese</p>
                        <p className="text-[#5B3767]">Ēkas tips</p>
                    </div>

                    {/* Column 2 */}
                    <div className="text-left -ml-16">
                        <p className="text-[#5B3767] font-semibold">Alberta 1, Rīga</p>
                        <p className="text-[#5B3767] font-semibold">Ēkas tips</p>
                    </div>

                    {/* Column 3 */}
                    <div className="text-left ml-28 font-barlow400">
                        <p className="text-[#5B3767]">Platība</p>
                        <p className="text-[#5B3767]">Istabu sk.</p>
                        <p className="text-[#5B3767]">Stāvs</p>
                    </div>

                    {/* Column 4 */}
                    <div className="text-right font-barlow500">
                        <p className="text-[#5B3767] font-semibold">50 m<sup>2</sup></p>
                        <p className="text-[#5B3767] font-semibold">5</p>
                        <p className="text-[#5B3767] font-semibold">5</p>
                    </div>
                </div>

                <div className="w-[847px] max-w-screen-xl mt-2 relative z-10 text-left mt-6 mb-12">
                    <div className="border-b-[1px] border-[#CDC697]"></div>
                </div>

                {/* Green Section */}
                <div className="w-[850px] text-left">
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
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <GridItem key={index} src={src}/>
                    ))}
                </div>

                {/* Button Section */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/objekti">
                        <button
                            className="font-barlow500 w-[274px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                            SAZINĀTIES
                        </button>
                    </a>
                </div>
            </div>

            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 text-[#5B3767] mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-end lg:space-y-0">
                    {/* Left Section: Image and Agent Information */}
                    <div className="flex flex-col lg:flex-row items-end lg:space-x-8">
                        {/* Profile Picture */}
                        <div
                            className="w-[182px] h-[275px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${GunaJaskoBlue})`,
                            }}
                        ></div>

                        {/* Agent Information */}
                        <div className="flex flex-col space-y-2 text-left">
                            <h2 className="font-garamond500 text-4xl">GUNA JASKO</h2>
                            <p className="font-barlow500 text-lg uppercase tracking-wide">
                                NEKUSTAMO ĪPAŠUMU AĢENTS
                            </p>
                            <p className="font-barlow400 text-lg">TĀLR.: +371 20 016 688</p>
                            <p className="font-barlow400 text-lg">E-PASTS: JASKOGUNA@GMAIL.COM</p>
                        </div>
                    </div>

                    {/* Right Section: Social Icons */}
                    <div className="flex flex-col items-end space-y-4">
                        <h1 className="font-barlow500 text-[#9C9150] text-xl">DALĪTIES</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaFacebookF className="text-[#5B3767]"/>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaInstagram className="text-[#5B3767]" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ObjektiIeskats;
