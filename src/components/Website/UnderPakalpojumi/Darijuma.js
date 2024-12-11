import React from "react";
import Header from "../Header";
import Pakalpojumaimg2 from "../../../img/Pakalpojumaimg2.png";
import {Link} from "react-router-dom";
import Kabinets from "../../../img/Kabinets.png";

function Darijuma() {
    return (
        <div className="mx-auto font-sans text-[#5B3767] bg-[#FBF8FB]">
            <Header/>
            <div className="w-full mx-auto px-8 flex items-center h-[586px] bg-[#5B3767]">
                {/* Left: Text Section */}
                <div className="w-1/2 space-y-6 text-white ml-72 mt-24">
                    <h1 className="text-4xl">PAKALPOJUMI</h1>
                </div>

                {/* Right: Image Section */}
                <div
                    className="w-[709px] h-[436px] flex-shrink-0 mt-56 mr-[310px]"
                    style={{
                        backgroundImage: `url(${Kabinets})`,
                        backgroundSize: "cover", // Ensures the image covers the entire box
                        backgroundPosition: "center", // Centers the image in the container
                    }}
                >
                </div>
            </div>
            {/* Header Links */}
            <nav className="text-center py-6 text-sm mt-24">
                <ul className="inline-flex space-x-6 font-medium">
                    <Link to="/starpniecibas" className="hover:underline text-xl w-[288px]">STARPNECĪBAS
                        PAKALPOJUMI</Link>
                    <Link to="/darijuma" className="hover:underline text-xl w-[288px]">DARĪJUMA NOFORMĒŠANA</Link>
                    <Link to="/projekti" className="hover:underline text-xl w-[320px]">JAUNO PROJEKTU
                        ATTĪSTĪTĀJIEM</Link>
                </ul>
            </nav>

            <div className="w-full w-[864px] mx-auto px-8">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Main Section */}
            <div className="container mx-auto px-6 lg:px-20 py-16 h-[1167px] w-[1041px]">
                {/* Centered Title */}
                <h1 className="text-3xl lg:text-4xl font-serif text-center mb-12">
                    Pakalpojums ietver:
                </h1>

                {/* Content Section */}
                <div className="flex justify-between items-start">
                    {/* Left Column */}
                    <div className="w-2/3 text-left">
                        <ul className="space-y-4 text-lg leading-relaxed">
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Darījuma juridiskā stratēģija un soļi
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Rokasnaudas vai priekšlīguma sagatave
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Pirkuma līguma sagatave
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute left-0">—</span> Pieņemšanas-nodošanas akta sagatavošana
                            </li>
                        </ul>
                    </div>

                    {/* Right Column (Yellow Text) */}
                    <div
                        className="w-1/3 text-[#9C9150] text-xl text-right mt-16"> {/* Adjust this value */}
                        <p>Pakalpojuma cena:</p>
                        <p className="mt-2">1% no darījuma summas.</p>
                        <p className="mt-2">bet ne mazāk kā <span className="text-lg">500</span> EUR</p>
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
                            backgroundImage: `url(${Pakalpojumaimg2})`,
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

export default Darijuma;
