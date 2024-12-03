import React from "react";
import { Link } from "react-router-dom";
import GunaParMani from '../../img/GunaParMani.png';

const HeaderParMani = () => {
    return (
        <div className="font-sans text-white bg-[#5B3767]">
            {/* Navigation Header */}
            <header className="w-full max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <h1 className="text-5xl text-[#CDC697] font-marcellus tracking-wide">
                    GUNA JASKO
                </h1>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-white text-sm">
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">SĀKUMS</Link>
                    <Link to="/par-mani" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAR MANI</Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAKALPOJUMI</Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">OBJEKTI</Link>
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">KONTAKTI</Link>
                    <Link to="/" className="text-[#371243] transition duration-300 ease-in-out">LV</Link>
                </nav>
            </header>

            {/* Content Section */}
            <div className="w-full max-w-screen-xl mx-auto px-8 flex items-center h-[700px]">
                {/* Left: Text Section */}
                <div className="w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-left">Par aģentu</h2>
                    <p className="text-lg leading-relaxed text-left">
                        Nekustamo īpašumu pārdošanā kopš 2006. gada, specializācija – dzīvojamais fonds:
                        dzīvokļi, privātmājas un zemju tirdzniecība un īre Rīgā un Rīgas rajonā. Pieredze apjomīgu
                        projektu tirdzniecībā kā projektu vadītājai (attīstītāju projekti virs 100 dzīvokļiem).
                    </p>
                    <p className="text-lg leading-relaxed text-left">
                        Vairāk kā 600 pārdošanas un īres darījumi. Brīvi runāju trīs valodās – latviešu,
                        krievu un angļu valodā.
                    </p>
                    <button className="mt-4 px-8 py-3 border border-[#CDC697] text-[#CDC697] hover:bg-[#CDC697] hover:text-[#5B3767] transition duration-300 ease-in-out">
                        SAZINĀTIES
                    </button>
                </div>

                {/* Right: Image Section */}
                <div className="w-1/2 flex justify-end">
                    <div className="w-[433px] h-[605px] object-contain"
                        style={{backgroundImage: `url(${GunaParMani})`}}
                        >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderParMani;
