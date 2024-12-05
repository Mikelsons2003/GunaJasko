import React from "react";
import Header from "./Headers/Header";
import Pakalpojumaimg1 from "../../img/Pakalpojumaimg1.png";
import {Link} from "react-router-dom";

function Pakalpojumi() {
    return (
        <div className="mx-auto font-sans text-[#5B3767] bg-[#FBF8FB]">
            <Header/>

            {/* Header Links */}
            <nav className="text-center py-6 text-sm mt-24">
                <ul className="inline-flex space-x-6 font-medium">
                    <Link to="/starpniecibas" className="hover:underline text-xl w-[288px]">STARPNECĪBAS PAKALPOJUMI</Link>
                    <Link to="/darijuma" className="hover:underline text-xl w-[288px]">DARĪJUMA NOFORMĒŠANA</Link>
                    <Link to="/projekti" className="hover:underline text-xl w-[320px]">JAUNO PROJEKTU ATTĪSTĪTĀJIEM</Link>
                </ul>
            </nav>

            <div className="w-full w-[864px] mx-auto px-8">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Main Section */}
            <div className="container mx-auto px-6 lg:px-20 py-16 h-[1450px] w-[1118px]">
                {/* Centered Title */}
                <h1 className="text-3xl lg:text-4xl font-serif text-center mb-12">
                    Pakalpojums (pilns cikls) ietver:
                </h1>

                {/* Content Section */}
                <div className="flex justify-between items-start">
                    {/* Left Column */}
                    <div className="w-2/3 text-left">
                        <ul className="space-y-4 text-lg leading-relaxed">
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Objekta tirgus izpēte un analīze, cenas
                                noteikšana
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Mārketinga aktivitātes – sludinājumu izveide,
                                profesionālas
                                foto, 3D tūre, aerofoto, video
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Pieejama plaša datubāze (personīgā, kā arī
                                350 aģentu
                                datubāze)
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Aktīva reklāma sociālajos tīklos – FB,
                                Instagram, Tiktok
                                (kopā ap 4000 sekotāji)
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Pārdošanas cikla vadīšana: zvanu pieņemšana,
                                potenciālo
                                pircēju klasificēšana, īpašumu prezentācija, pārrunu veikšana
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Juridisko jautājumu risināšana un līgumu
                                sagatavošana
                                (līgumus sagatavo kvalificēts jurists), vizītes pieteikšana pie notāra klātienē vai
                                digitinotāra,
                                dokumentu iesniegšana reģistrācijai zemesgrāmatā
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Darījuma noslēgums: pieņemšanas – nodošanas
                                akts un
                                atslēgu nodošana
                            </li>
                        </ul>
                    </div>

                    {/* Right Column (Yellow Text) */}
                    <div
                        className="w-1/3 text-[#9C9150] text-xl text-right mt-80"> {/* Adjust this value */}
                        <p>Pakalpojuma cena:</p>
                        <p className="mt-2">3-5% no darījuma summas.</p>
                        <p className="mt-2">Īres darījumiem:</p>
                        <p className="mt-2">viena mēneša īres maksas apmērā</p>
                    </div>
                </div>

                {/* Centered Button */}
                <div>
                    <button
                        className="w-[274px] h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium mt-12">
                        SAZINĀTIES
                    </button>
                </div>

                {/* Image Placeholder */}
                <div className="w-full max-w-screen-xl mx-auto px-8 flex items-center">
                    <div
                        className="w-[890px] h-[590px] flex-shrink-0 mt-16"
                        style={{
                            backgroundImage: `url(${Pakalpojumaimg1})`,
                            backgroundSize: "cover", // Ensures the image covers the entire box
                            backgroundPosition: "center", // Centers the image in the container
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pakalpojumi;
