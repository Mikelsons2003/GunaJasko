import React from "react";
import { Link } from "react-router-dom";
import BedroomImage from '../../img/BedroomImage.png';

const HeaderSakums = () => {
    return (
        <div className="mx-auto font-sans text-white">
            <header className="bg-cover bg-center h-[812px] relative" style={{backgroundImage: `url(${BedroomImage})`}}>
                {/* Overlay with pointer-events: none */}
                <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>

                <div className="absolute top-4 w-full flex flex-col items-center z-10">
                    {/* HeaderSakums Section */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center">
                        {/* Logo Section */}
                        <h1 className="text-5xl text-[#CDC697] font-marcellus tracking-wide p-3">
                            GUNA JASKO
                        </h1>

                        {/* Navigation */}
                        <nav className="flex space-x-8 text-white text-sm z-10">
                            <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">SĀKUMS</Link>
                            <Link to="/par-mani" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAR MANI</Link>
                            <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAKALPOJUMI</Link>
                            <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">OBJEKTI</Link>
                            <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">KONTAKTI</Link>
                            <Link to="/" className="text-[#371243] transition duration-300 ease-in-out">LV</Link>
                        </nav>
                    </div>

                    {/* Yellow Line */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 mt-2">
                        <div className="border-b-[1px] border-[#CDC697]"></div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="absolute bottom-80 left-[22rem] text-white space-y-6 z-10">
                    <h2 className="text-4xl font-bold text-left">
                        NEKUSTAMO ĪPAŠUMU AĢENTS
                    </h2>
                    <p className="max-w-lg leading-relaxed text-left">
                        Nekustamo īpašumu pārdošana kopš 2006. gada, specializācija - dzīvojamais fonds: dzīvokļi,
                        privātmājas un zemju tirdzniecība un īre Rīgā un Rīgas rajonā.
                    </p>
                    <div className="text-left">
                        <button
                            className="w-[317px] h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium">
                            PIETEIKT ĪPAŠUMU
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderSakums;
