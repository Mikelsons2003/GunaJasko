import React from "react";
import { Link } from "react-router-dom";
import GunaParMani from '../../img/GunaParMani.png';

const HeaderParMani = () => {
    return (
        <div className="font-sans text-white bg-[#5B3767]">
            {/* Navigation Header */}
            <header className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center relative top-4">
                {/* Logo Section */}
                <h1 className="text-6xl text-[#CDC697] font-marcellus tracking-wide p-3">
                    GUNA JASKO
                </h1>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-white text-sm">
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">
                        SĀKUMS
                    </Link>
                    <Link to="/par-mani" className="hover:text-[#CDC697] transition duration-300 ease-in-out">
                        PAR MANI
                    </Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">
                        PAKALPOJUMI
                    </Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">
                        OBJEKTI
                    </Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">
                        KONTAKTI
                    </Link>
                    <Link to="/" className="text-[#371243] transition duration-300 ease-in-out">
                        LV
                    </Link>
                </nav>
            </header>

            <div className="w-full max-w-screen-xl mx-auto px-8 mt-6">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-screen-xl mx-auto px-8 flex items-center h-[700px]">
                {/* Left: Text Section */}
                <div className="w-1/2 space-y-6">
                    <div className="w-[628px] h-[367px]">
                        <h2 className="text-4xl text-left">Par aģentu</h2>
                        <p className="text-lg leading-relaxed text-left mt-10">
                            Nekustamo īpašumu pārdošanā kopš 2006. gada, specializācija – dzīvojamais fonds:
                            dzīvokļu, privātmāju un zemju tirdzniecība un īre Rīgā un Rīgas rajonā.
                            Pieredze apjomīgu projektu tirdzniecībā kā projektu vadītājai (attīstītāju projekti virs 100
                            dzīvokļiem).
                        </p>
                        <p className="text-lg leading-relaxed text-left mt-20">
                            Vairāk ka 600 pārdošanas un īres darījumi.
                        </p>
                        <p className="text-lg leading-relaxed text-left mt-10">
                            Brīvi runāju trīs valodās – latviešu, krievu un angļu valodā.
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <button
                            className="w-[274px] h-[55px] border border-[#CDC697] text-[#CDC697] mt-10">
                            SAZINĀTIES
                        </button>
                    </div>
                </div>

                {/* Right: Image Section */}
                <div className="w-1/2 flex justify-end">
                    <div className="w-[433px] h-[605px] object-contain -mb-48"
                         style={{backgroundImage: `url(${GunaParMani})`}}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderParMani;
